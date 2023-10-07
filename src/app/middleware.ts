import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.method === 'OPTIONS') {
        return NextResponse.json({}, {
            status: 200, headers: {
                'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET'
            }
        })
    }
}

export const config = {
    matcher: '/api/:path*',
}