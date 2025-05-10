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

          <nav class="flex items-center border-r h-10 gap-6 pr-5 mr-8 text-gray-700 text-base ">
            <div class="relative group cursor-pointer flex items-center">
              <span class="text-teXt hover:text-gray-900">خدمات</span>
              <i class="fa-solid fa-chevron-down mr-1 text-[10px]"></i>
            </div>
            <a href="/" class="hover:text-gray-900 text-teXt">
              آکادمی حقوق
            </a>
            <a href="#" class="hover:text-gray-900 text-teXt">
              بلاگ
            </a>
          </nav>
        </div>

        <div class="flex items-center gap-2.5 space-x-reverse">
          <button
            type="button"
            class="bg-headerBtt text-[14px] w-[90px] h-[35px] font-extrabold text-gray-900 rounded px-4 py-2 flex items-center justify-center hover:bg-headerBtt transition"
          >
            ورود وکیل
          </button>
          <button
            type="button"
            class="bg-headerGee text-white text-[14px] w-[90px] h-[35px] font-extrabold rounded px-4 py-2 flex items-center justify-center hover:bg-headerGee transition"
          >
            ورود کاربر
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
