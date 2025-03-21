import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenEthnicWear = () => {
    return (<div className="collection">
      {/* Section Title with clear mention of Men's Ethnic Wear */}
      <div className="collectionTitle">
        <span>MEN'S</span>
        <span>ETHNIC WEAR</span>
      </div>

      <div className="dailyCollection">
        <div className="collectionLeft">
          <div className="dailyImg">
            <img src="/images/menCollection/mens_sherwani_1.jpg" alt="Sherwani"/>
            <span>
              Sherwani | R Bhavana's |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹12,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹1,200 (Rental)
              </strong>
            </span>
          </div>
        </div>

        <div className="collectionMiddle">
          <button>
            <span className="material-symbols-outlined"></span>
            Explore
          </button>
          <div className="dailyImg">
            <img src="/images/menCollection/bandhgala.jpg" alt="Bandhgala"/>
            <span>
              Bandhgala | S FAB |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹15,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹1,500 (Rental)
              </strong>
            </span>
          </div>
        </div>

        <div className="collectionRight">
          <div className="dailyImg">
            <img src="/images/menCollection/kurta_set.jpg" alt="Kurta Set"/>
            <span>
              Kurta Set | Manyawar | Poshaak Boutique |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹8,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹800 (Rental)
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>);
};
export default MenEthnicWear;
