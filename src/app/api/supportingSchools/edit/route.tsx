import { SchoolEditRequest, readCsv, writeCsv } from "@/lib/fs/csv"
import { createHash } from 'node:crypto'
import { readToken } from "@/lib/fs/token"

export const dynamic = 'true'

export async function POST(request: Request) {
    if (request.method !== 'POST') {
        return Response.error()
    }

    const setting = readToken() 
    const r: SchoolEditRequest = await request.json()
    if (!r) {
        return Response.json({message: 'Request JSON error'}, {status: 400})
    }

    if (!setting.supportingSchools.edit.includes(createHash('sha256').update(r.token).digest('hex'))) {
        return Response.json({ message: 'This route requires token for authentication' }, { status: 401 })
    }

    if (r.type === 'change') {
        writeCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv', r.data)
        return Response.json({message: 'OK'}, {status: 200})
    }
    
    let f = readCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    if (!f) {
        return Response.json({message: 'Internal Server Error'}, {status: 500})
    }
    
    for (const school of r.data) {
        switch (r.type) {
            case 'add':
                if (f.find(s => s.schoolName.chineseName.trim() === school.schoolName.chineseName.trim())) {
                    return Response.json({message: 'School already exists'}, {status: 400})
                }
                f.push(school)
                break
            case 'remove':
                const i = f.findIndex(s => s.schoolName.chineseName.trim() === school.schoolName.chineseName.trim())
                if (i === -1) {
                    return Response.json({message: 'School does not exist'}, {status: 400})
                }
                f.splice(i, 1)
                break
        }
    }
    writeCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv', f)
    return Response.json({message: 'OK'}, {status: 200})
}