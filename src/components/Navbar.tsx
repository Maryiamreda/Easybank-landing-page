
const Navbar = () => {
    return (
        <div className="w-full px-28 py-10 flex  justify-between">
            <img src="/images/logo.svg" />
            <div className="flex">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Careers</p>

            </div>
            <div>Request Invite</div>
        </div>
    );
}

export default Navbar;
