import { Scissors, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Scissors,
      title: "Expert Craftsmanship",
      description: "Our stylists bring years of experience and continuous training to deliver exceptional results.",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "We listen to your needs and create customized solutions that enhance your natural beauty.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest products and techniques to ensure lasting, beautiful results.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Karen Werner v. Cille Lundqvist is more than just a hair salon—it's a destination 
            for those who appreciate the art of refined styling and exceptional service.
          </p>
        </div>

        <div className="mb-16 prose prose-lg max-w-4xl mx-auto">
          <p className="text-foreground/90 leading-relaxed mb-6">
            Founded on the principles of elegance, expertise, and authenticity, our salon has become 
            a haven for clients seeking more than just a haircut. We believe that every visit should 
            be an experience—one that leaves you feeling confident, refreshed, and truly valued.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Our team of skilled stylists combines traditional techniques with contemporary trends, 
            ensuring that each service is tailored to your unique style and preferences. From precision 
            cuts to color transformations, we approach every detail with care and dedication.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Step into our modern, welcoming space where luxury meets comfort. We're committed to 
            using sustainable, high-quality products that nourish your hair while protecting the 
            environment. Your satisfaction is our priority, and we look forward to helping you 
            achieve the look you've always wanted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
