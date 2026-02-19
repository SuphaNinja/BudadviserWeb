"use client";

export function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 mb-6 transition-all duration-300 hover:border-green-500/30">
            <div className="flex justify-between items-center flex-wrap gap-6">
                <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                        ฿{item.unitPrice} × {item.quantity} {item.unitLabel}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <button onClick={() => onDecrease(item)} className="bg-white/10 px-3 py-1 rounded-lg">−</button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button onClick={() => onIncrease(item)} className="bg-white/10 px-3 py-1 rounded-lg">+</button>
                    </div>

                    <p className="text-yellow-400 font-semibold w-24 text-right">
                        ฿{item.unitPrice * item.quantity}
                    </p>

                    <button onClick={() => onRemove(item.id, item.unitLabel)} className="text-red-400 hover:text-red-300 text-sm">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
