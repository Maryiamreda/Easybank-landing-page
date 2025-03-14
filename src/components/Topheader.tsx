
const Topheader = () => {
    return (
        <div className="topheader  pl-10 lg:pl-28   flex flex-col-reverse  md:overflow-hidden md:h-110  md:flex-row ">
            <div className="flex flex-col gap-5 justify-center  ">
                <h1 className="text-3xl font-semibold">  Next generation <br /> digital banking
                </h1>
                <p className="text-sm ">
                    Take your financial life online. Your Easybank account <br /> will be a one-stop-shop
                    for spending, saving, <br /> budgeting, investing, and much more.</p>
                <div className="navbar-botton hidden  md:block  text-white w-34 text-center   py-3 rounded-3xl text-sm font-medium cursor-pointer hover:opacity-70">Request Invite</div>

            </div>
            <div className=" relative   ">
                <img src='/images/bg-intro-desktop.svg' className=" 
                md:absolute 
                 md:-top-60 lg:-top-55 md:left-50 
                  md:max-w-450  md:w-250 h-200
                  " />

            </div>


        </div>
    );
}

export default Topheader;
