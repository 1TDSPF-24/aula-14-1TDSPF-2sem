import { NextResponse } from "next/server";

// Método get-all-produtos
export async function GET() {
   return NextResponse.json({mensagem:"hellw World!"});
}