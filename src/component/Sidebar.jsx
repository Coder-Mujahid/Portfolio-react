import img from "../../public/img/mujahid.png";
import bd from "../../public/img/bd logo.png";
import phone from "../../public/img/icons8-phone.gif";
import email from "../../public/img/icons8-email.gif";
import location from "../../public/img/icons8-location.gif";
import linkedin from "../../public/img/icons8-linkedin.gif";
import twitter from "../../public/img/icons8-twitter.gif";
import facebook from "../../public/img/icons8-facebook.gif";
import github from "../../public/img/icons8-github.gif";


export default function Sidebar() {
  return (
    <div className=" col-span-1 flex flex-col justify-center w-full min-h-screen">
      <div className="md:flex items-center mb-10 md:mb-0 pt-5 md:pl-10">
        <div className=" flex items-center  w-auto">
          <aside className="w-full md:w-40  rounded-lg mb-5 md:mb-0">
            <img
              className="w-full rounded-md bg-gradient-to-r from-[#83c5be] to-[#457b9d]"
              src={img}
              alt="profile"
            />
          </aside>
        </div>
        <div className=" capitalize flex flex-col md:px-3 md:justify-end md:h-full gap-2  w-full">
          {/* <h2 className=" text-3xl font-semibold text-slate-800 text-center w-full">Welcome to my portfolio  </h2> */}
          <h2 className=" text-2xl font-semibold text-blue-500">
            md. mujahid islam
          </h2>
          <ExampleComponent></ExampleComponent>
          <small className=" font-semibold mb-3">
            <img
              className=" w-[30px] inline-block mr-2 h-[16px]"
              src={bd}
              alt="bd logo"
            />
            from bangladesh
          </small>


          <ul className="flex w-full gap-3 ">
            <li>
            <Link to={"https://www.linkedin.com/in/mujahid-islam/"} target="_blank"><img className=" w-10 shadow-md shadow-slate-300 p-1 rounded-lg" src={linkedin} alt="linkedin" /></Link>
            </li>
            <li>
            <Link to={"https://twitter.com/Coder_Mujahid"} target="_blank"><img className=" w-10  shadow-md shadow-slate-300 p-1 rounded-lg" src={twitter} alt="twitter"/></Link>
            </li>
            <li>
            <Link to={"https://www.facebook.com/mojahidul.islam.50596?mibextid=ZbWKwL"} target="_blank"><img className=" w-10  shadow-md shadow-slate-300 p-1 rounded-lg" src={facebook} alt="facebook"/></Link>
            </li>
            <li>
              <Link to={"https://github.com/Coder-Mujahid"} target="_blank"><img className=" w-10  shadow-md shadow-slate-300 p-1 rounded-lg" src={github} alt="github"/></Link>
            </li>
          </ul>

        </div>
      </div>

      <div className=" capitalize md:p-10 mb-5">
        <ul className=" flex flex-col gap-4 mb-5">
          <li className=" flex items-center ">
            <img
              className=" w-12 border-[1px] border-slate-300 shadow-md shadow-slate-300 p-2 rounded-lg"
              src={phone}
              alt="phone"
            />
            <div className=" flex flex-col font-bold pl-6">
              <small>Phone</small>
              <small className=" text-blue-600 tracking-wide">
                +8801737705511
              </small>
            </div>
          </li>

          <li className=" flex items-center">
            <img
              className=" w-12 border-[1px] border-slate-300 shadow-md shadow-slate-300 p-2 rounded-lg"
              src={email}
              alt="email"
            />
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>Email</small>
              <small className=" text-blue-600 tracking-wide">
                mujahidislam400301@gmail.com
              </small>
            </div>
          </li>

          <li className=" flex items-center">
            <img
              className=" w-12 border-[1px] border-slate-300 shadow-md shadow-slate-300 p-2 rounded-lg"
              src={location}
              alt="location"
            />
            <div className=" flex flex-col justify-between font-bold pl-6">
              <small>location</small>
              <small className=" text-blue-600 tracking-wide">
                Thakurgaon , Rongpur, Bangladesh
              </small>
            </div>
          </li>
        </ul>

        <button className="font-semibold capitalize text-black shadow-xl shadow-slate-400 text-sm py-2 w-full bg-[#4cc9f0] rounded-lg hover:text-white hover:tracking-wider hover:bg-[#00b4d8] transition duration-500 ease-in">
          View my resume
        </button>
      </div>
    </div>
  );
}

// text animation
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const ExampleComponent = () => {
  return (
    <TypeAnimation className=" text-xl lg:text-[16px] font-semibold"
      sequence={[
        "frontend web developer", // Types 'One'
        1000, // Waits 1s
        "Junior Frontend Developer", // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        "Frontend Architect",
        1000, // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: "inline-block" }}
    />
  );
};
