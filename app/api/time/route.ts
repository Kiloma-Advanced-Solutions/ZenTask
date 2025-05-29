import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST() {
  return NextResponse.json(
    { ok: false, reason: 'Not implemented' }, 
    { status: 501 }
  );
} 