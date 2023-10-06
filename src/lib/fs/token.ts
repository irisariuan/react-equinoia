import { readFileSync } from "fs";

export function readToken(): { supportingSchools: { edit: string[] } } {
    return JSON.parse(readFileSync(process.cwd() + '/src/private/token.json', { encoding: 'utf8' }))
}