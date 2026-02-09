import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/services";
import BestSeller from "../components/BestSeller";
 

export default function HomePage() {
  return (
    <>
      <div className="relative w-full h-201 bg-[url('/img/bg.png')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-[#00000099]"></div>
    

        <div className="fixed  w-full ">
          <Navbar />
        </div>

            <div className="relative z-10 flex items-center justify-center h-full">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md w-64 outline-none"
          />
        </div>
      </div>


 <Services/>
 <BestSeller/>
<Footer/>
      
    </>
  );
}
