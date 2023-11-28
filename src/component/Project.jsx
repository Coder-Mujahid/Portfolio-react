import example1 from '../../public/img/Thakurgaon Polytechnoc Institute.png'
import example2 from '../../public/img/world country details.png'
import example3 from '../../public/img/to do list with js.png'
import example4 from '../../public/img/simple apple shop with js.png'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <div>
         <h2 className=" text-2xl  mb-5 capitalize font-semibold text-black">
         Here are some projects I have done
        </h2>
        <div className=''>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
  )
}

function Card(){
    return(
        <div className='md:flex gap-5 items-center mb-5 rounded-xl border-[1px] border-slate-100 shadow-md shadow-slate-300 p-3'>
            <img className=' w-72 h-full' src={example1} alt="example1" />
           <div>
                <h2 className=" text-lg my-2 capitalize font-semibold text-black">Here are some projects I have done </h2>
                <small className=' font-semibold text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, adipisci commodi tempora nobis eum ab provident, repudiandae similique omnis facere nostrum repellat temporibus perferendis consequatur, et magni modi deserunt obcaecati.</small>
                <Link><button className=" my-2 font-semibold capitalize text-black shadow-xl shadow-slate-400 text-sm py-2 w-full bg-[#4cc9f0] rounded-lg hover:text-white hover:tracking-wider hover:bg-[#00b4d8] transition duration-500 ease-in">
            View more
          </button></Link>
           </div>
        </div>
    )
}