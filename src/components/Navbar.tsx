
const Navbar = () => {
    return (
        <div className="w-full px-28 pt-3 pb-2  flex  justify-between bg-white">
            <div className="flex items-center ">
                <img src="/images/logo.svg" className="w-35 h-6 " />
            </div>
            <ul className="navbar-choices flex gap-7 font-medium  ">
                <li >Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>

            </ul>
            <div className="navbar-botton text-white px-7 py-3 rounded-3xl text-sm font-medium">Request Invite</div>
        </div>
    );
}

export default Navbar;
