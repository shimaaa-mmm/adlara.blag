import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <header class="border-b border-gray-300" dir="rtl">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <div class="flex items-center">
          <div class="flex flex-col items-center">
            <img
              src="../assets/images/logo.png"
              alt="لوگوی سامانه مشاوره حقوقی ج د ل"
              class=""
              width={100}
              height={47}
            />
            <span class="text-[12px] font-bold text-black mt-1">
              سامانه مشاوره حقوقی
            </span>
          </div>

          <nav class="flex items-center border-r h-10 gap-[23px] pr-[20px] border-color-[rgb(211, 216, 223)] mr-8 pr-2 text-gray-700 text-base font-[var(--font-iran]">
            <div class="relative group cursor-pointer flex items-center">
              <span class="text-[#4D5766]hover:text-gray-900">خدمات</span>
              <i class="fa-solid fa-chevron-down mr-1 text-[10px]"></i>
            </div>
            <a href="/" class="hover:text-gray-900 text-[#4D5766]">
              آکادمی حقوق
            </a>
            <a href="#" class="hover:text-gray-900 text-[#4D5766]">
              بلاگ
            </a>
          </nav>
        </div>

        <div class="flex items-center gap-2.5 space-x-reverse">
          <button
            type="button"
            class="bg-[#ff9408] text-[14px] w-[90px] h-[35px] font-extrabold text-gray-900 rounded px-4 py-2 flex items-center justify-center hover:bg-orange-500 transition"
          >
            ورود وکیل
          </button>
          <button
            type="button"
            class="bg-[#14bc84] text-white text-[14px] w-[90px] h-[35px] font-extrabold rounded px-4 py-2 flex items-center justify-center hover:bg-green-700 transition"
          >
            ورود کاربر
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
