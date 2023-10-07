import { SchoolEditRequest, addScool, readSchools, removeSchool } from "@/lib/fs/school"
import { createHash } from 'node:crypto'
import { readToken } from "@/lib/fs/token"

export const dynamic = 'auto'
export const revalidate = 0

export async function OPTIONS(request: Request) {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    })
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