
const Topheader = () => {
    return (
        <div className="topheader  pl-10 lg:pl-28  flex  md:overflow-hidden md:h-89 flex-col-reverse md:flex-row ">
            <div className="flex flex-col gap-5 justify-center  ">
                <h1 className="text-3xl font-semibold">  Next generation <br /> digital banking
                </h1>
                <p className="text-sm ">
                    Take your financial life online. Your Easybank account <br /> will be a one-stop-shop
                    for spending, saving, <br /> budgeting, investing, and much more.</p>
                <div className="navbar-botton hidden  md:block  text-white w-34 text-center   py-3 rounded-3xl text-sm font-medium cursor-pointer hover:opacity-70">Request Invite</div>

            </div>
            <div className="md:relative rotate-10 ">
                <img src='/images/bg-intro-desktop.svg' className=" absolute -top-60 lg:-top-70 left-25  max-w-450 w-250 lg:w-500 h-200  " />

            </div>


            {/* <div className="  w-[500px] absolute -right-40 -top-15  ">
                    <img src='/images/image-mockups.png' className="clip-path-right" />
                </div> */}

        </div>
    );
}

export default Topheader;
