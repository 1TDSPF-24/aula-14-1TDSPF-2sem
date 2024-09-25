import {NextResponse } from "next/server";
import { promises as fs } from "fs";


//MÉTODO GET-ALL-PRODUTOS
export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    //Realizar um PARSE do arquivo para JSON.
    const produtos = JSON.parse(file);

    //Retornando o arquivo em formato de JSON para quem fez a REQUISIÇÃO:
    return NextResponse.json(produtos);
}

