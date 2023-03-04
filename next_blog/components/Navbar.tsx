import Image from "next/image";
import Link from "next/link";

const Navar = () => {
    return (
        <nav className="flex item-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image
                        src="/logo.png"
                        width={35}
                        height={40}
                        alt="navbar"
                    />
                    <span className="font-bold ml-2 text-primary-dark">
                        NextJs Blog
                    </span>
                </div>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-semibold text-gray-600">
                    <a href="#">Products</a>
                </li>
                <li className="mr-6 font-semibold text-gray-600">
                    <a href="#">Pricing</a>
                </li>
                <li className="mr-6 font-semibold text-gray-600">
                    <a href="#">Docs</a>
                </li>
                <li className="mr-6 font-semibold text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-semibold text-gray-600 ">
                    <a href="#" className="hover:text-gray-400">
                        Login
                    </a>
                </li>
                <li className="font-semibold text-white">
                    <a
                        href="#"
                        className="hover:text-gray-400 bg-primary-dark py-2 px-4 rounded-md hover:bg-primary transition-all"
                    >
                        Signup
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navar;
