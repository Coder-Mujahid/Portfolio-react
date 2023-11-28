import home from '../../public/img/icons8-home.gif'
import skill from '../../public/img/icons8-skill.gif'
import project from '../../public/img/icons8-project (1).gif'
import blog from '../../public/img/blogs.gif'
import contact from '../../public/img/icons8-phone-message.gif'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <ul className=' xl:mt-20 w-full mx-auto md:flex items-center justify-center gap-10 p-3'>
            <Link to={"/"}>
                <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={home} alt="home" />home</li>
            </Link>
            
            <Link to={"/Skill"}>
              <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={skill} alt="skill" />skill</li>
            </Link>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={project} alt="project" />project</li>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={blog} alt="blog" />blog</li>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={contact} alt="contact" />contact</li>

        </ul>

    </div>
  )
}
