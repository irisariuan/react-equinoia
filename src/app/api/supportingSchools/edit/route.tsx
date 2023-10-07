import { SchoolEditRequest, addScool, readSchools, removeSchool } from "@/lib/fs/school"
import { createHash } from 'node:crypto'
import { readToken } from "@/lib/fs/token"

export const dynamic = 'auto'
export const revalidate = 0

export async function OPTIONS(request: Request) {
    return Response.json({}, {headers: {
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Allow': 'GET,POST,OPTIONS'
    }})
}

export async function POST(request: Request) {
    if (request.method !== 'POST') {
        return Response.error()
    }

    const setting = readToken()
    const r: SchoolEditRequest = await request.json()
    if (!r) {
        return Response.json({ message: 'Request JSON error' }, { status: 400 })
    }

    if (!setting.supportingSchools.edit.includes(createHash('sha256').update(r.token).digest('hex'))) {
        return Response.json({ message: 'This route requires token for authentication' }, { status: 401 })
    }


    let f = readSchools()
    if (!f) {
        return Response.json({ message: 'Internal Server Error' }, { status: 500 })
    }

    for (const school of r.data) {
        switch (r.type) {
            case 'add':
                if (!await addScool(school)) {
                    return Response.json({ message: 'School already exists' }, { status: 400 })
                }
                break
            case 'remove':
                if (!await removeSchool(school)) {
                    return Response.json({ message: 'School not found' }, { status: 400 })
                }
                break
        }
    }
    return Response.json({ message: 'OK' }, { status: 200 })
}