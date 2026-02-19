
import grinderImage from "../assets/grinder.png";
const jajaFilters =
    "https://jajashop.com/cdn/shop/files/TIPS_R2_72DPI_16-9_1.png?v=1767793103&width=1920";
const jajaSafari =
    "https://your-greenmile.de/cdn/shop/files/jaja-safari-kingsize-xl-muster-4-vorderansichtwebp.jpg?v=1725464619&width=1500";
const jajaPure =
    "https://jajashop.com/cdn/shop/products/VL097-nwe_9f28009f-77f5-4555-8b24-d90ed1c25328.jpg?v=1648650637&width=1000";
const jajaSlimRed =
    "https://jaja.asia/cdn/shop/files/VL091-new_single_gedraaid.png?v=1751334128&width=1445";
const jajaBlue =
    "https://www.mistersmoke.com/wp-content/uploads/2018/05/4.2.69-2.jpg"
const weedImage =
    "https://weedmaps.com/learn/wp-content/uploads/2020/05/181210_Nugs_017.jpg";

const preRolledImage =
    "https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/default-photos/preroll/prerolls.png";
const preRolledImage2 =
    "https://sanapackaging.com/cdn/shop/files/Glass_Jar_38_90mm_Clear_white-lid_joints_1000x1250_c9fa7dff-5ebc-411e-afcb-e9c50f21042e_1024x1024.jpg?v=1743458760";
export const products = [

/* ===================== PARTY PACKS ===================== */

    { id: 101, name: "Party Pack - 10 Pre-Rolled Joints", mainCategory: "pre-rolled", subCategory: "party pack", price: 1500, rating: 5, reviews: 6, badge: "Ready to Smoke", stock: "Limited", image: preRolledImage2, description: "Massive 20g hand-rolled premium joints. Party ready.", quantity: 10, },

    { id: 102, name: "Party Pack - 25 Pre-Rolled Joints", mainCategory: "pre-rolled", subCategory: "party pack", price: 2500, rating: 5, reviews: 6, badge: "Ready to Smoke", stock: "Limited", image: preRolledImage2, description: "Massive 20g hand-rolled premium joints. Party ready.", quantity: 25, },

    { id: 103, name: "Party Pack - 50 Pre-Rolled Joints", mainCategory: "pre-rolled", subCategory: "party pack", price: 4500, rating: 5, reviews: 6, badge: "Ready to Smoke", stock: "Limited", image: preRolledImage2, description: "Massive 20g hand-rolled premium joints. Party ready.", quantity: 50, },

    { id: 104, name: "Party Pack - 100 Pre-Rolled Joints", mainCategory: "pre-rolled", subCategory: "party pack", price: 8000, rating: 5, reviews: 6, badge: "Ready to Smoke", stock: "Limited", image: preRolledImage2, description: "Massive 20g hand-rolled premium joints. Party ready.", quantity: 100, },

/* ===================== WEED ===================== */

{ id: 1, name: "Blue Dream", mainCategory: "weed", subCategory: "sativa", thc: 22, cbd: 1, pricePerGram: 450, rating: 4.8, reviews: 18, effects: ["Uplifting", "Creative", "Energetic"], badge: "Top Seller", stock: "In Stock", image: weedImage, description: "Sweet berry aroma with uplifting energetic high. Perfect daytime strain.", },

{ id: 2, name: "OG Kush", mainCategory: "weed", subCategory: "indica", thc: 25, cbd: 0.5, pricePerGram: 200, rating: 4.9, reviews: 24, effects: ["Relaxing", "Heavy", "Sleepy"], badge: "Strong", stock: "In Stock", image: weedImage, description: "Heavy-hitting indica with deep body relaxation and earthy pine flavor.", },

{ id: 3, name: "Gelato 41", mainCategory: "weed", subCategory: "hybrid", thc: 24, cbd: 0.7, pricePerGram: 500, rating: 4.7, reviews: 15, effects: ["Balanced", "Euphoric", "Happy"], badge: "Premium", stock: "Limited", image: weedImage, description: "Balanced hybrid with creamy citrus notes and smooth smoke.", },

{ id: 4, name: "Oil Spill", mainCategory: "weed", subCategory: "hybrid", thc: 18, cbd: 1, pricePerGram: 450, rating: 4.2, reviews: 15, effects: ["Euphoric", "Relaxed", "Uplifting"], badge: "Balanced Hybrid", stock: "In Stock", image: weedImage, description: "Sweet fruity nose with diesel undertones and a creeping balanced high that’s both euphoric and relaxing for all-day enjoyment.", },

{ id: 5, name: "Halle Berry", mainCategory: "weed", subCategory: "hybrid", thc: 20, cbd: 1, pricePerGram: 300, rating: 4.5, reviews: 25, effects: ["Relaxed", "Euphoric", "Happy"], badge: "Top Rated", stock: "In Stock", image: weedImage, description: "Balanced hybrid with sweet orange berry aroma and a calming, euphoric high perfect for unwinding and social vibes.", },

{ id: 6, name: "Blue Zushi", mainCategory: "weed", subCategory: "hybrid", thc: 24, cbd: 0, pricePerGram: 450, rating: 4.7, reviews: 40, effects: ["Euphoric", "Relaxed", "Tingly"], badge: "Customer Favorite", stock: "In Stock", image: weedImage, description: "Indica-leaning hybrid with sweet blueberry sweetness and a calming yet euphoric buzz perfect for stress relief.", },

{ id: 7, name: "Blockberry", mainCategory: "weed", subCategory: "hybrid", thc: 28, cbd: 1, pricePerGram: 350, rating: 4.6, reviews: 30, effects: ["Creative", "Euphoric", "Focused"], badge: "Popular Pick", stock: "In Stock", image: weedImage, description: "Balanced hybrid with berry, citrus and vanilla notes that spark creativity and deliver a joyful, uplifting head high.", },

{ id: 8, name: "Subo Cherry", mainCategory: "weed", subCategory: "hybrid", thc: 24, cbd: 1, pricePerGram: 550, rating: 4.6, reviews: 21, effects: ["Euphoric", "Relaxed", "Happy"], badge: "New Drop", stock: "In Stock", image: weedImage, description: "Sweet cherry aroma with creamy undertones and a smooth euphoric high that melts into relaxing body calm.", },

{ id: 9, name: "Zushi x Oreoz", mainCategory: "weed", subCategory: "hybrid", thc: 27, cbd: 1, pricePerGram: 500, rating: 4.8, reviews: 34, effects: ["Relaxed", "Tingly", "Creative"], badge: "Top Seller", stock: "In Stock", image: weedImage, description: "Sweet creamy gas flavor with berry notes and a powerful relaxing high that settles the body and sparks creativity.", },

{ id: 10, name: "Subo", mainCategory: "weed", subCategory: "hybrid", thc: 23, cbd: 1, pricePerGram: 450, rating: 4.4, reviews: 17, effects: ["Uplifting", "Focused", "Relaxed"], badge: "", stock: "In Stock", image: weedImage, description: "Smooth earthy sweetness with subtle fruit notes delivering a balanced uplifting high with calm body relaxation.", },

{ id: 11, name: "Cookie Creme", mainCategory: "weed", subCategory: "hybrid", thc: 22, cbd: 1, pricePerGram: 600, rating: 4.5, reviews: 29, effects: ["Relaxed", "Happy", "Sleepy"], badge: "Popular Pick", stock: "In Stock", image: weedImage, description: "Sweet vanilla cookie flavor with earthy hints and a relaxing euphoric high perfect for evening unwinding.", },

{ id: 12, name: "Honey Creme", mainCategory: "weed", subCategory: "indica", thc: 21, cbd: 1, pricePerGram: 400, rating: 4.3, reviews: 14, effects: ["Relaxed", "Sleepy", "Calm"], badge: "", stock: "In Stock", image: weedImage, description: "Rich honey sweetness with creamy undertones delivering a soothing body high ideal for stress relief.", },

{ id: 13, name: "Durban Poison", mainCategory: "weed", subCategory: "sativa", thc: 24, cbd: 0, pricePerGram: 200, rating: 4.7, reviews: 52, effects: ["Energetic", "Focused", "Uplifting"], badge: "Classic", stock: "In Stock", image: weedImage, description: "Sweet earthy pine aroma with a clear energetic high that boosts focus and daytime productivity.", },

{ id: 14, name: "Grape Candy", mainCategory: "weed", subCategory: "hybrid", thc: 22, cbd: 1, pricePerGram: 440, rating: 4.4, reviews: 19, effects: ["Happy", "Relaxed", "Creative"], badge: "", stock: "In Stock", image: weedImage, description: "Sweet grape candy flavor with fruity notes delivering a balanced uplifting high and gentle body relaxation.", },

{ id: 15, name: "MAC 1", mainCategory: "weed", subCategory: "hybrid", thc: 26, cbd: 1, pricePerGram: 500, rating: 4.8, reviews: 60, effects: ["Creative", "Euphoric", "Uplifting"], badge: "Premium", stock: "In Stock", image: weedImage, description: "Citrus diesel aroma with creamy undertones and a strong uplifting high that enhances mood and creativity.", },

{ id: 16, name: "Bubblegum", mainCategory: "weed", subCategory: "indica", thc: 19, cbd: 1, pricePerGram: 400, rating: 4.5, reviews: 41, effects: ["Relaxed", "Happy", "Sleepy"], badge: "Fan Favorite", stock: "In Stock", image: weedImage, description: "Sweet bubblegum flavor with floral hints delivering a mellow relaxing high perfect for evening chill.", },

{ id: 17, name: "Golden Apple", mainCategory: "weed", subCategory: "hybrid", thc: 23, cbd: 1, pricePerGram: 250, rating: 4.6, reviews: 23, effects: ["Happy", "Uplifting", "Focused"], badge: "", stock: "In Stock", image: weedImage, description: "Sweet apple and citrus aroma with a smooth uplifting high that balances focus and relaxation.", },

{ id: 18, name: "Super Boof Cherry", mainCategory: "weed", subCategory: "hybrid", thc: 28, cbd: 1, pricePerGram: 550, rating: 4.9, reviews: 38, effects: ["Euphoric", "Creative", "Relaxed"], badge: "Top Seller", stock: "In Stock", image: weedImage, description: "Sweet cherry citrus flavor with creamy gas notes delivering a strong euphoric high and smooth body buzz.", },

{ id: 19, name: "Purple Punch", mainCategory: "weed", subCategory: "indica", thc: 23, cbd: 1, pricePerGram: 350, rating: 4.7, reviews: 73, effects: ["Relaxed", "Sleepy", "Happy"], badge: "Top Rated", stock: "In Stock", image: weedImage, description: "Sweet grape and blueberry flavor with a deeply relaxing body high perfect for nighttime relief.", },

{ id: 20, name: "AK-47", mainCategory: "weed", subCategory: "hybrid", thc: 20, cbd: 1, pricePerGram: 500, rating: 4.6, reviews: 85, effects: ["Relaxed", "Creative", "Uplifting"], badge: "Classic", stock: "In Stock", image: weedImage, description: "Earthy floral aroma with subtle sweetness delivering a balanced uplifting high and calm body relaxation.", },

/* ===================== PRE-ROLLED ===================== */

{ id: 21, name: "Ultra King Size Joint (20g)", mainCategory: "pre-rolled", subCategory: "exclusive", price: 2500, rating: 5, reviews: 6, badge: "Ready to Smoke", stock: "Limited", image: preRolledImage, description: "Massive 20g hand-rolled premium joint. Party ready.", },

{ id: 22, name: "Nola Dang Pre-Roll", mainCategory: "pre-rolled", subCategory: "hybrid", price: 400, rating: 5, reviews: 17, badge: "Ready to Smoke", stock: "Available", image: preRolledImage, description: "Smooth and balanced Nola Dang hybrid pre-roll with earthy and slightly citrus notes. Expect a relaxing body buzz combined with an uplifting, happy head high — perfect for any time of day.", },

{ id: 23, name: "Nol Pre-Roll", mainCategory: "pre-rolled", subCategory: "hybrid", price: 350, rating: 5, reviews: 55, badge: "Ready to Smoke", stock: "Available", image: preRolledImage, description: "Smooth and balanced Nola Dang hybrid pre-roll with earthy and slightly citrus notes. Expect a relaxing body buzz combined with an uplifting, happy head high — perfect for any time of day.", },

{ id: 24, name: "OG Kush Pre-Roll", mainCategory: "pre-rolled", subCategory: "sativa", price: 250, rating: 5, reviews: 283, badge: "Ready to Smoke", stock: "Available", image: preRolledImage, description: "Classic OG Kush pre-roll with bold earthy pine and diesel flavors. Delivers an uplifting cerebral buzz with smooth relaxing undertones — a timeless favorite for stress relief and good vibes.", },

{ id: 25, name: "Jelly Pancake Pre-Roll", mainCategory: "pre-rolled", subCategory: "hybrid", price: 200, rating: 5, reviews: 53, badge: "Ready to Smoke", stock: "Available", image: preRolledImage, description: "Sweet and creamy Jelly Pancake hybrid pre-roll with dessert-like flavors and smooth smoke. Expect a balanced high with happy mental uplift and gentle body relaxation.", },

{ id: 26, name: "Money Maker Pre-Roll", mainCategory: "pre-rolled", subCategory: "hybrid", price: 250, rating: 5, reviews: 84, badge: "Ready to Smoke", stock: "Available", image: preRolledImage, description: "Powerful Money Maker pre-roll featuring rich earthy and herbal flavors. Known for its strong relaxing body effects and calm, euphoric head high — ideal for winding down.", },

/* ===================== ACCESSORIES ===================== */

{ id: 27, name: "Budadviser Grinder", mainCategory: "accessories", subCategory: "grinder", price: 300, rating: 4.9, reviews: 11, badge: "Merch", stock: "In Stock", image: grinderImage, description: "Budadviser high-quality plastic grinder. Durable and premium finish.", },

{ id: 28, name: "JAJA King Size Rolling Papers", mainCategory: "accessories", subCategory: "rolling papers", price: 150, rating: 4.7, reviews: 9, badge: "Roll Up", stock: "In Stock", image: jajaBlue, description: "Ultra-thin king size rolling papers with slow even burn and smooth draw. Perfect for clean, classic rolls.", },

{ id: 29, name: "JAJA Slim Rolling Papers", mainCategory: "accessories", subCategory: "rolling papers", price: 150, rating: 4.6, reviews: 7, badge: "Roll Up", stock: "In Stock", image: jajaSlimRed, description: "Ultra-thin slim rolling papers with smooth slow burn and easy roll design. Perfect for clean flavorful sessions.", },

{ id: 30, name: "JAJA Slim Size Pure Rolling Papers", mainCategory: "accessories", subCategory: "rolling papers", price: 150, rating: 4.8, reviews: 12, badge: "Unbleached", stock: "In Stock", image: jajaPure, description: "Unbleached slim rolling papers made from natural fibers with slow clean burn and smooth taste. Perfect for pure sessions.", },

{ id: 31, name: "JAJA King Size XL Safari Rolling Papers", mainCategory: "accessories", subCategory: "rolling papers", price: 150, rating: 4.7, reviews: 10, badge: "Roll Up", stock: "In Stock", image: jajaSafari, description: "Extra-long king size XL rolling papers with smooth slow burn and easy roll design. Perfect for larger sessions.", },

{ id: 32, name: "JAJA Filter Tips", mainCategory: "accessories", subCategory: "filters", price: 60, rating: 4.6, reviews: 8, badge: "Essential", stock: "In Stock", image: jajaFilters, description: "Compact blue filter tips with sturdy paper and easy tear design. Perfect for smooth airflow and clean structured rolls.", },

];