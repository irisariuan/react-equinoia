import { readSchools } from "@/lib/fs/school"

export async function GET(request: Request) {
    const schools = await readSchools()
    return Response.json({schools})
}