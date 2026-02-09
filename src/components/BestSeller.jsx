import book1 from "../assets/images/book 1.jpg";
import book2 from "../assets/images/book 2.jpg";
import book3 from "../assets/images/book 3.jpg";
import book4 from "../assets/images/book 4.jpg";
import book5 from "../assets/images/book 5.jpg";
import book6 from "../assets/images/book 6.jpg";
import book7 from "../assets/images/book 7.jpg";
import book8 from "../assets/images/book 8.jpg";

export default function BestSeller() {
  return (
    <div className="bg-[#3B2F4A] h-[795px] flex  justify-center items-center ">
      <div className="h-[427px]   flex gap-[80px] flex-col">
        {/*section title */}
        <div className="w-[516px] h-[87px] text-center">
          <h2 className="text-[26px] text-[#FFFFFF] ">Best Seller</h2>
          <p className="text-[#FFFFFF80] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        
        {/*Section books */}

        <div className="h-[260px] flex gap-5">

          <div className="w-[173px] h-[260px] ">
            <img className=" rounded-2xl" src={book1} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book2} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book3} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book4} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book5} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book6} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book7} alt="" />
          </div>
          <div className="w-[173px] h-[260px]">
            <img className=" rounded-2xl" src={book8} alt="" />
          </div>


        </div>
      </div>
    </div>
  );
}
