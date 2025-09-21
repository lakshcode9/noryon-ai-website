import {NextResponse} from 'next/server';
import {getSql} from '@/lib/db';

export async function POST(req: Request) {
  try {
    const {name, email, message} = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({error: 'Missing fields'}, {status: 400});
    }

    const sql = getSql();
    await sql`CREATE TABLE IF NOT EXISTS contacts (
      id bigserial PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL,
      message text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )`;

    await sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})`;

    return NextResponse.json({ok: true}, {status: 201});
  } catch (err) {
    console.error(err);
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}
