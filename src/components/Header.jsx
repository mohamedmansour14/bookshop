import Navbar from "./Navbar";

export default function Header() {
  
  return (
    <div className="relative w-full h-85 bg-[url('/img/bg.png')] bg-cover bg-center ">

       
      <div className="absolute inset-0 bg-[#00000099]"></div>

  
      <div className="fixed  w-full ">
        <Navbar />
      </div>
    </div>
  );
}


     
      
