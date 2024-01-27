
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div>
      <h2 className="text-2xl mb-5 capitalize font-semibold text-black">
        Here are some projects I have done
      </h2>
      <div>
        <Card
          img='https://i.ibb.co/3zrZ9Dn/project-01.png'
          name="Thakurgaon Polytechnoc Institute"
          link="https://thakurgaon-polytechnic-institute-theta.vercel.app/"
        ></Card>

        <Card
          img='https://i.ibb.co/S099y9c/tpi-Dashbord-02.png'
          name="TPI Admin Panel"
          link="https://tpi-dashbord.vercel.app/"
        ></Card>

        <Card
          img='https://i.ibb.co/FY9KSSL/project-02.png'
          name="The Movie BB"
          link="https://the-movie-bb.vercel.app/"
        ></Card>

        <Card
          img='https://i.ibb.co/0nvLnfv/project-03.png'
          name="simple apple shop with js"
          link="https://hostify-com.vercel.app/"
        ></Card>
        <Card
          img='https://i.ibb.co/YPkNf6s/project-05.png'
          name="world country details"
          link="https://details-of-the-countries-of-the-world.vercel.app/"
        ></Card>
      </div>
    </div>
  );
}

function Card({ img, name, link }) {
  return (
    <div
      data-aos="fade-up"
<<<<<<< HEAD
      className=" grid md:grid-cols-3 grid-cols-1 h-full overflow-hidden items-end mb-5 w-auto rounded-xl border-[1px] gap-2 border-slate-100 shadow-md shadow-slate-300 p-3"
    >
      <img className="w- md:h-44 col-span-1 " src={img} alt={img} />
=======
      className=" grid grid-cols-1 md:grid-cols-3 h-full overflow-hidden items-end mb-5 w-auto rounded-xl border-[1px] border-slate-100 shadow-md shadow-slate-300 p-3"
    >
      <img className="md:w-72 w-full md:h-56 col-span-1" src={img} alt={img} />
>>>>>>> b876e8d5fc2331c39c9ada3145b572c32e950ff3
      <div className='flex flex-col col-span-2 justify-center h-full w-full'>
        <h2 className="text-lg my-2 capitalize font-semibold text-black">
          {name}
        </h2>
        <small className="font-semibold text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          adipisci commodi tempora nobis eum ab provident, repudiandae similique
          omnis facere nostrum repellat temporibus perferendis consequatur, et
          magni modi deserunt obcaecati.
        </small>
        <Link
          target="_blank"
          to={link}
          className="my-2 text-center font-semibold capitalize text-black shadow-xl shadow-slate-400 text-sm py-2 w-full bg-[#4cc9f0] rounded-lg hover:text-white hover:tracking-wider hover:bg-[#00b4d8] transition duration-500 ease-in"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
