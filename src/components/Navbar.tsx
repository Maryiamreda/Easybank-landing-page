import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className="w-full  px-10 lg:px-28 py-5 flex relative z-10  justify-between items-center bg-white">
            <div className="flex items-center ">
                <img src="/images/logo.svg" className="w-35 h-6 " />
            </div>
            <ul className="navbar-choices  font-medium hidden  md:block ">
                <li >Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>

            </ul>
            <div className="md:hidden">
                <TfiAlignJustify />
            </div>
            <div className="navbar-botton hidden  md:block  text-white  px-7 py-3 rounded-3xl text-sm font-medium cursor-pointer hover:opacity-70">Request Invite</div>
        </div>
    );
}

export default Navbar;
