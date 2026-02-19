import { Header } from "../components/home/Header";
import { Hero } from "../components/home/Hero";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { DeliverySection } from "../components/home/DeliverySection";
import { Footer } from "../components/home/Footer";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { DeliveryAreas } from "../components/home/DeliveryAreas";
import { Reviews } from "../components/home/Reviews";
import { BudadviserExclusives } from "../components/home/BudadviserExclusives";
import { OrderInfoBanner } from "../components/home/Infobanner";
export function Home() {
    return (
        <div className="min-h-screen bg-red-100">
            <Header />
            <OrderInfoBanner total={1000} />
            <Hero />
            <FeaturedProducts />
            <DeliverySection />
            <WhyChooseUs />
            <DeliveryAreas />
            <Reviews />
            <BudadviserExclusives />
            <Footer />
        </div>
    );
}

