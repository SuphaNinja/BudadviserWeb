"use client";

import { useEffect, useState } from "react";
import {
    getCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart
} from "../lib/cart";
import { Header } from "../components/home/Header";

export function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [lastOrderCart, setLastOrderCart] = useState([]); // store cart for "Send Again"
    const [form, setForm] = useState({ name: "", address: "", paymentMethod: "" });
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const refreshCart = () => setCart(getCart());

    const handleRemove = (id, unitLabel) => {
        removeFromCart(id, unitLabel);
        refreshCart();
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.unitLabel, item.quantity - 1);
            refreshCart();
        }
    };

    const handleIncrease = (item) => {
        updateQuantity(item.id, item.unitLabel, item.quantity + 1);
        refreshCart();
    };

    const total = getCartTotal();

    // Build WhatsApp order text from given cart
    const createOrderText = (orderCart) => {
        if (!orderCart || orderCart.length === 0) return "🛒 *No items in order* 🛒";

        let message = `🛒 *New Order* 🛒\n\n`;
        message += `👤 *Name:* ${form.name}\n`;
        message += `🏠 *Address:* ${form.address}\n`;
        message += `💰 *Payment Method:* ${form.paymentMethod}\n\n`;
        message += `📦 *Items:*\n`;
        orderCart.forEach(item => {
            message += `• ${item.name} × ${item.quantity} ${item.unitLabel} (฿${item.unitPrice * item.quantity})\n`;
        });
        message += `\n💳 *Total:* ฿${total}\n`;
        message += `\nThank you for your order! 🙏`;
        return encodeURIComponent(message);
    };

    const handleCheckout = () => {
        if (!form.name || !form.address || !form.paymentMethod) {
            alert("Please fill out all fields!");
            return;
        }

        const phone = "66949419300"; // Your WhatsApp number
        const url = `https://wa.me/${phone}?text=${createOrderText(cart)}`;

        window.open(url, "_blank");

        setLastOrderCart(cart); // store current cart for "Send Again"
        clearCart();
        setCart([]);
        setCheckoutComplete(true);
    };

    if (checkoutComplete) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 py-16">
                    <div className="bg-neutral-900 border border-green-500/30 rounded-3xl p-10 text-center max-w-md">
                        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
                        <p className="text-gray-300 mb-4">
                            Your order has been prepared. Click the button below to send it via WhatsApp again if needed.
                        </p>
                        <button
                            onClick={() => {
                                const phone = "66949419300";
                                const url = `https://wa.me/${phone}?text=${createOrderText(lastOrderCart)}`;
                                window.open(url, "_blank");
                            }}
                            className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-3 rounded-xl font-semibold"
                        >
                            Send Order Again
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

                    {cart.length === 0 && (
                        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 text-center">
                            <p className="text-gray-400">Your cart is empty.</p>
                        </div>
                    )}

                    {cart.map((item) => (
                        <div
                            key={`${item.id}-${item.unitLabel}`}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6 mb-6 transition-all duration-300 hover:border-green-500/30"
                        >
                            <div className="flex justify-between items-center flex-wrap gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        ฿{item.unitPrice} × {item.quantity} {item.unitLabel}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleDecrease(item)}
                                            className="bg-white/10 px-3 py-1 rounded-lg"
                                        >
                                            −
                                        </button>
                                        <span className="w-6 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => handleIncrease(item)}
                                            className="bg-white/10 px-3 py-1 rounded-lg"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p className="text-yellow-400 font-semibold w-24 text-right">
                                        ฿{item.unitPrice * item.quantity}
                                    </p>

                                    <button
                                        onClick={() => handleRemove(item.id, item.unitLabel)}
                                        className="text-red-400 hover:text-red-300 text-sm"
                                    >
                                        Remove
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}

                    {cart.length > 0 && (
                        <div className="bg-neutral-900 border border-green-500/30 rounded-3xl p-8 mt-10">

                            <h2 className="text-xl font-semibold mb-4">Your Details</h2>

                            <div className="flex flex-col gap-2 mb-6">

                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />

                                <input
                                    type="text"
                                    placeholder="Address (must be Google Maps findable)"
                                    value={form.address}
                                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                                    className="bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />
                                <p className="text-xs text-gray-400 ml-2">
                                    Make sure your address is complete so it can be located on Google Maps.
                                </p>

                                <select
                                    value={form.paymentMethod}
                                    onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                                    className="bg-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="Cash on Arrival">Cash on Arrival</option>
                                    <option value="Wise">Wise</option>
                                    <option value="Revolut">Revolut</option>
                                    <option value="Thai QR Scan">Thai QR Scan</option>
                                </select>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Total</h2>
                                <p className="text-2xl font-bold text-yellow-400">
                                    ฿{total}
                                </p>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-3 rounded-xl font-semibold"
                            >
                                Proceed to Checkout
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </>
    );
}