"use client";

export function CheckoutForm({ form, setForm, warnings, cartTotal, onCheckout }) {
    return (
        <div className="bg-neutral-900 border border-green-500/30 rounded-3xl p-8 mt-10">
            <h2 className="text-xl font-semibold mb-4">Your Details</h2>

            <div className="flex flex-col gap-2 mb-4">
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

            {warnings.length > 0 && (
                <div className="mb-4 bg-red-900/40 border border-red-700 rounded-xl p-3 text-sm text-red-200">
                    {warnings.map((w, i) => <p key={i}>{w}</p>)}
                </div>
            )}

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Total</h2>
                <p className="text-2xl font-bold text-yellow-400">฿{cartTotal}</p>
            </div>

            <button
                onClick={onCheckout}
                className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-3 rounded-xl font-semibold"
            >
                Proceed to Checkout
            </button>
        </div>
    );
}
