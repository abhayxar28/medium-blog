import { Avatar } from "./BlogCard"
import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <div>
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex justify-center flex-col text-2xl font-semibold cursor-pointer ">
              <Link to={'/blogs'}>
                Medium
              </Link>
            </div>  
            <div>
              <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-4 ">New</button>
              </Link>
              <Avatar size={"big "} name="H"/>
            </div>
        </div>
    </div>
  )
}
