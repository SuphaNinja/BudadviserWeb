"use client";
import React from "react";

export function ThankYouMessage({ lastOrderCart, form, total }) {
    const phone = "66949419300";
    const googleReviewLink = "https://search.google.com/local/writereview?placeid=ChIJfXo8CRGVAjER-fLzxM56v1E";

    const sendWhatsApp = () => {
        let message = `🛒 *New Order* 🛒\n\n`;
        message += `👤 *Name:* ${form.name}\n`;
        message += `🏠 *Address:* ${form.address}\n`;
        message += `💰 *Payment Method:* ${form.paymentMethod}\n\n`;
        message += `📦 *Items:*\n`;
        lastOrderCart.forEach(item => {
            message += `• ${item.name} × ${item.quantity} ${item.unitLabel} (฿${item.unitPrice * item.quantity})\n`;
        });
        message += `\n💳 *Total:* ฿${total}\n`;
        message += `\nThank you for your order! 🙏`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 py-16">
            <div className="bg-neutral-900 border border-green-500/30 rounded-3xl p-10 text-center max-w-md">
                <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
                <p className="text-gray-300 mb-4">
                    Your order is being prepared. We will reach out to you with an estimated delivery time.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={sendWhatsApp}
                        className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-3 rounded-xl font-semibold"
                    >
                        Open Whatsapp Again
                    </button>

                    <a
                        href={googleReviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block bg-blue-600 hover:bg-blue-500 transition-all duration-300 py-3 rounded-xl font-semibold text-white"
                    >
                        ⭐ Leave a Google Review
                    </a>

                    <p className="text-gray-400 text-sm mt-2">
                        Liked our service? Leaving a review on Google really helps us out!
                    </p>
                </div>
            </div>
        </div>
    );
}
