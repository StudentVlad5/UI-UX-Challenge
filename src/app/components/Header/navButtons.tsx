import { menuButtons } from "@/CONSTANTS";
import NavButton from "../ReusableComponents/navButton";

const NavButtons = () => {
  return (
        <>
        {menuButtons.map(it=> {return(<NavButton key={it.routeName} href={it.routeName} label={it.label} /> )})}
        </>
  );
};

export default NavButtons