import html from "../../public/img/icons8-html-48.png";
import css from "../../public/img/icons8-css-48.png";
import bootstrap from "../../public/img/icons8-bootstrap-48.png";
import TailwindCSS from "../../public/img/icons8-tailwind-css-48.png";
import javacript from "../../public/img/icons8-javascript-48.png";
import react from "../../public/img/icons8-react-100.png";
import figma from "../../public/img/icons8-figma-48.png";
import adobephoto from "../../public/img/icons8-adobe-photoshop-48.png";
import adobeXD from "../../public/img/icons8-adobe-xd-48.png";
import Sketch from "../../public/img/icons8-sketch-100.png";
import Git from "../../public/img/icons8-git-logo-96.png";
import Github from "../../public/img/icons8-github-96.png";
import netlify from "../../public/img/netlify.png";
import Sass from "../../public/img/icons8-sass-96.png";

export default function Skill() {
  return (
    <div>
        {/* front end tools */}
      <div className=" mb-5">
        <h2 className=" text-2xl  mb-5 capitalize font-semibold text-black">
          front end tools
        </h2>
        <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Card img={html} name="HTML 5 "></Card>

          <Card img={css} name="CSS 3"></Card>

          <Card img={bootstrap} name="bootstrap"></Card>

          <Card img={TailwindCSS} name="Tailwind CSS"></Card>

          <Card img={javacript} name="javascript"></Card>

          <Card img={react} name="react js"></Card>
        </div>
      </div>

      {/* Design tools */}
      <div className=" mb-5">
        <h2 className=" text-2xl  mb-5 capitalize font-semibold text-black">
          Design tools
        </h2>
        <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Card img={figma} name="figma "></Card>

          <Card img={adobephoto} name="adobe PS"></Card>

          <Card img={adobeXD} name="adobe XD"></Card>

          <Card img={Sketch} name="Sketch"></Card>

        </div>
      </div>
        {/* Extra tools */}
      <div className=" mb-5">
        <h2 className=" text-2xl  mb-5 capitalize font-semibold text-black">
          Extra tools
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Card img={Git} name="Git "></Card>

          <Card img={Github} name="Github"></Card>

          <Card img={netlify} name="netlify"></Card>

          <Card img={Sass} name="Sass"></Card>

        </div>
      </div>

    </div>
  );
}

function Card({ img, name }) {
  return (
    <div data-aos="zoom-out" className="mb-5 w-full md:mb-0 p-4 flex flex-col items-center rounded-xl border-[1px] border-slate-100 shadow-md shadow-slate-300">
      <img className="md:w-20 w-full p-10 md:p-1" src={img} alt={img} />
      <h2 className=" text-lg capitalize text-center font-semibold text-black">
        {name}
      </h2>
    </div>
  );
}
