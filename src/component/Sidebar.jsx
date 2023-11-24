import img from "../../public/img/mujahid.png";
export default function Sidebar() {
  return (
    <div className="w-[600px] md:flex bg-slate-300 items-center">
      <div>
        <aside className="w-44 p-3 rounded-lg">
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
  );
}
