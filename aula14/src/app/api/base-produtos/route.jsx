import {NextResponse} from 'next/server'

const lista = [
    { id: 1, nome: "garfo", qtd: 1000 },
    { id: 2, nome: "colher", qtd: 2000 },
    { id: 3, nome: "faca", qtd: 1000 },
    { id: 4, nome: "prato", qtd: 1000 },
    { id: 5, nome: "copo", qtd: 1000 },
    { id: 6, nome: "guardanapo", qtd: 10000 },

    export async function GET () {
        return NextResponse.json(dados);
        
    }
];