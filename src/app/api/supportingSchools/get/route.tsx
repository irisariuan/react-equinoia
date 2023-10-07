import { readSchools } from "@/lib/fs/school"

export async function GET(request: Request) {
    const school = readSchools(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    return Response.json({school})
}