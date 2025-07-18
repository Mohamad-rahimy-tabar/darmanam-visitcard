import { RiTelegram2Line, RiInstagramLine } from "react-icons/ri";
import EitaSvg from "./ui/EitaSvg";
import logo from "/images/logo.png";
function App() {
  return (
    <section className="font-display container mx-auto max-w-2xl">
      <div className="w-full h-screen flex flex-col items-center gap-4">
        <div className="w-full h-1/3 flex items-center justify-center">
          <img src={logo} className="h-full object-cover object-center" />
        </div>
        <div className="bg-sky-400 w-full flex flex-col gap-8 items-center text-white rounded-lg px-4 py-10 ">
          <div className="w-full text-center">
            <h1 className="font-bold text-xl md:text-2xl">خدمات درمانی و مراقبتی در منزل</h1>
          </div>
          {/*  */}
          <div className="w-full text-[10px] md:text-sm h-fit text-gray-800 grid grid-cols-2 items-center justify-center md:grid-cols-3 gap-y-3">
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100">
                مراقبت از بیمار در منزل و بیمارستان
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100 ">ویزیت پزشک - فیزیوتراپی</span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100">پانسمان نوین در منزل</span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100">اخذ نمونه آزمایش در منزل</span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100">فروش و اجاره تجهیزات پزشکی</span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="rounded-full px-2 py-1 bg-gray-100">تزریقات و خدمات درمانی</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-4 text-gray-800">
            <a href="https://t.me/darmanam_com" className="p-2 rounded-md bg-gray-100">
              <RiTelegram2Line className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/darmanam_com" className="p-2 rounded-md bg-gray-100">
              <RiInstagramLine className="w-7 h-7" />
            </a>
            <a href="https://eitaa.com/Darmanam" className="p-2 rounded-md bg-gray-100">
              <EitaSvg className="w-7 h-7 text-orange-500" />
            </a>
          </div>
          {/*  */}
          <div>
            <a target="_blank" href="https://www.darmanam.ir">
              www.darmanam.ir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
