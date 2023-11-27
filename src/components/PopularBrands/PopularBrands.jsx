import React from "react";

const PopularBrands = () => {
  const brands = [
    {
      link: "https://i.ibb.co/0n2kFsG/logo-rick-owens.png",
    },
    {
      link: "https://i.ibb.co/Jx5gk8y/e04176713c8ad6c5847efd3132b0cfc6.png",
    },
    {
      link: "https://i.ibb.co/F6FGmv8/Chrome-Hearts-Symbol.png",
    },
    {
      link: "https://i.ibb.co/mCYDQLV/61362277f5966900044cbf5a.png",
    },
  ];

  return (
    <div>
      <h1>Popular Brands</h1>
      <div className="brand-logos">
        {brands.slice(0, 4).map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={brand.logo} alt={`Brand Logo ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
