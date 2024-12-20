import React from 'react';

const brands = [
    {
      name: "idfc",
      imgSrc: "src/assets/Brands.png",
    },
  ];

function Exp() {
  return (
    <>
      <div className="row hero-reverse hero-main">
        <div>
          <div className="hero-title drim-h1">Influence-Cliq</div>
          <div className="hero-subtitle-text drim-h6">
            Empowering Brands through Influencers.
            <span className="font-weight-500"><b/> Pay only for results</span>
          </div>
          <div className="buttons-block">
            <a href="" className="button-drim button-drim-Green">I’m a Brand</a>
            <a
              href=""
              className="button-drim button-drim-purple"
            >
              I’m a Creator
            </a>
          </div>
        </div>
        </div>
        <div className="infinity-line">
      <div>
        <span className="image-row-container">
          {brands.map((brand, index) => (
            <p
              key={`${brand.name}-${index}`}
              className={`brand-logo-line brand-${brand.name} bg-elem visible-img`}
              style={{ backgroundImage: `url(${brand.imgSrc})` }}
            >
              <img
                src={brand.imgSrc}
                className="lazy-img"
                alt={brand.name}
              />
            </p>
          ))}
        </span>
        <span className="image-row-container">
          {brands.map((brand, index) => (
            <p
              key={`${brand.name}-repeat-${index}`}
              className={`brand-logo-line brand-${brand.name} bg-elem visible-img`}
              style={{ backgroundImage: `url(${brand.imgSrc})` }}
            >
              <img
                src={brand.imgSrc}
                className="lazy-img"
                alt={brand.name}
              />
            </p>
          ))}
        </span>
      </div>
    </div>
    </>
  );
}

export default Exp;
