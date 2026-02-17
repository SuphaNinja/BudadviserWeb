const CART_KEY = "weedshop_cart";

/* ------------------ Helpers ------------------ */

function isBrowser() {
    return typeof window !== "undefined";
}

/* ------------------ Core ------------------ */

export function getCart() {
    if (!isBrowser()) return [];

    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

export function saveCart(cart) {
    if (!isBrowser()) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
    if (!isBrowser()) return;
    localStorage.removeItem(CART_KEY);
}

/* ------------------ Add Item ------------------ */

export function addToCart(product) {
    const cart = getCart();

    /**
     * Cart Item Structure:
     * {
     *   id: number,
     *   name: string,
     *   category: string,
     *   unitPrice: number,
     *   quantity: number,
     *   unitLabel: "g" | "item"
     * }
     */

    const existing = cart.find(
        item =>
            item.id === product.id &&
            item.unitLabel === product.unitLabel
    );

    if (existing) {
        existing.quantity += product.quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            unitPrice: product.unitPrice,
            quantity: product.quantity,
            unitLabel: product.unitLabel,
        });
    }

    saveCart(cart);
}

/* ------------------ Remove Item ------------------ */

export function removeFromCart(id, unitLabel) {
    const cart = getCart().filter(
        item => !(item.id === id && item.unitLabel === unitLabel)
    );

    saveCart(cart);
}

/* ------------------ Update Quantity ------------------ */

export function updateQuantity(id, unitLabel, quantity) {
    const cart = getCart();

    const item = cart.find(
        item => item.id === id && item.unitLabel === unitLabel
    );

    if (!item) return;

    if (quantity <= 0) {
        removeFromCart(id, unitLabel);
        return;
    }

    item.quantity = quantity;
    saveCart(cart);
}

/* ------------------ Derived Data ------------------ */

export function getCartCount() {
    return getCart().reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
    return getCart().reduce(
        (total, item) => total + item.unitPrice * item.quantity,
        0
    );
}
