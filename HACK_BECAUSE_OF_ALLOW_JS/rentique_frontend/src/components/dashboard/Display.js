import Nav from "./Nav";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DragDisplay from "./DragDisplay";
import Store from "./Store";
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
        MRP: 12000,
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
        MRP: 15000,
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
        MRP: 30000,
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
        MRP: 18000,
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
        MRP: 10000,
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
        MRP: 12000,
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
        price: 1300,
        MRP: 13000,
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
const Display = () => {
    const { id } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [securityDeposit, setSecurityDeposit] = useState(0);
    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: ".DisplayCont",
            start: "top top",
            end: "bottom bottom",
            pin: ".DeetsContainer",
            pinSpacing: false,
        });
        return () => {
            trigger.kill();
        };
    }, []);
    const product = filterSamples.find((item) => item.id === parseInt(id));
    const handleBookNow = () => {
        setSecurityDeposit(product.price * 2);
        setShowForm(true);
    };
    return (<div>
      <Nav />
      <div className="DisplayCont">
        <div className="Details">
          <div className="DeetsContainer">
            <div className="titleDetails">
              <span>{product.name}</span>
              <span>MRP: Rs. {product.MRP}</span>
              <span>Rental Price: Rs. {product.price}</span>
            </div>
            <div className="descDetails">
              <p>{product.description}</p>
              <span>
                <span>Clothing: </span>
                {product.clothing}
              </span>
              <span>
                <span>Collection: </span>
                {product.collection}
              </span>
              <span>
                <span>Gender: </span>
                {product.gender}
              </span>
              <p>
                Sizes:{" "}
                {product.sizes.map((size, index) => (<span key={index} className="size-span">
                    {size}
                    {index < product.sizes.length - 1 && ", "}
                  </span>))}
              </p>
            </div>
            <div className="footDetails">
              <span>Owned by {product.vendor}</span>
            </div>
            <button onClick={handleBookNow} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>
        <div className="Items">
          <img src={product.display} alt="oops there should have been an image here -_-"/>
        </div>
      </div>
      {showForm && (<div className="booking-form-overlay">
          <div className="booking-form">
            <h2>Book {product.name}</h2>
            <label>Available Dates:</label>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>

            <label>Size:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select Size</option>
              {product.sizes.map((size) => (<option key={size} value={size}>
                  {size}
                </option>))}
            </select>

            <p>
              <strong>Security Deposit:</strong> ₹{securityDeposit}
            </p>

            <button className="confirm-button" onClick={() => alert("Booking Confirmed!")}>
              Confirm Booking
            </button>
            <button className="cancel-button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>)}
      <div className="scrollDisplay">
        <span>Similar Styles</span>
        <DragDisplay List={filterSamples}/>
      </div>
      <Store />
    </div>);
};
export default Display;
