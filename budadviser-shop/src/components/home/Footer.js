import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
    return (
        <footer
            id="footer"
            className="bg-black border-t border-white/10 px-6 py-14"
        >
            <div className="max-w-6xl mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Brand / Description */}
                    <div>
                        <h4 className="text-2xl font-extrabold text-white">
                            Budadviser
                        </h4>
                        <p className="text-green-400 mt-3 text-sm">
                            Premium Bar & Weed Lounge in Pattaya.
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Chill • Smoke • Relax
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="text-lg font-bold text-white mb-4">
                            Contact
                        </h5>

                        <div className="flex items-start justify-center md:justify-start gap-3 text-gray-300 text-sm">
                            <FaMapMarkerAlt className="mt-1 text-green-500" />
                            <a
                                href="https://maps.google.com/?q=98 70 Khao Talo Muang Pattaya Bang Lamung District Chon Buri 20150"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition"
                            >
                                98/70 Khao Talo, Muang Pattaya,<br />
                                Bang Lamung District,<br />
                                Chon Buri 20150
                            </a>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm mt-4">
                            <FaPhoneAlt className="text-green-500" />
                            <a
                                href="tel:0841310794"
                                className="hover:text-green-400 transition"
                            >
                                084 131 0794
                            </a>
                        </div>

                        <p className="text-yellow-400 mt-4 text-sm font-semibold">
                            Open Daily: 12:00 – 00:00
                        </p>

                        <p className="text-gray-400 text-sm mt-1">
                            🚚 Delivery available throughout all of Pattaya
                        </p>
                    </div>

                    {/* Social / CTA */}
                    <div>
                        <h5 className="text-lg font-bold text-white mb-4">
                            Follow Us
                        </h5>

                        <div className="flex justify-center md:justify-start gap-6 text-white mb-6">
                            <a
                                href="https://instagram.com/bud.adviser"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition"
                            >
                                <FaInstagram size={20} />
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61556700565741&"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition"
                            >
                                <FaFacebookF size={20} />
                            </a>
                        </div>

                        <a
                            href="tel:0841310794"
                            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        >
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-10"></div>

                {/* Bottom Bar */}
                <div className="text-center text-gray-500 text-xs">
                    © {new Date().getFullYear()} Budadviser Pattaya. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
