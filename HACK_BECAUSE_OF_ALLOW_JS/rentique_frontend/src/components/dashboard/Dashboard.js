import { useEffect } from "react";
import NoticeBoard from "./Noticeboard";
import Filter from "./Filter";
import Nav from "./Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const filterSamples = [
    {
        id: 1,
        name: "Men's Sherwani",
        gender: "men",
        availability: "in-stock",
        sizes: ["S", "M", "L"],
        collection: "Wedding",
        clothing: "Men's Ethnic Wear",
        price: 1200,
        display: "/images/menCollection/mens_sherwani_1.jpg",
        vendor: "R Bhavana's Boutique",
        description: "Make a grand entrance with this regal sherwani from R Bhavana's Boutique. Crafted with intricate embroidery and premium fabrics, it's the perfect attire for weddings and festive occasions. Rent now for just ₹1,200 and elevate your traditional look without the hassle of ownership.",
        count: 50,
    },
    {
        id: 2,
        name: "Women's Anarkali Suit",
        gender: "women",
        availability: "out-of-stock",
        sizes: ["S", "M"],
        collection: "Ethnic",
        clothing: "Anarkali Suit",
        price: 1500,
        display: "/images/Femalecollection/anarkali.jpg",
        vendor: "Elegant Apparel",
        description: "Drape yourself in elegance with this beautifully embroidered Anarkali suit. A perfect blend of tradition and style, this outfit is ideal for weddings and festive occasions. Out of stock currently, but check back soon!",
        count: 0,
    },
    {
        id: 3,
        name: "Women's Lehenga Set",
        gender: "women",
        availability: "in-stock",
        sizes: ["M", "L", "XL"],
        collection: "Bridal",
        clothing: "Lehengas",
        price: 3000,
        display: "/images/Femalecollection/lehengas.jpg",
        vendor: "Cozy Wear",
        description: "Turn heads at any grand occasion with this exquisite lehenga set, featuring intricate embroidery and a flowing silhouette. Rent it now for ₹3,000 and shine in timeless elegance!",
        count: 30,
    },
    {
        id: 4,
        name: "Men's Bandhgala Suit",
        gender: "men",
        availability: "in-stock",
        sizes: ["M", "L", "XL"],
        collection: "Formal",
        clothing: "Suits",
        price: 1800,
        display: "/images/menCollection/bandhgala.jpg",
        vendor: "Heritage Couture",
        description: "Timeless sophistication meets modern tailoring in this luxurious Bandhgala suit. Whether it’s a wedding reception or a black-tie event, rent this statement piece for ₹1,800 and exude elegance without commitment.",
        count: 25,
    },
    {
        id: 5,
        name: "Men's Designer Kurta Set",
        gender: "men",
        availability: "in-stock",
        sizes: ["L", "XL"],
        collection: "Ethnic",
        clothing: "Kurtas",
        price: 1000,
        display: "/images/menCollection/kurta_set.jpg",
        vendor: "Ethnic Essence",
        description: "Step into any festive occasion with this beautifully crafted designer kurta set. Made from premium fabric, this ensemble offers both comfort and style. Rent it now for ₹1,000 and look effortlessly traditional.",
        count: 15,
    },
    {
        id: 6,
        name: "Men's Sherwani",
        gender: "men",
        availability: "in-stock",
        sizes: ["S", "M", "L"],
        collection: "Wedding",
        clothing: "Men's Ethnic Wear",
        price: 1200,
        display: "/images/menCollection/mens_sherwani_1.jpg",
        vendor: "Sunny Styles",
        description: "Look royal in this intricately designed Sherwani, perfect for weddings and formal occasions. Rent it now for ₹1,200 and make an unforgettable impression!",
        count: 40,
    },
    {
        id: 7,
        name: "Women's Fall Sweater",
        gender: "women",
        availability: "out-of-stock",
        sizes: ["M", "L"],
        collection: "Fall",
        clothing: "Sweaters",
        price: 130,
        display: "/images/Femalecollection/Daily4.jpg",
        vendor: "Autumn Essentials",
        description: "Stay cozy in this relaxed-fit knitted sweater. Perfect for layering in chilly weather, but currently out of stock. Check back soon for availability!",
        count: 0,
    },
    {
        id: 8,
        name: "Women's Luxe Winter Coat",
        gender: "women",
        availability: "in-stock",
        sizes: ["S", "M"],
        collection: "Winter",
        clothing: "Coats",
        price: 250,
        display: "/images/Femalecollection/Daily6.jpg",
        vendor: "Winter Wonders",
        description: "Stay warm and stylish with this premium winter coat featuring a faux fur collar and deep pockets. Rent it for ₹250 and embrace luxury without the hefty price tag.",
        count: 20,
    },
    {
        id: 9,
        name: "Women's Embroidered Spring Blouse",
        gender: "women",
        availability: "in-stock",
        sizes: ["S", "M"],
        collection: "Spring",
        clothing: "Blouses",
        price: 55,
        display: "/images/Femalecollection/Daily9.jpg",
        vendor: "Elegant Apparel",
        description: "Delicate embroidery meets airy fabric in this chic spring blouse. Perfect for casual and semi-formal outings, rent it for just ₹55!",
        count: 35,
    },
    {
        id: 10,
        name: "Women's Breezy Summer Shorts",
        gender: "women",
        availability: "out-of-stock",
        sizes: ["M", "L"],
        collection: "Summer",
        clothing: "Shorts",
        price: 65,
        display: "/images/Femalecollection/Daily8.jpg",
        vendor: "Sunny Styles",
        description: "Light, breathable, and effortlessly stylish—these shorts are a summer staple. Out of stock currently, but check back for restocks!",
        count: 0,
    },
    {
        id: 11,
        name: "Women's Printed Summer Shorts",
        gender: "women",
        availability: "out-of-stock",
        sizes: ["S", "M", "L"],
        collection: "Summer",
        clothing: "Shorts",
        price: 65,
        display: "/images/Femalecollection/Daily10.jpg",
        vendor: "Sunny Styles",
        description: "Another summer essential! These printed shorts add a pop of color to your casual wear. Currently unavailable, but stay tuned for restocks.",
        count: 0,
    },
    {
        id: 12,
        name: "Women's Winter Coat",
        gender: "women",
        availability: "in-stock",
        sizes: ["S", "M"],
        collection: "winter",
        clothing: "coats",
        price: 250,
        display: "/images/Femalecollection/Daily11.jpg",
        vendor: "Winter Wonders",
        description: "A stylish winter coat with a tailored fit, designed to keep you warm and fashionable in cold weather.",
        count: 18,
    },
    {
        id: 13,
        name: "Women's Spring Dress",
        gender: "women",
        availability: "out-of-stock",
        sizes: ["S", "M", "L"],
        collection: "spring",
        clothing: "dresses",
        price: 90,
        display: "/images/menCollection/dailyImg3.jpg",
        vendor: "Elegant Apparel",
        description: "A lovely spring dress with a floral print, featuring a fitted waist and a flowing skirt.",
        count: 0,
    },
    {
        id: 14,
        name: "Women's Winter Coat",
        gender: "women",
        availability: "in-stock",
        sizes: ["S", "M", "L"],
        collection: "winter",
        clothing: "coats",
        price: 250,
        display: "/images/Femalecollection/Daily12.jpg",
        vendor: "Winter Wonders",
        description: "An elegant winter coat with a double-breasted design, made for both style and warmth.",
        count: 22,
    },
];
const Dashboard = () => {
    const navigate = useNavigate();
    const handleItemClick = (id) => {
        window.location.href = `/display/${id}`;
    };
    useEffect(() => {
        // Pin the filterSpace when entering the List section
        const trigger = ScrollTrigger.create({
            trigger: ".List",
            start: "top 100vh", // Start when the top of the List hits the top of the viewport
            end: "bottom bottom",
            pin: ".filterSpace",
            pinSpacing: false,
        });
        // Cleanup on component unmount
        return () => {
            trigger.kill();
        };
    }, []);
    return (<div className="Dashboard">
      <Nav />
      <div className="dashTitle">
        <span>Rentique's Exclusive Collection</span>
      </div>
      <div className="List">
        <div className="filterSpace">
          <Filter />
        </div>
        <div className="board">
          <NoticeBoard list={filterSamples} onClick={handleItemClick}/>
        </div>
      </div>
      <div>
        <span>FOOTER</span>
      </div>
    </div>);
};
export default Dashboard;
