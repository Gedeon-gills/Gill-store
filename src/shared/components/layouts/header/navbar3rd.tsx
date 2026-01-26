import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function DownBar() {
  return (
    <div className="bg-white border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto flex items-center px-4 h-14">

        <div className="flex items-center gap-3 font-semibold mr-10">
            SHOP BY DEPARTMENT  <FaBars />
        </div>

        <nav className="flex gap-8 text-sm">
          <span className="cursor-pointer"><Link to={"/"}>HOME ▾</Link></span>
          <span className="cursor-pointer"><Link to={"/shop"}>SHOP ▾</Link></span>
          <span className="cursor-pointer"><Link to={"/Pages"}>PAGES ▾</Link></span>
          <span className="cursor-pointer"><Link to={"/Blogs"}>BLOG ▾</Link></span>
          <span className="cursor-pointer"><Link to={"/Elements"}>ELEMENTS ▾ </Link></span>
          <span className="cursor-pointer font-semibold"><Link to={"/Buy"}>BUY NOW</Link></span>
        </nav>

      </div>
    </div>
  );
}
