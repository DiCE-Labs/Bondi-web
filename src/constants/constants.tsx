import IconDocument_stack from "../assets/icons/Document";
import IconHomeCityOutline from "../assets/icons/HomeCity";
import IconHomeOutline from "../assets/icons/HomeOutline";
import img1 from "../assets/images/house1.jpg";
import img2 from "../assets/images/house2.jpg";
import img3 from "../assets/images/house3.jpg";

export const dummyListing = [
  {
    image: img1,
    price: "K50,000",
    name: "Beautiful Home with a View",
    address: "123 Main St, Cityville",
    bedrooms: 4,
    bathrooms: 3,
    dimensions: "6x7",
  },
  {
    image: img2,
    price: "K75,000",
    name: "Luxurious Mansion",
    address: "456 Oak St, Townsville",
    bedrooms: 6,
    bathrooms: 8,
    dimensions: "9x7",
  },
  {
    image: img3,
    price: "K30,000",
    name: "Cozy Cottage",
    address: "789 Pine St, Villagetown",
    bedrooms: 2,
    bathrooms: 1,
    dimensions: "9x7",
  },
];

export const categories = [
  {
    icon: <IconHomeOutline />,
    name: "Appartments",
  },
  {
    icon: <IconHomeCityOutline />,
    name: "Boarding House",
  },
  {
    icon: <IconDocument_stack />,
    name: "Plots",
  },
];
