import { useState } from "react";
import { Link } from 'react-router-dom';

export default function TopBar() {

  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  
  return (
    <div className="bg-blue-700 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex gap-6 relative">
          {/* Language */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <span className="cursor-pointer">English ▾</span>

            {langOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-gray-700 border border-gray-200 shadow-md z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  French
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Spanish
                </div>
              </div>
            )}
          </div>

          {/* Currency */}
          <div
            className="relative"
            onMouseEnter={() => setCurrencyOpen(true)}
            onMouseLeave={() => setCurrencyOpen(false)}
          >
            <span className="cursor-pointer">$ Dollar (US) ▾</span>

            {currencyOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white text-gray-700 border border-gray-200 shadow-md z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  $ Dollar (US)
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  € Euro (EUR)
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  £ Pound (UK)
                </div>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex gap-6">
          <span>Welcome to our store!</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer"><Link to={"/ContactUs"}>Contact Us</Link></span>
        </div>

      </div>
    </div>
  );
}