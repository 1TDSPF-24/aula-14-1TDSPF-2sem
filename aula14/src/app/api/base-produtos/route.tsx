import { NextResponse } from "next/server";

export async function GET()
{
    return NextResponse.json({mensagem: "Hello World!"});

    
}