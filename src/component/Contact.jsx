
const Contact = () => {
    return (
      <>
      
          <section className="text-gray-600 body-font md:py-5 relative w-11/12 mx-auto shadow-md shadow-slate-400 rounded-lg">
  
        <div className="container p-4 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden mr-3 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.252142292276!2d88.44041167568027!3d26.038951497092828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4eb618da025ab%3A0x95cf23c7ca0cb9e3!2sThakurgaon%20Polytechnic%20Institute!5e1!3m2!1sen!2sbd!4v1701368182606!5m2!1sen!2sbd"></iframe>
            
            <div className=" bg-slate-100 opacity-90 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="w-auto px-6">
                <h2 className="title-font capitalize font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 text-sm font-semibold text-justify">Gobindo Nagar, Thakurgaon, Rongpur</p>
              </div>
              
            </div>
          </div>
          {/* massage section */}
          <div className="lg:w-1/3 md:w-1/2 p-4 font-semibold rounded-md bg-gradient-to-r from-slate-300 to-slate-50 flex flex-col md:ml-auto w-full mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font">Contact me </h2>
            
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              submit
            </button>
          </div>
        </div>
      </section>
      </>
    )
  }
  export default Contact;