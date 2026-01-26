import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Navbar from "../layouts/header/Navbar";
import { Footer } from "../layouts/footer/footer";
import ScrollButton from "../ui/button"

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const MAIN_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Do you Have A Passion for Photography",
    category: "BEAUTY, LIFESTYLE",
    author: "Martin Gray",
    date: "May 31, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Notify What Makes You Happy, Smile More!",
    category: "LIFESTYLE, TRAVEL",
    author: "Martin Gray",
    date: "May 30, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Notify What Makes You Happy, Smile More!",
    category: "LIFESTYLE, TRAVEL",
    author: "Martin Gray",
    date: "May 30, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Do you Have A Passion for Photography",
    category: "BEAUTY, LIFESTYLE",
    author: "Martin Gray",
    date: "May 31, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Notify What Makes You Happy, Smile More!",
    category: "LIFESTYLE, TRAVEL",
    author: "Martin Gray",
    date: "May 30, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Do you Have A Passion for Photography",
    category: "BEAUTY, LIFESTYLE",
    author: "Martin Gray",
    date: "May 31, 2019",
    excerpt:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat...",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600",
  },
];

const SIDEBAR_POSTS = [
  {
    title: "Do you Have A Passion for Photography",
    date: "May 31, 2019",
    img: "https://placehold.co/80x80",
  },
  {
    title: "Notify What Makes You Happy, Smile More!",
    date: "May 30, 2019",
    img: "https://placehold.co/80x80",
  },
  {
    title: "Fashion Elements In This Right Summer",
    date: "May 27, 2019",
    img: "https://placehold.co/80x80",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="flex flex-col mb-12">
    <div className="relative overflow-hidden group">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-[250px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      <div
        className="
      absolute inset-0
      bg-black/25
      opacity-0
      transition-opacity duration-500
      group-hover:opacity-100
    "
      />
    </div>

    <div className="text-center px-4">
      <span className="text-[9px] tracking-widest text-blue-500 font-bold uppercase">
        {post.category}
      </span>
      <h2 className="text-l font-semibold mb-3 text-gray-800 hover:text-blue-500 cursor-pointer transition">
        {post.title}
      </h2>
      <div className="flex justify-center items-center text-xs text-gray-400">
        <span>By {post.author}</span>
        <span className="mx-2">|</span>
        <span>{post.date}</span>
      </div>
      <p className="text-gray-500 text-[10px] leading-relaxed mb-6">
        {post.excerpt}
      </p>
      <button className="text-[10px] font-bold tracking-[2px] text-blue-500 border-b border-transparent hover:border-blue-500 uppercase pb-1 transition-all">
        Continue Reading
      </button>
    </div>
  </div>
);

const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState("Recent");

  return (
    <div className="border border-gray-100 mb-8">
      <div className="flex text-[11px] font-bold uppercase tracking-wider text-gray-400">
        {["Recent", "Popular", "Comments"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 border-b ${
              activeTab === tab
                ? "bg-white text-gray-800 border-b-2 border-blue-400"
                : "bg-gray-50 border-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white">
        {SIDEBAR_POSTS.map((post, idx) => (
          <div
            key={idx}
            className="flex gap-4 mb-4 items-center group cursor-pointer"
          >
            <img
              src={post.img}
              className="w-16 h-16 object-cover"
              alt="thumbnail"
            />
            <div>
              <h4 className="text-xs font-semibold text-gray-700 group-hover:text-blue-500 leading-snug">
                {post.title}
              </h4>
              <p className="text-[10px] text-gray-400 mt-1">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlogPage() {
  return (
    <>
      <div>
        <Navbar />
        <ScrollButton />
      </div>
      <div className=" min-h-screen font-sans">
        <header className="py-12 text-center bg-[#f9f9f9] border-b border-gray-100 mb-10">
          <h1 className="text-5xl font-bold text-gray-700 mb-2">Our Blog</h1>
          <nav className="text-xs text-gray-400 uppercase tracking-widest">
            <span className="hover:text-blue-500">Home</span>
            <span className="mx-1">/</span>
            <span className="text-gray-600">Blog</span>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {MAIN_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </section>

          <aside className="lg:col-span-1">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search ..."
                className="w-full py-3 px-4 bg-white border border-gray-100 focus:outline-none text-sm text-gray-500 italic"
              />
              <button className="absolute right-0 top-0 h-full aspect-square bg-blue-500 flex items-center justify-center text-white">
                <FaSearch size={18} />
              </button>
            </div>

            <SidebarTabs />

            <div className="border border-gray-100 bg-white p-4 flex justify-between items-center cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Archives
              </span>
              <FaChevronDown size={16} className="text-gray-400" />
            </div>
          </aside>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
