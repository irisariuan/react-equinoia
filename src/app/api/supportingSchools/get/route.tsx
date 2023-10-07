import { readSchools } from "@/lib/fs/school"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
    const schools = await readSchools()
    return Response.json({ schools })
}