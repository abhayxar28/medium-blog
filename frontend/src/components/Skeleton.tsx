import { Circle } from "./BlogCard";

export default function Skeleton() {
  return (
    <div>      
      <div role="status" className="max-w-sm animate-pulse">

      <div className="border-b-2 border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
                <div>
                  <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
              <Circle/>
            </div>
            <div className="flex justify-center flex-col pl-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
            <div className="font-thin pl-2 text-slate-500 flex justify-center flex-col">
              <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        </div>
        <div className="text-md font-extralight">
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
         </div>
         <div className="text-slate-500 text-sm font-thin pt-4">
         <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
         </div>
      </div>
    </div>
    </div>
  )
}
