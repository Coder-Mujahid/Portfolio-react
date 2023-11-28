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
            <Card
            img={example1}
            name="Thakurgaon Polytechnoc Institute"
            link="https://tpi.tpicpc.codes/"
            ></Card>

            <Card
            img={example2}
            name=" world country details"
            link="https://coder-mujahid.github.io/REST_API_with_Modal/"
            ></Card>

            <Card
            img={example3}
            name="to do list with js"
            link="https://coder-mujahid.github.io/to_do_list/"
            ></Card>

            <Card
            img={example4}
            name=" simple apple shop with js"
            link="https://coder-mujahid.github.io/Apple_Shop_with_dom/ "
            ></Card>

        </div>
    </div>
  )
}

function Card({img,name,link}){
    return(
        <div data-aos="zoom-out" className='md:flex gap-5 items-end mb-5 w-auto rounded-xl border-[1px] border-slate-100 shadow-md shadow-slate-300 p-3'>
            <img className='w-72 md:h-56' src={img} alt={img} />
           <div>
                <h2 className=" text-lg my-2 capitalize font-semibold text-black">{name} </h2>
                <small className=' font-semibold text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, adipisci commodi tempora nobis eum ab provident, repudiandae similique omnis facere nostrum repellat temporibus perferendis consequatur, et magni modi deserunt obcaecati.</small>
                <Link target='_blank' to={link}><button className=" my-2 font-semibold capitalize text-black shadow-xl shadow-slate-400 text-sm py-2 w-full bg-[#4cc9f0] rounded-lg hover:text-white hover:tracking-wider hover:bg-[#00b4d8] transition duration-500 ease-in">
            View more
          </button></Link>
           </div>
        </div>
    )
}