import React from "react";
import "../../styles/Home.css";

import Header from "../../Header";
import Hero from "./Hero";
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import GreekSaladImage from "../../assets/greek salad.jpg";
import BruchettaImage from "../../assets/bruchetta.svg";
import LemonDessertImage from "../../assets/lemon dessert.jpg";
import Logo from "../../assets/Logo.svg";

const highlights_data = [
    {
      image: GreekSaladImage,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salaad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: BruchettaImage,
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: LemonDessertImage,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }
  ]

  const testimonials_array = [
    {
      rating: 4,
      name: 'Filipe',
      review: 'Very tasty food and nice staff!',
    },
    {
      rating: 4,
      name: 'Tiago',
      review: 'Great food quality, you can tell that you get what you paid for.',
    },
    {
      rating: 5,
      name: 'José',
      review: 'This place is a hidden gem! Amazing food, great service, and a cozy atmosphere. Highly recommend the seafood pasta.',
    },
    {
      rating: 3,
      name: 'Manuel',
      review: 'The ambiance and decor were lovely, but the food was just average. I expected more from a restaurant with such high prices.',
    },
  ]


const Home = () => {
    return(
        <>
            <meta name="description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
            <meta name="og:image" content={Logo}/>
            <main>
                <Hero></Hero>
                <Highlights highlights_array={highlights_data} />
                <Testimonials testimonials_array={testimonials_array} />
                <About></About>
            </main>
    </>
    );
}

export default Home;