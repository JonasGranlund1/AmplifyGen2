import { cookieBasedClient, isAuthenticated } from "../../../utils/amplify-utils";
import React from "react";


const Post = async ( { params } : { params : { id: string }}) => {
    if (!params.id) return null;

    const isSignedIn = await isAuthenticated();
    const {data: post } = await cookieBasedClient.models.Post.get(
        {
            id: params.id
        },
        {
            authMode: "apiKey",
            selectionSet: ["id", "title"]  
        }
    );
    
    return (
        
        <div className="flex flex-col items-center p-4 gap-4">
            <h1 className="text-2xl font-bold">Post information:</h1>
            <div className="border rounded w-1/2 m-auto bg-gray-400 p-4">
                <h2>Title: {post.title}</h2>
            </div>            
            
            
        </div>
        
        )
    
};

export default Post;

