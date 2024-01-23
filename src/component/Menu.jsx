import home1 from '../../public/img/wired-flat-63-home.gif'
import skill from '../../public/img/icons8-skill.gif'
import project from '../../public/img/icons8-project (1).gif'
import blog from '../../public/img/blogs.gif'
import contact from '../../public/img/icons8-phone-message.gif'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <ul className=' xl:mt-20 w-full mx-auto grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-3 items-center justify-center gap-3 lg:gap-10 p-3'>
            <Link to={"/"}>
                <li className=' md:py-6 p-1 bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-auto items-center justify-center gap-1 md:gap-2  lg:px-5 lg:py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='md:w-16 w-10' src={home1} alt="home" />home</li>
            </Link>
            
            <Link to={"/Skill"}>
              <li className=' md:py-6 p-1 bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-auto items-center justify-center gap-1 md:gap-2  lg:px-5 lg:py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='md:w-16 w-10' src={skill} alt="skill" />skill</li>
            </Link>
            <Link to={"/Project"}>
              <li className=' md:py-6 p-1 bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-auto items-center justify-center gap-1 md:gap-2  lg:px-5 lg:py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='md:w-16 w-10' src={project} alt="project" />project</li>
            </Link>
           
            <Link to={"/Blogs"}>
              <li className=' md:py-6 p-1 bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-auto items-center justify-center gap-1 md:gap-2  lg:px-5 lg:py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='md:w-16 w-10' src={blog} alt="blog" />blog</li>
            </Link>
            
            <Link to={"/Contact"}>
              <li className=' md:py-6 p-1 bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-auto items-center justify-center gap-1 md:gap-2  lg:px-5 lg:py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='md:w-16 w-10' src={contact} alt="contact" />contact</li>
            </Link>
            
        </ul>

    </div>
  )
}
