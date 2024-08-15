import React from "react";
import AboutBanner from "../assets/Bonkers.com (2).png";
import about from "../assets/About1.webp"
const About = () => {
  return (
    <div>
      <div class="card text-bg-dark d-flex flex-column border-0">
        <img src={about} class="" alt="About Banner" />
        <div class="card-img-overlay"></div>
      </div>
      <div className="container p-5">
        <h1 className="primary fw-bold my-4">About Us</h1>
        <p className="">It’s right there, in the name. It’s the kinda crazy that makes you feel comfortable. Based in Mumbai, Bonkers Corner is a home-grown online brand that serves as your exclusive source of street wear fashion solely made in India. Our signature aesthetic stems from the dire need to stand out from the rest. Crazy balanced by comfort & chic. Our brand ultimately forces you to be your best dressed version while being able to do so at the most affordable prices. Staying offbeat, reinventing your style as your heart’s desire is now right at your fingertips.

Deriving inspiration from varied genres of art, music, movies, gaming, pop culture and more, Bonkers Corner now serves as the epitome of fashion, culture and lifestyle, by playing host to the widest array of merchandise, of various interpretations. 

Commenced with a vision of manufacturing streetwear worth every penny, the brand offers an extensive assortment of oversized tees, joggers, sweatshirts & hoodies, Co-Ord Sets and so much more to both men and women, often coming out with unisex collections as well. We also have our latest Pop Culture Collection from Disney™ and Marvel™. Launching a new collection every other month is our way of keeping our customers entertained, excited and on their feet. The anticipation of new prints, new styles keeps the monotony at bay.

Starting in 2020, the brand benefited greatly, when e-commerce businesses were skyrocketing. Having an online store was therefore not only necessary but also inevitable. Straight after its onset, the brand initiated a crowd favourite trend- being The Oversized Tee, making it mainstream, creating popular demand, and as a result, it was adopted by various other brands in recent times.

Known for its complete convenience under one roof, the brand’s online portal is an experience in itself. Consumers can view their favourite collections, search for a specific piece, at great convenience using the user-friendly interface. Comprehensive size charts, detailed product information and high resolution images add value to our consumers’ buying decisions.

Bonkers Corner makes you believe that ordinary was never a choice. Eccentricity at its core, everything our brand offers is unique, and never done before. The world is your ramp, and everyday can be different. Be true to your own style & look effortless while doing so. Crazy never knew no limits.</p>
      </div>
      <div class="card text-bg-dark d-flex flex-column border-0 my-5">
        <img src={AboutBanner} class="" alt="About Banner" />
        <div class="card-img-overlay"></div>
      </div>
    </div>
  );
};

export default About;
