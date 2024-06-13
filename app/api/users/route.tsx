import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id:1, name : "divyansh"},
        {id:2, name : "shvani"},
    ])
}

export async  function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation) {
        return NextResponse.json({
            error: "invalid request body",
        })
    }

    return NextResponse.json(body);
} 