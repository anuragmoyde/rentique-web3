import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { clamp } from "@popmotion/popcorn";
import { useNavigate } from "react-router-dom";
function useScrollConstraints(ref) {
    const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });
    useEffect(() => {
        const element = ref.current;
        const viewportHeight = element.offsetHeight;
        const contentHeight = element.firstChild.offsetHeight;
        setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
    }, []);
    return constraints;
}
function DragDisplay({ List }) {
    const navigate = useNavigate();
    const x = useMotionValue(0);
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isCursorOver, setIsCursorOver] = useState(false); // Track mouse over state
    const hideTextRefs = useRef([]);
    const { top, bottom } = useScrollConstraints(ref);
    // Handle click on child items
    const handleItemClick = (id) => {
        if (!isDragging) {
            window.location.href = `/display/${id}`;
        }
    };
    // Handle wheel scrolling
    const handleWheel = (event) => {
        if (isCursorOver) {
            event.preventDefault(); // Prevent scroll if cursor is over the div
            return;
        }
        event.preventDefault();
        const newY = x.get() - event.deltaY;
        const clampedY = clamp(top, bottom, newY);
        x.stop();
        x.set(clampedY);
    };
    // Handle drag events
    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => {
        setTimeout(() => {
            setIsDragging(false);
        }, 0);
    };
    // Handle mouse enter and leave to set cursor over state
    const handleMouseEnter = () => setIsCursorOver(true);
    const handleMouseLeave = () => setIsCursorOver(false);
    return (<div className="SkillsContainer" ref={ref} onWheel={handleWheel}>
      <motion.div drag="x" dragConstraints={{ top, bottom }} className="scrollable" style={{ x }} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} // Track when mouse leaves the div
    >
        {List.map((item, index) => (<div key={index} ref={(el) => (hideTextRefs.current[index] = el)} className="skill" onClick={() => handleItemClick(item.id)}>
            <img src={item.display} alt={`Skill ${index}`}/>
            <div className="dragDesc">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          </div>))}
      </motion.div>
    </div>);
}
export default DragDisplay;
