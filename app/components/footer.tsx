import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTiktok, faFacebook, faInstagram, faCcMastercard, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from "react";


export default function Footer() {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <footer className="bg-[#333333] w-full flex flex-col  justify-center items-center gap-4 pb-24">
            <div className='w-full justify-center items-start flex flex-col gap-4 bg-black p-4 text-white'>
                <Image
                    src="/assets/images/o-buy-no-bg-sm.png"
                    alt="O-Buy logo"
                    width={100}
                    height={50}
                />
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>New to O-buy?</h1>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                </div>
                <form className='w-full flex flex-wrap justify-start items-center gap-4'>
                    <div
                        className={isFocus ? 'border-2 border-[#0699CA] w-full flex justify-start items-center max-w-[200px] gap-2 bg-white p-2 rounded-2xl' : 'border-2 border-white w-full flex justify-start items-center max-w-[200px] gap-2 bg-white p-2 rounded-2xl'}>
                        <FaEnvelope className={isFocus ? 'text-[#0699CA]' : 'text-black/40'} />
                        <input type="email"
                            placeholder='Enter email address'
                            className='w-full bg-white text-black outline-none'
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)} />
                    </div>
                    <button
                        type='submit'
                        className={'border-2 border-white w-full flex justify-center items-center max-w-[100px] gap-2 text-white p-2 rounded-2xl hover:text-[#0699CA] hover:border-[#0699CA]'}>
                        Submit
                    </button>
                </form>
                <p>You can unsubscribe from newsletters at any time.</p>
            </div>
            <div className="flex flex-wrap w-full justify-between items-start gap-4 text-white border-b-2 border-white/40 pb-2 px-4 max-[411px]:items-center max-[411px]:justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">Need Help?</h3>
                    <ul className="flex flex-col flex-wrap gap-2">
                        <li>Chat with us</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">ABOUT O-BUY</h3>
                    <ul className="flex flex-col flex-wrap gap-2">
                        <li>About us</li>
                        <li>O-Buy careers</li>
                        <li>Corporate Website</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Notice</li>
                        <li>Store Credit Terms & Conditions</li>
                        <li>O-Buy Payment Information Guidelines</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">MAKE MONEY WITH O-BUY</h3>
                    <ul className="flex flex-col flex-wrap gap-2">
                        <li>Sell on O-Buy</li>
                        <li>Vendor hub</li>
                        <li>Become a Sales Consultant</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">O-BUY INTERNATIONAL</h3>
                    <div className="flex justify-between items-center gap-2">
                        <ul className="flex flex-col flex-wrap gap-4">
                            <li>Algeria</li>
                            <li>Ghana</li>
                            <li>Kenya</li>
                            <li>Senegal</li>
                            <li>US</li>
                        </ul>
                        <ul className="flex flex-col flex-wrap gap-2">
                            <li>Egypt</li>
                            <li>Ivory Coast</li>
                            <li>Morocco</li>
                            <li>Uganda</li>
                            <li>Turkey</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap w-full gap-6 justify-around items-center text-white px-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">JOIN US ON</h3>
                    <div className="flex flex-wrap gap-4">
                        <FontAwesomeIcon icon={faYoutube}
                            className="text-2xl text-[#DE1616]" />
                        <FontAwesomeIcon icon={faTiktok}
                            className="text-2xl" />
                        <FontAwesomeIcon icon={faFacebook}
                            className="text-2xl text-[#1877F2]" />
                        <FontAwesomeIcon icon={faInstagram}
                            className="text-2xl text-[#E9A019]" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-bold border-b-2 border-white/40 w-fit">PAYMENT METHODS</h3>
                    <div className="flex flex-wrap gap-4">
                        <FontAwesomeIcon icon={faCcMastercard}
                            className="text-2xl" />
                        <FontAwesomeIcon icon={faCcVisa}
                            className="text-2xl" />
                        <FontAwesomeIcon icon={faPaypal}
                            className="text-2xl" />
                    </div>
                </div>
            </div>
            <p className="mt-4 text-white/50 p-4">
                © {new Date().getFullYear()} O-BUY. All Rights Reserved.
            </p>

        </footer>
    )
}