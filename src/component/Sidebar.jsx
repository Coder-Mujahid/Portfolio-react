import img from "../../public/img/mujahid.png";
import bd from '../../public/img/bd logo.png'
export default function Sidebar() {
  return (
    <div className=" col-span-1 flex flex-col justify-center w-full min-h-screen">

          <div className="md:flex items-center mb-10 md:mb-0 pt-5 md:px-10">
        <div className=" flex items-center lg:justify-center w-full">
          <aside className="w-full md:w-44  rounded-lg mb-5 md:mb-0">
            <img className="w-full rounded-md bg-gradient-to-r from-[#83c5be] to-[#457b9d]" src={img} alt="profile" />
          </aside>
        </div>
        <div className=" capitalize flex flex-col md:pl-5 md:justify-end md:h-full gap-2  w-full">
          {/* <h2 className=" text-3xl font-semibold text-slate-800 text-center w-full">Welcome to my portfolio  </h2> */}
          <h2 className=" text-2xl font-semibold text-blue-500">
            md. mujahidul islam
          </h2>
          <ExampleComponent></ExampleComponent>
          <small className=" font-semibold"><img className=" w-[30px] inline-block mr-2 h-[16px]" src={bd} alt="bd logo" />from bangladesh</small>
          <ul className="flex text-3xl  ">
            <li>
              <i className="bx bxl-linkedin-square pr-4 text-[#0077b5]"></i>
            </li>
            <li>
              <i className="bx bxl-twitter pr-4 text-[#1DA1F2]"></i>
            </li>
            <li>
              <i className="bx bxl-facebook-square pr-4 text-[#0866FF]"></i>
            </li>
            <li>
              <i className="bx bxl-github pr-4 text-[#2b3137]"></i>
            </li>
            <li>
              <i className="bx bxl-telegram pr-4 text-[#0088cc]"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className=" capitalize md:p-10 mb-5">
        <ul className=" flex flex-col gap-4 mb-5">
          <li className=" flex items-center ">
            <i className="bx bxs-phone shadow-xl shadow-slate-400 text-2xl rounded-lg  py-2 px-3 bg-gradient-to-r from-[#83c5be] to-[#457b9d]"></i>
            <div className=" flex flex-col font-bold pl-6">
              <small>Phone</small>
              <small className=" text-blue-600 tracking-wide">+8801737705511</small>
            </div>
          </li>

          <li className=" flex items-center">
            <i className="bx h-full bxs-envelope shadow-xl shadow-slate-400 text-2xl rounded-lg  py-2 px-3 bg-gradient-to-r from-[#83c5be] to-[#457b9d]"></i>
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>Email</small>
              <small className=" text-blue-600 tracking-wide">mujahidislam400301@gmail.com</small>
            </div>
          </li>

          <li className=" flex items-center">
            <i className="bx bxs-location-plus shadow-xl shadow-slate-400 text-2xl rounded-lg  py-2 px-3 bg-gradient-to-r from-[#83c5be] to-[#457b9d]"></i>
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>location</small>
              <small className=" text-blue-600 tracking-wide">Thakurgaon , Rongpur, Bangladesh</small>
            </div>
          </li>
        </ul>

        <button className="font-semibold capitalize text-black shadow-xl shadow-slate-400 text-sm py-2 w-full bg-[#4cc9f0] rounded-lg hover:text-white hover:tracking-wider hover:bg-[#00b4d8] transition duration-500 ease-in">
          View my resume
        </button>
      </div>
    </div>
  )
}










// text animation 
import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'frontend web developer', // Types 'One'
        1000, // Waits 1s
        'Junior Frontend Developer', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'Frontend Architect', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '18px',fontWeight:'600', display: 'inline-block' }}
    />
  )
}