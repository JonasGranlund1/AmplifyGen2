import React from 'react';
import { createPost } from '../_actions/actions';


const AddPost = () => {
    
    return (
        <div>
            <form action={createPost} className='p-4 flex flex-col items-center gap-4'>
                <input type="text" id="title" name="title" placeholder="title" className="border border-gray-200 text-gray-900 block p-2 rounded-lg" />
                <button type="submit" className="text-white bg-teal-600 rounded p-4">
                    Submit
                </button>
            </form>
        </div>
        
        )
}


export default AddPost;

