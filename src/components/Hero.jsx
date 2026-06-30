import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full bg-[#000000] flex">


        <div className="left h-full w-1/2 text-white">
        <h3 className="ml-20 text-5xl text-bold">Create your Notes Here </h3>


          <form className="flex ml-20 justify flex-col gap-10 mt-10">


            <input
              type="text"
              placeholder="Enter Title here....... "
              className="border outline-none border-white px-4 py-2 rounded w-1/2"
            />


            <textarea
              name=""
              id=""
              placeholder="Enter Notes Description"
              className="border outline-none border-white px-4 py-2 rounded w-1/2 h-40"
              
            ></textarea>
            <div className="flex gap 5">
                <button className="px-4 py-2 border border-green-400 rounded-xl
                 hover:border-green-900 hover:scale-95">Creat Note</button>
                <button className="px-4 py-2 border ml-5 border-green-400 rounded-xl 
                hover:border-green-900 hover:scale-95">Clear Notes</button>
            </div>


          </form>



        </div>



        <div className="right h-full w-1/2 bg-[#C2C2C2] flex justify-center items-center"> 
             <div className="h-[80%] w-[80%] bg-black rounded overflow-hidden"></div>
                   <div className="h-30px w-full cover ">
             <img 
             
             src="https://plus.unsplash.com/premium_photo-1685287731025-16e13897a50b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5vdGUlMjBib29rfGVufDB8fDB8fHww" 
               alt="Notes Image"/>
                    </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
