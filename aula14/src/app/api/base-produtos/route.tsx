import { NextResponse } from "next/server";
import { promises as hit } from "fs";



export async function GET()
{
    // process.cwd() retorna a pasta raiz do nosso projeto
    const file = await hit.readFile(process.cwd() + "/src/data/base.json",
    "utf8");

    const produtos = JSON.parse(file);

    // Retorna o arquivo em formato JSON para quem fez a requisição
    return NextResponse.json({produtos});
}