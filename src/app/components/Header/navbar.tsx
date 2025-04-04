import { menuItems } from "@/CONSTANTS";
import NavLink from "./ReusableComponents/navLink";

const Navbar = () => {
  return (
    <nav className="flex space-x-4">
        {menuItems.map(it=> {return(<NavLink key={it.routeName} href={it.routeName} label={it.label} icon={it.icon} /> )})}
    </nav>
  );
};

export default Navbar