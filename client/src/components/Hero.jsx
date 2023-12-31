import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";

function Hero() {
  return (
    <section className="text-gray-600 flex justify-center items-center min-h-[50dvh]">
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Heading>Elevate Your Style with Posaak</Heading>
          <p className="mb-8 leading-relaxed">
            Welcome to Posaak, your haven for all things fashion. Step into a
            world where style knows no bounds, and your wardrobe dreams come
            true. At Posaak, we don't just offer clothing; we offer an
            expression of your unique personality and a canvas for you to paint
            your style story.
          </p>
          <div className="flex justify-center">
            <Button variant="primary">Shop Now</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="h-auto w-auto"
            alt="hero"
            priority={true}
            src="/hero.jpg"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
