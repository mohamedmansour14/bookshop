 
import book1 from "../assets/images/book 1.jpg";
import book2 from "../assets/images/book 2.jpg";
import book3 from "../assets/images/book 3.jpg";
import book4 from "../assets/images/book 4.jpg";
import book5 from "../assets/images/book 5.jpg";
import book6 from "../assets/images/book 6.jpg";
import book7 from "../assets/images/book 7.jpg";
import book8 from "../assets/images/book 8.jpg";
export default function SwiperBooks() {
  return (
<>
<div className="h-[260px] flex gap-5">


        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl cover bg-center" src={book1} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book2} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book3} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book4} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book5} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book6} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book7} alt="" />
          </div>
        <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book8} alt="" />
          </div>



      </div>
</>

 
)}
