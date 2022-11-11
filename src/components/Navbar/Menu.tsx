import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import { useState } from "react";

interface Props {
  links: { text: string; href: string }[];
}

const Menu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hidden md:flex">
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <div
        className={`transition-all duration-300 fixed left-0 top-0 w-full h-full ${
          isOpen ? "bg-blackOpaque z-10" : "opacity-0 -z-10"
        }`}
      >
        <div
          className={`transition-all duration-300 h-full bg-white px-8 py-4 fixed ${
            isOpen ? "right-0" : "-right-full"
          } top-0`}
          style={{ width: "min(300px, 100%)" }}
        >
          <button onClick={() => setOpen(!isOpen)} className="float-right">
            <img src="images/icon-menu-close.svg" alt="" />
          </button>
          <div className="flex flex-col gap-6 mt-28">
            {links.map((link, linkIdx) => (
              <MenuItem href={link.href} text={link.text} key={linkIdx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
