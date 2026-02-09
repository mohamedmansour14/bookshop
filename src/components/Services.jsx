import { FaShippingFast } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { MdRestartAlt } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";




export default function Services() {
  return (
    <>
      <div className="h-[407px] bg-white  flex justify-center items-center">
 
        
        {/*first div to shipping */}
        <div className="w-[1283px] h-[220px]  flex gap-[61px]  ">

          <div className="w-275px  ]   shadow-2xl  p-3">
            <FaShippingFast  className=" text-[#22222280]" size={40} />

            <h2 className="font-bold text-[18px] text-black">Fast & Reliable Shipping</h2>
            <p className="font-[16px] text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="w-275px  ]   shadow-2xl  p-3">
            <CiCreditCard1 className=" text-[#22222280]" size={40} />

            <h2 className="font-bold text-[18px] text-black">Fast & Reliable Shipping</h2>
            <p className="font-[16px] text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="w-275px  ]   shadow-2xl  p-3">
            <MdRestartAlt className=" text-[#22222280]" size={40} />

            <h2 className="font-bold text-[18px] text-black">Fast & Reliable Shipping</h2>
            <p className="font-[16px] text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="w-275px  ]   shadow-2xl  p-3">
            <FaHeadset  className=" text-[#22222280]" size={40} />

            <h2 className="font-bold text-[18px] text-black">Fast & Reliable Shipping</h2>
            <p className="font-[16px] text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>


        </div>


      </div>
    </>
  );
}
