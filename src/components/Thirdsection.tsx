
const Thirdsection = () => {
    return (
        <div className="thirdsection px-10 lg:px-28 py-15">
            <h2 className="font-base text-3xl">  Why choose Easybank?
            </h2>
            <p className="text-sm mt-3 "> We leverage Open Banking to turn your bank account into your financial hub.  <br />
                Control your finances like never before.
            </p>
            <div className="flex gap-10 items-start mt-10 ">
                <div>
                    <img src="/images/icon-online.svg" />
                    <h3>  Online Banking
                    </h3>
                    <p> Our modern web and mobile applications allow you to keep track of your finances
                        wherever you are in the world.</p>
                </div>
                <div>  <img src="/images/icon-budgeting.svg" />
                    <h3>  Simple Budgeting
                    </h3>
                    <p> See exactly where your money goes each month. Receive notifications when you’re
                        close to hitting your limits.</p></div>
                <div>  <img src="/images/icon-onboarding.svg" />
                    <h3>  Fast Onboarding
                    </h3>
                    <p>  We don’t do branches. Open your account in minutes online and start taking control
                        of your finances right away.</p></div>
                <div>  <img src="/images/icon-api.svg" />
                    <h3>  Open API
                    </h3>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking
                        your money has never been easier.</p></div>

            </div>
        </div>
    );
}

export default Thirdsection;
