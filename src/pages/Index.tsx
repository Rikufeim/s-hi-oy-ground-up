import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
