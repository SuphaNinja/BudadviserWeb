"use client";

import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQuantity, getCartTotal, clearCart } from "../lib/cart";
import { Header } from "../components/home/Header";
import { CartItem } from "../components/shop/CartItem";
import { CheckoutForm } from "../components/shop/CheckoutForm";
import { ThankYouMessage } from "../components/shop/ThankYouMessage";

export function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [lastOrderCart, setLastOrderCart] = useState([]);
    const [form, setForm] = useState({ name: "", address: "", paymentMethod: "" });
    const [checkoutComplete, setCheckoutComplete] = useState(false);
    const [warnings, setWarnings] = useState([]);

    useEffect(() => setCart(getCart()), []);

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

    const handleCheckout = () => {
        const newWarnings = [];
        if (!form.name) newWarnings.push("Please enter your name.");
        if (!form.address) newWarnings.push("Please enter your address.");
        if (!form.paymentMethod) newWarnings.push("Please select a payment method.");
        if (total < 1000) newWarnings.push("Minimum order is ฿1000.");

        if (newWarnings.length > 0) {
            setWarnings(newWarnings);
            return;
        }

        // Build WhatsApp message
        const phone = "66949419300"; // your WhatsApp number
        let message = `🛒 *New Order* 🛒\n\n`;
        message += `👤 Name: ${form.name}\n`;
        message += `🏠 Address: ${form.address}\n`;
        message += `💰 Payment Method: ${form.paymentMethod}\n\n`;
        message += `📦 Items:\n`;
        cart.forEach(item => {
            message += `• ${item.name} × ${item.quantity} ${item.unitLabel} (฿${item.unitPrice * item.quantity})\n`;
        });
        message += `\n💳 Total: ฿${total}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(url, "_blank");

        // Save last order for "Send Again" button
        setLastOrderCart(cart);

        // Clear cart
        clearCart();
        setCart([]);
        setCheckoutComplete(true);
        setWarnings([]);
    };

    if (checkoutComplete) {
        return (
            <>
                <Header />
                <ThankYouMessage lastOrderCart={lastOrderCart} form={form} total={total} />
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
                        <CartItem
                            key={`${item.id}-${item.unitLabel}`}
                            item={item}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            onRemove={handleRemove}
                        />
                    ))}

                    {cart.length > 0 && (
                        <CheckoutForm
                            form={form}
                            setForm={setForm}
                            warnings={warnings}
                            cartTotal={total}
                            onCheckout={handleCheckout}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
