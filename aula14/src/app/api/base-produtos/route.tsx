// criando o metodo get - deve ter export, metodo async e ser uma funcao com nome GET sem paramentros, para assim retornar todos os produtos

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({mensagem:"Hello World!"});
}

