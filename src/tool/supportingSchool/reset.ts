import { removeAllSchools, removeSchool } from '../../lib/fs/school'
import { config } from 'dotenv'
import path from 'path'
config({path: path.join(process.cwd(), '.env.development.local')})

removeAllSchools()