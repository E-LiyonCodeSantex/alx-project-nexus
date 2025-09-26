import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUser, faCartFlatbedSuitcase, faCopyright } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function NavBar() {
    const pathname = usePathname()
    const navItems = [
        { href: '/home', icon: faHome, label: 'Home' },
        { href: '/home/brand', icon: faCopyright, label: 'Brands' },
        { href: '/home/category', icon: faList, label: 'Categories' },
        { href: '/home/cart', icon: faCartFlatbedSuitcase, label: 'Cart' },
        { href: '/home/profile', icon: faUser, label: 'Profile' },
    ]
    return (
        <nav
            className="fixed bottom-0 flex flex-row justify-around gap-4 items-center rounded-t-2xl p-3 left-0 w-full z-50  bg-[#DCDCDC] overflow-x-auto whitespace-nowrap">
            {
                navItems.map(({ href, icon, label }) => {
                    const isActive = pathname === href;
                    const colorClass = isActive ? 'text-[#0699CA]' : 'text-black';

                    return (
                        <div key={href} >
                            <Link href={href} className="flex flex-col justify-center items-center">
                                <FontAwesomeIcon icon={icon} className={`${colorClass} text-xl`} />
                                <span className={`font-bold ${colorClass}`}>{label}</span>
                            </Link>
                        </div>
                    );
                })
            }
        </nav>
    )
}

