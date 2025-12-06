import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedServices } from "@/components/featured-services"
import { Categories } from "@/components/categories"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedServices />
      <Categories />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </main>
  )
}
