import MERN from '../../public/img/Mern_Stack_Developer_Logo_Combo_Pack_Sticker_by_Dev-Stuff-removebg-preview.png'
import react from '../../public/img/icons8-react-100.png'
import vite from '../../public/img/icons8-vite-500.png'
import express from '../../public/img/icons8-express-js-512.png'
import mongodb from '../../public/img/mongodb.png'

const Blogs= () => {
  return (
    <section className="text-gray-600 body-font">
        <h2 className='text-5xl text-blue-900 font-semibold pt-10 uppercase text-center'>my blogs</h2>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Blog 1 */}
          <Card></Card>
          {/* Blog 2 */}
          <Card></Card>
          {/* Blog 3 */}
          <Card></Card>
          {/* Blog 4 */}
          <Card></Card>
          {/* Blog 5 */}
          <Card></Card>
        </div>
      </div>
    </section>
  )
}

export default Blogs;


function Card(){
    return(
        <>
            <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className='flex justify-between'>
                <a href="#" className="text-indigo-500 inline-flex items-center ">Learn More</a>

                <div className='flex gap-2 w-auto'>
                    <span className='flex items-center'><i className='bx bxs-user-circle pr-1' ></i>  30</span>
                    <span className='flex items-center'><i className='bx bx-message-rounded-dots pr-1' ></i>  30</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}