import { NextResponse } from "next/server";
import { promises as fs } from "fs";


// criando o metodo get all - deve ter export, metodo async e ser uma funcao com nome GET sem paramentros, para assim retornar todos os produtos
export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    //Realiar um parse do arquivo para JSON
    const produtos = JSON.parse(file);


    //Retornando o arquivo em formato de JSON para quem fez a requisicao:
    return NextResponse.json(produtos);
}

