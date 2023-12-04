import MERN from '../../public/img/Mern_Stack_Developer_Logo_Combo_Pack_Sticker_by_Dev-Stuff-removebg-preview.png'
import react from '../../public/img/icons8-react-100.png'
import vite from '../../public/img/icons8-vite-500.png'
import express from '../../public/img/icons8-express-js-512.png'
import mongodb from '../../public/img/mongodb.png'
import { Link } from 'react-router-dom'

const Blogs= () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Blog 1 */}
          <Card
          img ={MERN}
          name="MERN Stuck"
          text="MERN is one of several variations of the MEAN stack(MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js."
          link="https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,MongoDB%20%E2%80%94%20document%20database"
          ></Card>
          {/* Blog 2 */}
          <Card
          img ={react}
          name="react js"
          text="React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components"
          link="https://react.dev/"
          ></Card>
          {/* Blog 3 */}
          <Card
          img ={vite}
          name="vite"
          text="Vite JS is majorly used to set up a development environment for various frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading by following just three commands."
          link="https://vitejs.dev/"
          ></Card>
          {/* Blog 4 */}
          <Card
          img ={express}
          name="express js"
          text="Express is a node js web application framework that provides broad features for building web and mobile applications."
          link="https://expressjs.com/"
          ></Card>
          {/* Blog 5 */}
          <Card
          img ={mongodb}
          name="Mongo DB"
          text="MongoDB is a non-relational document database that provides support for JSON-like storage."
          link="https://www.mongodb.com/brand-resources"
          ></Card>
        </div>
      </div>
    </section>
  )
}

export default Blogs;


function Card({img,name,text,link}){
    return(
        <>
            <div data-aos="zoom-out" className="p-4 md:w-1/3">
            <div className="h-full border-[1px] shadow-lg shadow-slate-200 border-slate-400 border-opacity-60 rounded-lg overflow-hidden">
            <aside className=' w-full md:flex items-center justify-center bg-stone-200 rounded-lg'>
              <img className="  w-full md:w-48 object-cover object-center" src={img} alt={img} />
            </aside>
              <div className="p-6 flex flex-col justify-end">
                <h1 className="title-font text-lg font-medium capitalize text-gray-900 mb-3">{name}</h1>
                <p className=" text-sm font-medium mb-3">{text}</p>
                <div className='flex justify-between items-end'>
                <Link target='_blank' to={link} className="text-indigo-500 inline-flex items-center ">Learn More</Link>

                <div className='flex  gap-2 w-auto'>
                    <span className='flex items-center'><i className='bx bxs-user-circle pr-1' ></i>  30</span>
                    <span className='flex items-center'><i className='bx bx-message-rounded-dots pr-1' ></i>  30</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}