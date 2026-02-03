import { FaGlobeAfrica } from "react-icons/fa";
import {
  FaBookBookmark,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#3B2F4A] h-93  flex justify-center items-center">
      <div className="w-330 h-23  ">
        <div className=" flex justify-between pt-5 ">
          <div className="flex gap-5 pb-1 text-white ">
            <div className="flex items-center justify-center gap-3">
              <span>
                <FaBookBookmark size={20} />
              </span>
              <a className="  text-[#FFFFFF] " href="#">
                BookShop
              </a>
            </div>

            <a className="font-extrabold   text-[#FFFFFF]" href="#">
              Home
            </a>
            <a className="font-extrabold  text-[#FFFFFF]" href="#">
              Books
            </a>
            <a className="font-extrabold  text-[#FFFFFF]" href="#">
              About us
            </a>
          </div>

          <div className="flex gap-5">
            <FaFacebook className="text-white" size={20} />
            <FaInstagram className="text-white" size={20} />
            <FaYoutube className="text-white" size={20} />
            <FaXTwitter className="text-white" size={20} />
          </div>
        </div>
        <hr className="text-[#FFFFFF33] " />

        <div className="flex  justify-between pt-2">
          <div>
            <p className="text-[#FFFFFF]">
              Developed By <strong>EraaSoft</strong> &mdash; All Copy Rights
              Reserved &copy; 2024
            </p>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <FaGlobeAfrica className="text-white  " size={20} />
            <select name="language" id="language" className="bg-transparent border border-[#FFFFFF80] rounded-lg px-3 py-1 text-sm">

              <option className="text-[#FFFFFF80]" value="English">English</option>
              <option className="text-[#FFFFFF80]" value="English">Arabic</option>
              <option className="text-[#FFFFFF80]" value="English">French</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
