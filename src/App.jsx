import { RiTelegram2Line, RiInstagramLine, RiPhoneFill } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import EitaSvg from "./ui/EitaSvg";
import logo from "/images/logo.png";
function App() {
  return (
    <section className="font-display h-full container mx-auto max-w-screen-xs">
      <div className="w-full h-full flex flex-col items-center justify-between gap-4">
        <div className="w-full h-1/3 flex items-center justify-center">
          <img src={logo} className="h-full object-cover object-center" />
        </div>
        <div className="bg-sky-400 w-full flex h-fit flex-col gap-8 items-center text-white rounded-lg px-4 py-10 ">
          <div className="w-full text-center">
            <h1 className="font-bold text-xl md:text-2xl">خدمات درمانی و مراقبتی در منزل</h1>
          </div>
          {/*  */}
          <div className="w-full text-[10px] text-gray-800 grid grid-cols-2  items-center justify-center gap-3">
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                مراقبت از بیمار در منزل و بیمارستان
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                ویزیت پزشک - فیزیوتراپی
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                پانسمان نوین در منزل
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                اخذ نمونه آزمایش در منزل
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                فروش و اجاره تجهیزات پزشکی
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full flex items-center justify-center py-2 bg-gray-100 w-full">
                تزریقات و خدمات درمانی
              </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-4 text-gray-800">
            <a href="https://t.me/darmanam_com" className="p-2 rounded-md bg-gray-100">
              <RiTelegram2Line className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/darmanam__com" className="p-2 rounded-md bg-gray-100">
              <RiInstagramLine className="w-7 h-7" />
            </a>
            <a href="https://eitaa.com/darmanam_com" className="p-2 rounded-md bg-gray-100">
              <EitaSvg className="w-7 h-7" />
            </a>
          </div>
          {/*  */}
          <div className="flex flex-col gap-2 items-center">
            <a target="_blank" href="https://darmanam.com/" className="flex items-center gap-2">
              <TbWorldWww className="w-7 h-7" />
              <span>www.darmanam.com</span>
            </a>
            <a href="tel:09999936508" className="flex items-center gap-2">
              <RiPhoneFill className="w-7 h-7" />
              <span>09999936508</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
