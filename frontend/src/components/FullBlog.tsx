import { Blog } from '../hooks';
import AppBar from './AppBar';
import { Avatar } from './BlogCard';

export default function FullBlog({blog} : {blog: Blog | undefined}) {
  if (!blog) {
    return <div>No blog data available</div>;
  }
  return (
    <div>
      <AppBar/>
      <div className='flex justify-content '>
        <div className="grid grid-cols-12 w-full px-20 pt-200 max-w-screen-2xl pt-12">
              <div className="col-span-8">
                  <div className='text-5xl font-extrabold '>
                    {blog.title}
                  </div>
                  <div className='text-slate-500 pt-2 '>
                    Posted on 2nd December 2003
                  </div>
                  <div className='pt-4'>
                    {blog.content}
                  </div>
              </div>
              <div className="col-span-4">
                <div className='text-slate-600 font-medium'>
                  Author
                </div>
                <div className='flex w-full'>
                  <div className='pr-4 flex justify-center flex-col'>
                    <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                  </div>
                  <div>
                    <div className='text-xl font-bold'>
                      {blog.author.name || "Anonymous"} 
                    </div>
                    <div className='pt-2 text-slate-500'>
                      Random catch phrase about the author's ability to grab the user's attention 
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
