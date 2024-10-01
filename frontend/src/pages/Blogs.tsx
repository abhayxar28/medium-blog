import BlogCard from "../components/BlogCard"
import AppBar from '../components/AppBar';
import { useBlogs } from "../hooks";
import { useEffect, useState } from "react";
import Skeleton from '../components/Skeleton';

export default function Blogs() {
  const {loading, blogs} = useBlogs();

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const epochDate = new Date();
    const formatted = epochDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setFormattedDate(formatted); // Store the formatted date string
  }, []);

  if(loading){
    return (
      <div>
        <AppBar/>
        <div className="flex justify-center">
          <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          </div>
        </div>
      </div>
    )
  }
  

  return (
    <div>
      <div>
        <AppBar/>
      </div>
      <div className="flex justify-center">
      <div>
        {blogs && blogs.length > 0 ?(blogs.map(blog =><BlogCard 
            id={blog.id}
            authorName={blog.author.name || "Anonymous" }
            title={blog.title}
            content={blog.content}
            publishedDate={formattedDate}
          />)):  (
            <p>No blogs available</p>
          ) }
      </div>
    </div>
    </div>
  )
}
