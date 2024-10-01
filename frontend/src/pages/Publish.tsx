import AppBar from '../components/AppBar';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Publish() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = async()=>{
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title: title,
            content: description,
        }, {
            headers: {
                Authorization: localStorage.getItem("token") 
            }
        })
        navigate(`/blog/${response.data.id}`)   
    }

  return (
    <div>
        <div>
            <AppBar/>
        </div>
        <div className='mt-4 mx-28'>
            <div className='mx-4'>
                <input onChange={(e)=> setTitle(e.target.value)}  className=" h-20 text-gray-900 text-4xl block w-full p-4 font-medium focus:outline-none placeholder:text-4xl placeholder:font-medium" placeholder="Title"/>
            </div>
            <div className='mx-8'>
                <textarea onChange={(e)=> setDescription(e.target.value)} rows={18} draggable="false" className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className='flex flex-row-reverse pt-10'>
                <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700" >Publish</button>
            </div>
        </div>
    </div>
  )
}
