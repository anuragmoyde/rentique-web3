import React, { useState, useRef } from 'react';
import gsap from 'gsap';
const Filter = () => {
    const [openSection, setOpenSection] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const sectionsRefs = {
        gender: useRef(null), // New Gender Section
        availability: useRef(null),
        size: useRef(null),
        collections: useRef(null),
        clothing: useRef(null),
        pricing: useRef(null), // New Pricing Section
        dayDelivery: useRef(null), // New Day Delivery Section
    };
    const toggleSection = (section) => {
        const sectionRef = sectionsRefs[section].current;
        if (openSection === section) {
            // Close the currently open section
            gsap.to(sectionRef, {
                maxHeight: 0,
                duration: 0.7,
                ease: "sine.out",
            });
            setOpenSection(null);
        }
        else {
            // If a section is already open, close it first
            if (openSection) {
                const prevSectionRef = sectionsRefs[openSection].current;
                gsap.to(prevSectionRef, {
                    maxHeight: 0,
                    duration: 0.7,
                    ease: "sine.out",
                });
            }
            // Open the clicked section
            gsap.to(sectionRef, {
                maxHeight: "20vw",
                duration: 0.5,
                ease: "sine.in",
            });
            setOpenSection(section);
        }
    };
    const handleOptionChange = (section, value) => {
        console.log(`Selected ${value} in ${section}`);
        setSelectedOption(value); // Update selected option
    };
    return (<div className="dropdown">
       {/* GENDER Section */}
       <div className="dropdown-header" onClick={() => toggleSection('gender')}>
                GENDER <span className="plus">{openSection === 'gender' ? '-' : '+'}</span>
            </div>
            <div ref={sectionsRefs.gender} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
                {['MEN', 'WOMEN', 'UNISEX'].map((gender) => (<label key={gender}>
                        <input type="radio" name="gender" value={gender.toLowerCase()} checked={selectedOption === gender.toLowerCase()} onChange={() => handleOptionChange('gender', gender.toLowerCase())}/>
                        <span className="radio-label">{gender}</span>
                    </label>))}
            </div> 
      {/* AVAILABILITY Section */}
      <div className="dropdown-header" onClick={() => toggleSection('availability')}>
          AVAILABILITY <span className="plus">{openSection === 'availability' ? '-' : '+'}</span>
      </div>
      <div ref={sectionsRefs.availability} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
          <label>
              <input type="radio" name="availability" value="in-stock" checked={selectedOption === 'in-stock'} onChange={() => handleOptionChange('availability', 'in-stock')}/>
              <span className="radio-label">In Stock</span>
          </label>
          <label>
              <input type="radio" name="availability" value="out-of-stock" checked={selectedOption === 'out-of-stock'} onChange={() => handleOptionChange('availability', 'out-of-stock')}/>
              <span className="radio-label">Out of Stock</span>
          </label>
      </div>

      {/* SIZE Section */}
      <div className="dropdown-header" onClick={() => toggleSection('size')}>
          SIZE <span className="plus">{openSection === 'size' ? '-' : '+'}</span>
      </div>
      <div ref={sectionsRefs.size} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
          {['SMALL', 'MEDIUM', 'LARGE', 'EXTRA LARGE'].map((size) => (<label key={size}>
                  <input type="radio" name="size" value={size.toLowerCase()} checked={selectedOption === size.toLowerCase()} onChange={() => handleOptionChange('size', size.toLowerCase())}/>
                  <span className="radio-label">{size}</span>
              </label>))}
      </div>

      {/* COLLECTIONS Section */}
      <div className="dropdown-header" onClick={() => toggleSection('collections')}>
          COLLECTIONS <span className="plus">{openSection === 'collections' ? '-' : '+'}</span>
      </div>
      <div ref={sectionsRefs.collections} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
          {['SPRING', 'SUMMER', 'FALL', 'WINTER'].map((collection) => (<label key={collection}>
                  <input type="radio" name="collections" value={collection.toLowerCase()} checked={selectedOption === collection.toLowerCase()} onChange={() => handleOptionChange('collections', collection.toLowerCase())}/>
                  <span className="radio-label">{collection} Collection</span>
              </label>))}
      </div>

      {/* CLOTHING Section */}
      <div className="dropdown-header" onClick={() => toggleSection('clothing')}>
          CLOTHING <span className="plus">{openSection === 'clothing' ? '-' : '+'}</span>
      </div>
      <div ref={sectionsRefs.clothing} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
          {['SEE ALL', 'DRESSES', 'HOODIES', 'JACKETS', 'KIMONO', 'PANTS', 'SWEATSHIRTS', 'T-SHIRTS'].map((item) => (<label key={item}>
                  <input type="radio" name="clothing" value={item.toLowerCase()} checked={selectedOption === item.toLowerCase()} onChange={() => handleOptionChange('clothing', item.toLowerCase())}/>
                  <span className="radio-label">{item}</span>
              </label>))}
      </div>
      {/* PRICING Section */}
      <div className="dropdown-header" onClick={() => toggleSection('pricing')}>
                PRICING <span className="plus">{openSection === 'pricing' ? '-' : '+'}</span>
            </div>
            <div ref={sectionsRefs.pricing} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
                {['UNDER $50', '$50 - $100', '$100 - $200', 'OVER $200'].map((priceRange) => (<label key={priceRange}>
                        <input type="radio" name="pricing" value={priceRange} checked={selectedOption === priceRange} onChange={() => handleOptionChange('pricing', priceRange)}/>
                        <span className="radio-label">{priceRange}</span>
                    </label>))}
            </div>

            {/* DAY DELIVERY Section */}
            <div className="dropdown-header" onClick={() => toggleSection('dayDelivery')}>
                DAY DELIVERY <span className="plus">{openSection === 'dayDelivery' ? '-' : '+'}</span>
            </div>
            <div ref={sectionsRefs.dayDelivery} className="dropdown-content" style={{ maxHeight: 0, overflow: 'hidden' }}>
                {['SAME DAY', 'NEXT DAY', '2-3 DAYS', 'STANDARD (5-7 DAYS)'].map((delivery) => (<label key={delivery}>
                        <input type="radio" name="dayDelivery" value={delivery} checked={selectedOption === delivery} onChange={() => handleOptionChange('dayDelivery', delivery)}/>
                        <span className="radio-label">{delivery}</span>
                    </label>))}
            </div>
  </div>);
};
export default Filter;
