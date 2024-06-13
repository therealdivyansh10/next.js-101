import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// interface Props {
//     params : {
//         id: number
//     }
// }

export function GET(request: NextRequest, 
    {params: {id} }: {params: {id: number}}
) {

    if( id > 10) {
        return NextResponse.json(
            {error: "User not found"},
            {status: 404}
        );
    }

    return NextResponse.json({
        id: 1 , name: "Mosh"
    })
}

export async function PUT(request: NextRequest,{params: { id}} : {params: {id:number}} ){
    // validate the request body
    // if invalid ,reutn 400
    // fetch the user with given id 
    // if doesnt't exist return 404
    // update the user
    // reutnr updated user

    const body = await request.json();
    // if(!body.name) {
    //     return NextResponse.json(
    //         {message : "name is required"},
    //         {status: 404});
    // } 
    
    const validation = schema.safeParse(body);
    if(!validation.success) {
        return NextResponse.json(
            {error: validation.error.errors},
            {status: 400}
        );
    }

    if( id > 10) {
        return NextResponse.json(
            {error: "User Not found"},
            {status: 400}
        )
    }
    return  NextResponse.json({ id: 1 , name: body.name});

}

export async function DELETE( 
    request: NextRequest,
    {params: { id}} : {params: {id:number}}
) {
    
    if(id >10) {
        return NextResponse.json(
            {error: "User Not found"},
            {status: 400}
        )
    }
    
    return NextResponse.json({});
}