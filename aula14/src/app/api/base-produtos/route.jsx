import {NextResponse} from 'next/server'
import {promises as fs } from 'fs'


    export async function GET () {

        cons file = fs.readFile(process.cwd() + '/src/data/base.json,'utf-8');

        const produtos = JSON.parse(file)

        return NextResponse.json(produtos);
        
    }
{};