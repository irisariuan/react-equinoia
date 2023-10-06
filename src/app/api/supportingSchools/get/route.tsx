import { readCsv } from "@/lib/fs/csv"

export async function GET(request: Request) {
    const school = readCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    return Response.json({school})
}