import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToEvents = () => {
    const element = document.getElementById("past-events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to Maitri Apartments Resident Welfare Association
          </h1>
          <p className="text-muted-foreground mb-6">
            Your hub for community updates, events, notices, and a space to share feedback. Stay
            informed and connected.
          </p>
          <Button variant="success" size="lg" onClick={handleScrollToEvents}>
            View Event Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
