import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar_4 = () => {
    const mobileMenubarHandler = () => {
        const menubar = document.getElementById('homeMenubar');
        if (!menubar.classList.contains('left-0')) {
            menubar.classList.remove('-left-[1024px]');
            menubar.classList.add('left-0');
        }
        else {
            menubar.classList.remove('left-0');
            menubar.classList.add('-left-[1024px]');
        }
    }
    function handleSignUp() {
        const signUp = document.getElementById('sign-up');
        const signIn = document.getElementById('sign-in');
        const signUpText = document.getElementById('sign-up-text');
        const signInText = document.getElementById('sign-in-text');

        if (!signIn.classList.contains('hidden')) {
            signIn.classList.add('hidden');
            signInText.classList.remove('text-[#262729]');
            signInText.classList.add('text-[#BDBCBC]');
        }

        if (signUp.classList.contains('hidden')) {
            signUp.classList.remove('hidden');
            signUpText.classList.remove('text-[#BDBCBC]');
            signUpText.classList.add('text-[#262729]');
        }
        else {
            signUp.classList.add('hidden');
            signUpText.classList.remove('text-[#262729]');
            signUpText.classList.add('text-[#BDBCBC]');
        }

    }
    function handleSignIn() {
        const signUp = document.getElementById('sign-up');
        const signIn = document.getElementById('sign-in');
        const signUpText = document.getElementById('sign-up-text');
        const signInText = document.getElementById('sign-in-text');

        if (!signUp.classList.contains('hidden')) {
            signUp.classList.add('hidden');
            signUpText.classList.remove('text-[#262729]');
            signUpText.classList.add('text-[#BDBCBC]');
        }

        if (signIn.classList.contains('hidden')) {
            signIn.classList.remove('hidden');
            signInText.classList.remove('text-[#BDBCBC]');
            signInText.classList.add('text-[#262729]');
        }
        else {
            signIn.classList.add('hidden');
            signInText.classList.remove('text-[#262729]');
            signInText.classList.add('text-[#BDBCBC]');

        }

    }

    function handleHiddenModal() {
        const signUp = document.getElementById('sign-up');
        const signIn = document.getElementById('sign-in');
        const signUpText = document.getElementById('sign-up-text');
        const signInText = document.getElementById('sign-in-text');
        if (!signUp.classList.contains('hidden')) {
            signUp.classList.add('hidden');
            signUpText.classList.remove('text-[#262729]');
            signUpText.classList.add('text-[#BDBCBC]');
        }

        if (!signIn.classList.contains('hidden')) {
            signIn.classList.add('hidden');
            signInText.classList.remove('text-[#262729]');
            signInText.classList.add('text-[#BDBCBC]');
        }
    }
    const location = useLocation();
    // console.log(location.pathname.includes('Home_1'));
    return (
        <div>
            <section className={`${location.pathname == "/Home_4" ? 'home4-banner bg-cover' : ''}`}>
                <nav className={`mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between ${location.pathname == '/Home_4/Blog_Details' ? 'bg-[#F8F8FA]' : ''}`}>
                    {/* mobile menubar */}
                    <ul id="homeMenubar"
                        className={`flex lg:hidden justify-center absolute top-14 -left-[1024px] duration-500 px-5 py-1 w-full items-center gap-4 md:gap-10 text-[14px] font-semibold ${location.pathname == "/Home_4" ? 'text-white' : 'text-[#262729]'} `}>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Home </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1">Home 1</Link></li>
                                    <li><Link to="/Home_2">Home 2</Link></li>
                                    <li><Link to="/Home_3">Home 3</Link></li>
                                    <li><Link to="/Home_4">Home 4</Link></li>
                                    <li><Link to="/Home_5">Home 5</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Pages </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_4/About_Us">About Us</Link></li>
                                    <li><Link to="/Home_4/Blog">Blog</Link></li>
                                    <li><Link to="">Account</Link></li>
                                    <li><Link to="/Home_4/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link to="/Home_4/FAQ">FAQ</Link></li>
                                    <li><Link to="/Home_4/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_4/ErrorPage">ErrorPage</Link></li>
                                    <li><Link to="/Home_4/Contact_Us">Contact us</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Components </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="">Components 1</Link></li>
                                    <li><Link to="">Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link to="">Support</Link></li>
                    </ul>
                    {/* end mobile menubar */}
                    <div onClick={mobileMenubarHandler} className="lg:hidden cursor-pointer">
                        {
                            location.pathname == "/Home_4" ?
                                <img src="../../../../public/images/icons/align-justify.svg" alt="" />
                                : <img src="../../../../public/images/icons/align-justify-dark.svg" alt="" />
                        }

                    </div>
                    <Link to={location.pathname == "/Home_4" ? '/' : '/Home_4'}>
                        {
                            location.pathname == "/Home_4" ?
                                <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/home4-logo.svg" alt="" />
                                : <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/home4-logo2.svg" alt="" />
                        }

                    </Link>
                    <ul className={`hidden lg:flex items-center gap-2 md:gap-6 text-[14px] font-semibold ${location.pathname == "/Home_4" ? 'text-white' : 'text-[#262729]'} `}>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Home </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1">Home 1</Link></li>
                                    <li><Link to="/Home_2">Home 2</Link></li>
                                    <li><Link to="/Home_3">Home 3</Link></li>
                                    <li><Link to="/Home_4">Home 4</Link></li>
                                    <li><Link to="/Home_5">Home 5</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Pages </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_4/About_Us">About Us</Link></li>
                                    <li><Link to="/Home_4/Blog">Blog</Link></li>
                                    <li><Link to="">Account</Link></li>
                                    <li><Link to="/Home_4/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link to="/Home_4/FAQ">FAQ</Link></li>
                                    <li><Link to="/Home_4/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_4/ErrorPage">ErrorPage</Link></li>
                                    <li><Link to="/Home_4/Contact_Us">Contact us</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="cursor-pointer">Components </h1>
                                        {
                                            location.pathname == "/Home_4" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_4" ? 'bg-[#33302F]' : 'bg-white'}  px-2`}>
                                    <li><Link to="">Components 1</Link></li>
                                    <li><Link to="">Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link to="">Support</Link></li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <div onClick={handleSignUp} id="sign-up-text" className="text-[#BDBCBC] text-sm cursor-pointer hover:text-[#262729]"
                        >Sign up</div>
                        <div className="w-[2px] h-[13px] bg-[#EAE9E9]"></div>
                        <div onClick={handleSignIn} id="sign-in-text" className="text-[#BDBCBC] text-sm cursor-pointer hover:text-[#262729]"
                        >Log in</div>
                    </div>
                </nav>

                <section id="sign-up" className="fixed z-10 w-full hidden">
                    <div onClick={handleHiddenModal} className="blur-bg z-0">
                    </div>
                    <div className="absolute top-5 right-0 me-6 md:me-[70px] xl:me-[150px] ">
                        <div className="sm:w-[368px] mx-auto md:mx-0 bg-[#FBFBFB] rounded-lg home4-signup-container">
                            <form className="">
                                <h1 className="text-[#262729] text-[24px] mb-[46px] font-bold text-center md:text-left">
                                    SIGN UP TODAY</h1>
                                <div className="flex flex-col gap-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">First & Last Name</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="text" placeholder="First & Last Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[11px] mt-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">Email</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[11px] mt-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">Password</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="password" placeholder="Your Password" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[11px] mt-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">Confirm Password</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <button
                                    className="text-base font-medium text-white rounded-full bg-[#E35C30] text-center w-full h-[56px] mt-[41px]">Create
                                    An Account</button>
                            </form>
                            <p className="text-sm text-[#B6B6B6] font-medium mt-4 text-center">Already have an account? <Link
                                className="font-semibold text-[#E35C30] cursor-pointer" onClick={handleSignIn}>Login
                                Now</Link></p>
                        </div>
                    </div>
                </section>

                <section id="sign-in" className="fixed z-10 w-full hidden">
                    <div onClick={handleHiddenModal} className="blur-bg">
                    </div>
                    <div className="absolute top-5 z-10 right-0 me-6 md:me-[70px] xl:me-[150px] ">
                        <div className="sm:w-[368px] mx-auto md:mx-0 bg-[#FBFBFB] rounded-lg home4-signup-container">
                            <form className="">
                                <h1 className="text-[#262729] text-[24px] mb-[46px] font-bold text-center md:text-left">
                                    Login</h1>
                                <div className="flex flex-col gap-[11px] mt-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">Email</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[11px] mt-[11px]">
                                    <label>
                                        <span className="text-base font-medium text-[#262729]">Password</span>
                                    </label>
                                    <div
                                        className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                        <input className="outline-none" type="password" placeholder="Your Password" />
                                    </div>
                                </div>
                                <div className="mt-[15px] flex items-center gap-2">
                                    <input type="checkbox" id="" name="remember" value="remember" />
                                    <label><span className="text-sm text-[#575757] font-medium">Remember
                                        me</span></label>
                                </div>
                                <button
                                    className="text-base font-medium text-white rounded-full bg-[#E35C30] text-center w-full h-[56px] mt-[41px]">Login</button>
                            </form>
                        </div>
                    </div>
                </section>

                {
                    location.pathname == "/Home_4" ?
                        <section
                            className="pt-[50px] md:pt-[87px] pb-[100px] md:pb-[195px] lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                            <div className="flex flex-col items-center justify-center w-full">
                                <div className="max-w-[613px] text-center">
                                    <p
                                        className="text-sm font-medium max-w-[238px] py-[7px] mx-auto bg-white/[7%] border border-white/[12%] rounded-full text-white">
                                        Announcing Our Beta Product</p>
                                    <h1
                                        className="font-bold text-white text-[24px] sm:text-[36px] lg:text-[57px] leading-[72px] mb-9 mt-10">
                                        Transform
                                        Your Website with
                                        Sass</h1>
                                    <p className="text-sm md:text-base lg:text-[20px] font-medium leading-[36px] text-[#BAD0E5] mb-9">
                                        Clarity gives
                                        you
                                        the blocks & components you need to create a truly professional website, landing page or
                                        admin panel for SaaS</p>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center justify-center">
                                    <button
                                        className="bg-[#E35C30] rounded-full text-white px-6 md:px-[35px] py-3 md:py-[15px] font-medium text-xs md:text-sm">Get
                                        Started
                                        Free</button>
                                    <button
                                        className="bg-transparent border border-[#FFFBFA] rounded-full text-white px-8 md:px-[45px] py-3 md:py-[15px] font-medium text-xs md:text-sm">Demo</button>
                                </div>
                            </div>
                        </section>
                        : ''
                }

            </section>
            {/* End Menubar and Banner Section */}
        </div>
    );
};

export default Navbar_4;