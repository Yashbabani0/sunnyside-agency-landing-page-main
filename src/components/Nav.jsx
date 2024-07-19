import logo from "../assets/logo.svg";
import backgroundImageMoblie from "../assets/mobile/image-header.jpg";
import backgroundImagePc from "../assets/desktop/image-header.jpg";

export default function Nav() {
  return (
    <div>
      <div className="bgImg">
        <img
          src={backgroundImageMoblie}
          className="absolute top-0 left-0"
          alt=""
        />
        <img src="" alt="" />
      </div>
      <nav className="p-[2em] flex items-center justify-between relative">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menuMobile md:hidden text-teal-50 rotate-90 cursor-pointer w-[2em] h-[2em] flex items-center justify-center rounded-full">
          <b className="">lll</b>
        </div>
        <div className="hidden menuShow flex flex-col absolute bg-white w-[20em] h-[10em] bottom-[-200%] left-[50%] translate-x-[-50%] z-50">
          <div className="triangleshape"></div>
          <div className="flex flex-col items-center justify-center h-full leading-8">
            <b className="block">About</b>
            <b className="block">Services</b>
            <b className="block">Projects</b>
            <b className="block">Contact</b>
          </div>
        </div>
      </nav>
    </div>
  );
}
