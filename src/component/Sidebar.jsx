import img from "../../public/img/mujahid.png";
export default function Sidebar() {
  return (
    <div className=" col-span-1 flex flex-col justify-center w-full h-screen">

          <div className="md:flex  items-center px-10">
        <div>
          <aside className="w-44 rounded-lg ">
            <img className="w-full rounded-md bg-gradient-to-tl from-lime-100 to-green-200" src={img} alt="profile" />
          </aside>
        </div>
        <div className=" capitalize flex flex-col pl-5 justify-end h-full gap-1 w-full">
          {/* <h2 className=" text-3xl font-semibold text-slate-800 text-center w-full">Welcome to my portfolio  </h2> */}
          <h2 className=" text-2xl font-semibold text-blue-500">
            md. mujahid islam{" "}
          </h2>
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

      <div className=" capitalize p-10">
        <ul className=" flex flex-col gap-4 mb-5">
          <li className=" flex items-center ">
            <i className="bx bxs-phone text-2xl rounded-lg text-blue-500  py-2 px-3 bg-gradient-to-tl from-lime-100 to-green-200"></i>
            <div className=" flex flex-col font-bold pl-6">
              <small>Phone</small>
              <small>+8801737705511</small>
            </div>
          </li>

          <li className=" flex items-center">
            <i className="bx h-full bxs-envelope text-2xl rounded-lg text-red-500  py-2 px-3 bg-gradient-to-tl from-lime-100 to-green-200"></i>
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>Email</small>
              <small>mujahidislam400301@gmail.com</small>
            </div>
          </li>

          <li className=" flex items-center">
            <i className="bx bxs-location-plus text-2xl rounded-lg text-black  py-2 px-3 bg-gradient-to-tl from-lime-100 to-green-200"></i>
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>location</small>
              <small>Thakurgaon , Rongpur, Bangladesh</small>
            </div>
          </li>
        </ul>

        <button className="font-semibold capitalize text-white text-sm py-2 w-full bg-slate-500 rounded-lg hover:text-black hover:bg-lime-300 transition duration-700 ease-in">
          View my resume
        </button>
      </div>
    </div>
  )
}
