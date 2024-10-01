import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName: string;
    title: string; 
    content: string;
    publishedDate: string;
    id: string;
}

export default function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b-2 border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
                <div>
                    <Avatar name={authorName}/>
                </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                {authorName}  
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
            </div>
            <div className="font-thin pl-2 text-slate-500 flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-extralight">
            {content.slice(0,100) + "...."}
         </div>
         <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
         </div>
    </div>
    </Link>
  )
}

export function Avatar({name, size= "small"}: {name: string, size?: string}){
    return(
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small"? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs": "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    )
}

export function Circle(){
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500">

        </div>
    )
}
