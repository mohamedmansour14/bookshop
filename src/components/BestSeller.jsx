import SwiperBooks from "./SwiperBooks";

export default function BestSeller() {
  return (
    <section className="bg-[#3B2F4A] h-[795px] flex flex-col justify-center items-center gap-[80px]">
      {/*title */}
      <div className="w-[516px] h-[87px] text-center">
        <h2 className="text-[26px] text-[#FFFFFF] ">Best Seller</h2>
        <p className="text-[#FFFFFF80] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      <SwiperBooks />
    </section>
  );
}
