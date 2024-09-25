import { NextResponse } from "next/server";
import { promises as fs } from "fs";



// Método get-all-produtos
export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    //Realizar um parse do arquivo para json
    const produtos = JSON.parse(file);

    // Retornar o arquivo em formato de json para quem fez a Requisicao
   return NextResponse.json(produtos);
}