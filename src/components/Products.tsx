import productShampoo from "@/assets/product-shampoo.jpg";
import productStyling from "@/assets/product-styling.jpg";
import productTreatment from "@/assets/product-treatment.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Shampoo",
      image: productShampoo,
      description: "Gentle, nourishing formula for all hair types. Cleanses while maintaining natural moisture balance.",
      category: "Hair Care",
    },
    {
      name: "Styling Collection",
      image: productStyling,
      description: "Professional-grade styling products for lasting hold and natural shine. Create any look with ease.",
      category: "Styling",
    },
    {
      name: "Treatment Serum",
      image: productTreatment,
      description: "Intensive repair and protection. Restores vitality and adds luminous shine to damaged hair.",
      category: "Treatment",
    },
  ];

  return (
    <section id="products" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium hair care products. 
            Each item is chosen for its exceptional quality and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-medium tracking-wide uppercase">
                  {product.category}
                </span>
                <h3 className="text-2xl font-heading font-semibold mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            All products are available for purchase at our salon. Our stylists can recommend 
            the perfect products for your hair type and styling needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
