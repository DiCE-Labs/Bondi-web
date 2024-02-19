import FeaturedCategories from "../components/home/FeaturedCategories";
import FeaturedListings from "../components/home/FeaturedListings";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <FeaturedCategories />
    </>
  );
};

export default Home;
