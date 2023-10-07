import { readSchools } from "@/lib/fs/school"

export async function GET(request: Request) {
    const school = readSchools()
    return Response.json({school})
}