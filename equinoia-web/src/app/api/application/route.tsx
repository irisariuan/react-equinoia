import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const formData = await request.formData()
	// todo
	return NextResponse.json({message: 'ok'})
}