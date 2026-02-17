import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../../assets/MainLogo.jpeg";

const CART_KEY = "weedshop_cart";

export function Header() {
    const [cartCount, setCartCount] = useState(0);

    // Update cart count from localStorage
    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
            const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            setCartCount(total);
        };

        updateCartCount();
        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) footer.scrollIntoView({ behavior: "smooth" });
    };

    const navClass = ({ isActive }) =>
        isActive
            ? "flex-1 text-center bg-green-600 text-white py-2 rounded-full text-sm font-semibold transition"
            : "flex-1 text-center border border-white/10 bg-white/5 hover:bg-white/10 text-white py-2 rounded-full text-sm font-medium transition";

    const desktopNavClass = ({ isActive }) =>
        isActive
            ? "text-green-400 font-semibold"
            : "hover:text-green-400 transition-colors";

    return (
        <header className="bg-black backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">

                {/* MOBILE */}
                <div className="flex flex-col items-center md:hidden">

                    <NavLink to="/" className="mb-4">
                        <img
                            src={logo}
                            alt="Budadviser Logo"
                            className="h-14 w-auto max-h-16 object-contain"
                        />
                    </NavLink>

                    <div className="flex w-full gap-3 items-center">

                        <NavLink to="/" end className={navClass}>
                            Home
                        </NavLink>

                        <NavLink to="/shop" className={navClass}>
                            Shop
                        </NavLink>

                        <button
                            onClick={scrollToFooter}
                            className="flex-1 text-center border border-white/10 bg-white/5 hover:bg-white/10 text-white py-2 rounded-full text-sm font-medium transition"
                        >
                            Contact
                        </button>

                        {/* Cart Icon for Mobile */}
                        <NavLink
                            to="/cart"
                            className="relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-full text-white hover:text-green-400 hover:bg-white/10 transition"
                        >
                            <FaShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </NavLink>

                    </div>

                    <div className="mt-3 text-xs text-green-400 font-medium">
                        🚚 24/7 Delivery in Pattaya
                    </div>

                </div>

                {/* DESKTOP */}
                <div className="hidden md:flex items-center justify-between">

                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Budadviser Logo"
                            className="h-12 w-auto max-h-14 object-contain"
                        />
                    </NavLink>

                    <nav className="flex items-center gap-10 text-white text-sm font-medium">

                        <NavLink to="/" end className={desktopNavClass}>
                            Home
                        </NavLink>

                        <NavLink to="/shop" className={desktopNavClass}>
                            Shop
                        </NavLink>

                        <button
                            onClick={scrollToFooter}
                            className="hover:text-green-400 transition-colors"
                        >
                            Contact
                        </button>

                    </nav>

                    <div className="flex items-center gap-5 text-white relative">

                        <a
                            href="https://instagram.com/bud.adviser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61556700565741&"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>

                        {/* Cart Icon for Desktop */}
                        <NavLink
                            to="/cart"
                            className="relative hover:text-green-400 transition-colors"
                        >
                            <FaShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </NavLink>

                    </div>

                </div>

            </div>
        </header>
    );
}
