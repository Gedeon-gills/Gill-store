import TopBar from "./topbar";
import NavCenter from "./NavCenter";
import DownBar from "./navbar3rd";

export default function Navbar() {
  return (
    <header className="w-full">
      <TopBar />
      <NavCenter />
      <DownBar />
    </header>
  );
}
