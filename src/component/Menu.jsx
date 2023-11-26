import home from '../../public/img/icons8-home.gif'
import skill from '../../public/img/icons8-skill.gif'
import project from '../../public/img/icons8-project (1).gif'
import blog from '../../public/img/blogs.gif'
import contact from '../../public/img/icons8-phone-message.gif'

export default function Menu() {
  return (
    <div className='col-span-2 '>
        <ul className=' xl:mt-20 w-full mx-auto md:flex items-center justify-center gap-10 p-3'>
            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={home} alt="home" />home</li>
            
            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={skill} alt="skill" />skill</li>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={project} alt="project" />project</li>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={blog} alt="blog" />blog</li>

            <li className=' bg-white rounded-xl text-center font-semibold capitalize mb-5 md:mb-0 flex flex-col h-44 md:h-auto items-center justify-center gap-4 md:gap-2  px-5 py-3 border-[1px] border-slate-300 shadow-md shadow-slate-300'><img className='w-16' src={contact} alt="contact" />contact</li>

        </ul>
    </div>
  )
}
