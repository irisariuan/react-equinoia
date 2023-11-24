export interface Request {}

export interface PrivateRequest extends Request {
    token: string
}