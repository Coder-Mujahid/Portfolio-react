import react from "../../public/img/icons8-react-100.png";
import responsive from "../../public/img/icons8-responsive-web-100.png";
import TPI from "../../public/img/tpi-removebg-preview.png";
import SSc from "../../public/img/icons8-mosque-48.png";
import UIT from "../../public/img/UIT.png";

export default function Home() {
  return (
    <div>
    {/* about section */}
      <div className=" flex gap-5 flex-col mb-5">
        <h2 className="text-2xl w-32 text-center font-semibold border-b-2 border-cyan-300 inline-block px-1  capitalize">
          about me
        </h2>
        <p className=" text-sm font-semibold text-justify">
          Hello there! I amm Md Mujahidul islam, a passionate frontend developer
          with a love for creating stunning and user-friendly web experiences. I
          believe in the power of well-crafted code to transform ideas into
          captivating digital realities. <br /> <br />I am fueled by the belief
          that well-designed interfaces can make a significant impact,
          transforming how users interact with digital spaces. From translating
          design concepts into code to ensuring cross-browser compatibility and
          responsiveness, I thrive on the challenges of modern web development.
        </p>
      </div>
      {/* my work section */}
      <div className=" mb-5">
        <h2 className="mb-5 text-2xl w-36 text-center font-semibold border-b-2 border-cyan-300 inline-block px-1  capitalize">
          What I Do !
        </h2>

        <div className=" md:flex gap-5">
          <Card
            img={react}
            title="Front-end Development With React"
            about="React is a front-end JavaScript library for building reusable UI components which were created by Facebook. React aids in the creation of interactive user interfaces."
          ></Card>

          <Card
            img={responsive}
            title="responsive UI / UX web layout"
            about="React is a front-end JavaScript library for building reusable UI components which were created by Facebook. React aids in the creation of interactive user interfaces."
          ></Card>
        </div>
      </div>
        {/* education section */}
      <div className="mb-5 w-full">
        <h2 className="mb-5 text-2xl w-36 text-center font-semibold border-b-2 border-cyan-300 inline-block px-1  capitalize">
          education
        </h2>

        <div className=" md:flex gap-5 w-full">

          <div data-aos="zoom-out" className=" w-full p-3 shadow-md rounded-lg shadow-slate-400 mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <img className=" md:w-24 w-44  mb-2 " src={TPI} alt="TPIimg" />
            <h2 className="text-xl mb-3 font-semibold inline-block capitalize ">
            Diploma In Engineering
            </h2>
            <h2 className="text-lg mb-1 font-semibold inline-block capitalize ">
            Thakurgaon Polytecnic Institute
            </h2>
            <p className=" text-sm mb-1  font-semibold text-justify">Computer science and Technology</p>
            <p className=" text-sm mb-1  font-semibold text-justify">Session : 2019 - 2020</p>
            <p className=" text-sm mb-1 font-semibold text-justify">Passing Year : December 2023</p>
          </div>
          

          <div data-aos="zoom-out" className=" w-full p-3 shadow-md rounded-lg shadow-slate-400 mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <img className=" md:w-24 w-44  mb-2 " src={SSc} alt="SScimg" />
            <h2 className="text-xl mb-3 font-semibold inline-block capitalize ">
            Secondary School Certificate
            </h2>
            <h2 className="text-lg mb-1 font-semibold inline-block capitalize ">
            Abad Takia Mohammadia Fazil Madrasah
            </h2>
            <p className=" text-sm mb-1  font-semibold text-justify">Computer science and Technology</p>
            <p className=" text-sm mb-1  font-semibold text-justify">Session : 2017 - 2019</p>
            <p className=" text-sm mb-1 font-semibold text-justify">Passing Year : December 2019</p>
          </div>

        </div>
      </div>
      {/* training section */}
      <div className="mb-5 w-full">
        <h2 className="mb-5 text-2xl text-center font-semibold border-b-2 border-cyan-300 inline-block px-1  capitalize">
          training and experience
        </h2>

        <div className=" md:flex gap-5 w-full">

          <div data-aos="zoom-out" className=" w-full p-3 shadow-md rounded-lg shadow-slate-400 md:mb-0 md:flex items-center gap-10 md:items-start">
            <img className=" md:w-48 w-full h-full  mb-2 " src={UIT} alt="TPIimg" />
            <div className=" flex flex-col justify-end mt-8">
                <h2 className="text-xl mb-3 font-semibold inline-block capitalize ">
                MERN Stack developer
                </h2>
                <h2 className="text-lg mb-1 font-semibold inline-block capitalize ">
                Universe IT Institute
                </h2>
                <p className=" text-sm mb-1  font-semibold text-justify">Duration : 6 month</p>
                <p className=" text-sm mb-1 font-semibold text-justify">Certification Date : 01/01/2024</p>
            </div>
          </div>
        </div>
      </div>


    </div>
    

  )
}

function Card({ img, title, about }) {
  return (
    <div data-aos="zoom-out" className=" px-3 py-5 shadow-md rounded-lg shadow-slate-400 mb-5 md:mb-0 flex flex-col items-center md:items-start">
      <img className=" md:w-16 w-32  mb-3 " src={img} alt="img" />
      <h2 className="text-lg mb-3 font-semibold inline-block capitalize ">
        {title}
      </h2>
      <p className=" text-sm mb-3 font-semibold text-justify">{about}</p>
    </div>
  );
}
