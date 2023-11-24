import img from "../../public/img/mujahid.png";
export default function Sidebar() {
  return (
    <>
        <div className="w-[600px] md:flex bg-slate-300 items-center">
      <div>
        <aside className="w-44 p-3 rounded-lg ">
          <img className="w-full rounded-md" src={img} alt="profile" />
        </aside>
        
      </div>
      <div className=" capitalize flex flex-col gap-1 w-full p-1">
        {/* <h2 className=" text-3xl font-semibold text-slate-800 text-center w-full">Welcome to my portfolio  </h2> */}
        <h2 className=" text-2xl font-semibold text-blue-500">md. mujahid islam </h2>
        <h2 className=" text-lg font-semibold">frontend web developer</h2>
        <small className=" font-semibold">from bangladesh</small>
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

    <div className=" capitalize">
        <ul>
            <li className=" flex items-center w-44 h-20">
                <i className='bx bxs-phone p-3 rou mb-5 bg-gradient-to-tl from-slate-400 to-blue-100'></i>
                <div className=" flex flex-col">
                    <small>Phone</small>
                    <small>+8801737705511</small>
                </div>
            </li>

            <li className=" flex items-center">
            <i className='bx h-full bxs-envelope p-3 rou mb-5 bg-gradient-to-tl from-slate-400 to-blue-100' ></i>
                <div className=" flex flex-col justify-between">
                    <small>Email</small>
                    <small>mujahidislam400301@gmail.com</small>
                </div>
            </li>
            
            <li className=" flex items-center">
            <i className='bx bxs-location-plus p-3 rou mb-5 bg-gradient-to-tl from-slate-400 to-blue-100' ></i>
                <div className=" flex flex-col justify-between">
                    <small>location</small>
                    <small>Thakurgaon , Rongpur, Bangladesh</small>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}
