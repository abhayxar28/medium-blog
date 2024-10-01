import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@codingworld/medium-common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function Auth({type}: {type: "signup" | "signin"}) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs]= useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin": "signup" }`, postInputs)
            const jwt = response.data;
            localStorage.setItem('token', jwt.token);
            navigate('/blogs')
        }catch(e){
            console.error(e);
        }
    }



  return (
    <div>
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center m-10">
                <div>
                    <div className="px-20">
                        <div className="text-4xl font-extrabold ">
                            {type === "signin" ? "Login to account" : "Create an account"}
                        </div>
                        <div className="text-slate-400 mb-5">
                            {type === "signin" ?"Don't have an account? ":"Already have an account?"} 
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Signup" : "Login"}</Link>
                        </div>
                    </div>
                        <div>
                            {type === 'signup' ? <LabelledInput label="Name"  placeholder="Enter your name" onchange={(e)=>{
                                setPostInputs(c => ({
                                    ...c,
                                    name: e.target.value,
                                }))
                            }}/> : null }
                            <LabelledInput label="Email"  placeholder="Enter your email" onchange={(e)=>{
                                setPostInputs(c => ({
                                    ...c,
                                    email: e.target.value,
                                }))
                            }}/>
                            <LabelledInput label="Password" type="password" placeholder="Enter your password" onchange={(e)=>{
                                setPostInputs(c => ({
                                    ...c,
                                    password: e.target.value,

                                }))
                            }}/>
                            <div className="pt-5">
                                <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900   focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Signup" : "Signin"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string
    onchange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

function LabelledInput({label, placeholder, onchange, type}: LabelledInputType){
    return(
        <div>   
            <div>
                <label className="block mb-2 pt-3 text-sm font-bold text-gray-900 dark:text-white">{label}</label>
                <input type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required onChange={onchange}/>
            </div>
        </div>
     )
}
