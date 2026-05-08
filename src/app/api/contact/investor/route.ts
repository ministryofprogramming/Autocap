import { NextRequest, NextResponse } from 'next/server';
import { handleInvestorForm } from './handler';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const { status, body: responseBody } = await handleInvestorForm(body);
  return NextResponse.json(responseBody, { status });
}

export async function GET() {
  return NextResponse.json({ error: 'method_not_allowed' }, { status: 405 });
}
