import { NextResponse } from "next/server";
import { promises as fs } from "fs"; //possui metodos que trabalham com arquivos

// const dados = [
//     { id: 1, nome: "garfo", qtd: 1000 },
//     { id: 2, nome: "colher", qtd: 2000 },
//     { id: 3, nome: "faca", qtd: 1000 },
//     { id: 4, nome: "prato", qtd: 1000 },
//     { id: 5, nome: "copo", qtd: 1000 },
//     { id: 6, nome: "guardanapo", qtd: 10000 },
// ];

// MÉTODO GET-ALL-PRODUTOS
// o padrão DEVE ser seguido
export async function GET() {

    //utilizar processos LOCAIS (não funcionam remoto)
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8"); //process.cwd -> processo do Node

    //realizar um PARSE do arquivo para JSON
    const produtos = JSON.parse(file); // o arquivo é originalmente uma String

    // retornando o arquivo em formato de JSON para quem fez a REQUISIÇÃO 
    return NextResponse.json(produtos);
}

