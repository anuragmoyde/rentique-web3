import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
const Store = () => {
    const [isInView, setIsInView] = useState(false);
    const triggerRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.25 });
        if (triggerRef.current)
            observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: ".storeDisplay",
            start: "175vh", // Start when the top of the List hits the top of the viewport
            end: "bottom bottom",
            pin: ".storeImage",
            pinSpacing: false,
        });
        // Cleanup on component unmount
        return () => {
            trigger.kill();
        };
    }, []);
    return (<div className={`storeDisplay ${isInView ? "scrolled" : ""}`} ref={triggerRef}>
      <div className="storeDetails">
        <div className="storeTextSections">
          <span>Origins</span>
          <p>
            Founded in 1947 in Västerås, Sweden, H&M started as a women's
            clothing store called "Hennes," which means "Hers" in Swedish. In
            1968, the company acquired the hunting apparel retailer "Mauritz
            Widforss," adding men's clothing to its selection and rebranding as
            Hennes & Mauritz (H&M). Today, H&M is one of the world's largest
            fashion retailers, known for its fast-fashion model.
          </p>
        </div>
        <div className="storeTextSections">
          <span>Specialization</span>
          <p>
            H&M specializes in fast fashion, offering trendy clothing,
            accessories, and home products at affordable prices. The company is
            known for its wide range of collections, catering to men, women,
            children, and home decor. H&M focuses on providing stylish,
            up-to-date clothing inspired by the latest fashion trends while
            maintaining a commitment to sustainability and responsible sourcing.
          </p>
        </div>
        <div className="storeTextSections">
          <span>Achievements</span>
          <p>
            H&M has achieved significant milestones, including being one of the
            first major fashion retailers to launch a global garment recycling
            program. The company has collaborated with high-profile designers
            like Karl Lagerfeld, Stella McCartney, and Balmain, making designer
            fashion more accessible. H&M is also recognized for its
            sustainability efforts, aiming to use 100% recycled or sustainably
            sourced materials by 2030. With over 4,000 stores worldwide and a
            robust online presence, H&M continues to be a leader in the fashion
            industry.
          </p>
        </div>
      </div>
      <div className="storeImage">
        <img src="\images\Vendors\Vendor2.jpg"/>
      </div>
    </div>);
};
export default Store;
