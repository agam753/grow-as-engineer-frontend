import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-4 md:p-8 lg:p-16">
      <section className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Welcome to our company! We are dedicated to providing the best service
          possible. Our team is composed of experienced professionals who are
          passionate about what they do.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Our mission is to deliver high-quality products that meet the needs of
          our customers. We believe in innovation, integrity, and excellence in
          everything we do.
        </p>
        <Button className="mt-4">Learn More</Button>
      </section>
    </main>
  );
};

export default AboutPage;
