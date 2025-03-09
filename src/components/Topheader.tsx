
const Topheader = () => {
    return (
        <div className="topheader flex px-10 lg:px-28 md:h-89  ">
            <div>
                <h1 className="text-3xl font-semibold">  Next generation <br /> digital banking
                </h1>
                <p>
                    Take your financial life online. Your Easybank account <br /> will be a one-stop-shop
                    for spending, saving, <br /> budgeting, investing, and much more.</p>
                <div className="navbar-botton hidden  md:block  text-white w-34 text-center   py-3 rounded-3xl text-sm font-medium cursor-pointer hover:opacity-70">Request Invite</div>

            </div>
            <div className=" relative ">
                <div className="w-[800px]  md:h-89   ">
                    <img src='/images/bg-intro-desktop.svg' className="absolute -top-64 left-72 clip-path-right " />
                </div>
                <div className="  w-[500px] absolute -right-40 -top-15  ">
                    <img src='/images/image-mockups.png' className="clip-path-right" />
                </div>

            </div>
        </div>
    );
}

export default Topheader;
