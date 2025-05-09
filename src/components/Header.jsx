import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-300" dir="rtl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Right side: Logo and nav */}
        <div className="flex items-center space-x-6 space-x-reverse">
          <div className="flex flex-col items-center">
            <img
              src="../assets/images/logo.png"
              alt="لوگوی سامانه مشاوره حقوقی ج د ل"
              className="w-20 h-10 object-contain rounded-full border border-orange-400 p-1"
              width={80}
              height={40}
            />
            <span className="text-xs font-bold text-black mt-1">
              سامانه مشاوره حقوقی
            </span>
          </div>

          <nav className="flex items-center space-x-6 space-x-reverse text-gray-700 text-base font-normal">
            <div className="relative group cursor-pointer flex items-center">
              <span>خدمات</span>
              <i className="fas fa-chevron-down text-gray-700 mr-1"></i>
            </div>
            <a href="#" className="hover:text-gray-900">
              آکادمی حقوق
            </a>
            <a href="#" className="hover:text-gray-900">
              بلاگ
            </a>
          </nav>
        </div>

        {/* Left side: Buttons */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <button
            type="button"
            className="bg-orange-400 text-gray-900 font-bold rounded px-4 py-2 hover:bg-orange-500 transition"
          >
            ورود وکیل
          </button>
          <button
            type="button"
            className="bg-green-600 text-white font-bold rounded px-4 py-2 hover:bg-green-700 transition"
          >
            ورود کاربر
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
