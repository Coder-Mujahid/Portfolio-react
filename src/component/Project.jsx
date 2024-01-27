import { Link } from 'react-router-dom';

const projects = [
  {
    img: 'https://i.ibb.co/3zrZ9Dn/project-01.png',
    name: 'Thakurgaon Polytechnoc Institute',
    link: 'https://thakurgaon-polytechnic-institute-theta.vercel.app/',
    description: 'Thakurgaon Polytechnic Institute website showcases the institution\'s offerings and features. Explore our courses, facilities, and latest updates. Discover why we\'re a leading choice for technical education.'
  },
  {
    img: 'https://i.ibb.co/S099y9c/tpi-Dashbord-02.png',
    name: 'TPI Admin Panel',
    link: 'https://tpi-dashbord.vercel.app/',
    description: 'The TPI Admin Panel provides comprehensive control over the institution\'s backend operations. Manage courses, student records, faculty details, and more with ease and efficiency.'
  },
  {
    img: 'https://i.ibb.co/FY9KSSL/project-02.png',
    name: 'The Movie BB',
    link: 'https://the-movie-bb.vercel.app/',
    description: 'The Movie BB platform offers a vast collection of movies, TV shows, and documentaries for your entertainment. Discover new favorites and enjoy unlimited streaming from the comfort of your home.'
  },
  {
    img: 'https://i.ibb.co/0nvLnfv/project-03.png',
    name: 'Simple Apple Shop with JS',
    link: 'https://hostify-com.vercel.app/',
    description: 'Experience the convenience of online shopping with our Simple Apple Shop. Browse through a range of Apple products, place orders securely, and enjoy doorstep delivery. Shop now!'
  },
  {
    img: 'https://i.ibb.co/YPkNf6s/project-05.png',
    name: 'World Country Details',
    link: 'https://details-of-the-countries-of-the-world.vercel.app/',
    description: 'Explore detailed information about countries worldwide with World Country Details. From population statistics to geographic features, dive deep into the fascinating diversity of our planet.'
  }
];

export default function Project() {
  return (
    <div>
      <h2 className="text-2xl mb-5 capitalize font-semibold text-black">
        Here are some projects I have done
      </h2>
      <div>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

function Card({ img, name, link, description }) {
  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 md:grid-cols-3 h-full overflow-hidden items-end mb-5 gap-2 w-auto rounded-xl border-[1px] border-slate-100 shadow-md shadow-slate-300 p-3"
    >
      <img className="md:w-72 w-full h-full col-span-1" src={img} alt={name} />
      <div className='flex flex-col col-span-2 justify-center h-full w-full'>
        <h2 className="text-lg my-2 capitalize font-semibold text-black">
          {name}
        </h2>
        <small className="font-semibold text-justify">{description}</small>
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
