import Buttons from "./Buttons";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="bg-[#FFFFFF33] w-full h-23  flex flex-row justify-between items-center px-35  py-6 ">
      <NavLinks />
      <Buttons />
    </div>
  );
}
