import { NextResponse } from "next/server";

// MÉTODO GET-ALL-PRODUTOS
export async function GET() {
    return NextResponse.json({mensagem:"Hello World"})
}