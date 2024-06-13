import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

interface product {
    id: number;
    name: string;
    price: number;
}

const products: product[] = [
    {
        id: 1,
        name: "Milk",
        price: 100,
    },
    {
        id: 2,
        name: "Bread",
        price: 200,
    },
    {
        id: 3,
        name: "Butter",
        price: 300, 
    }
]

export async function POST (request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if(!validation.success) {
        return NextResponse.json(
            {message: validation.error.errors},
            {status: 404}
        )
    }

    const {id, name, price} = body;
    
    const product = {
        id,
        name,
        price,
    }

    products.push(product);

    return NextResponse.json(
        {data: product},
        {status: 200}
    );

}

export async function GET (request: NextRequest) {
    return NextResponse.json(products,
        {status: 200},
    )
}