import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WomenEthnicWear = () => {
    return (<div className="collection">
      {/* Section Title */}
      <div className="collectionTitle">
        <span>WOMEN'S</span>
        <span>ETHNIC WEAR</span>
      </div>

      <div className="dailyCollection">
        <div className="collectionLeft">
          <div className="dailyImg">
            <img src="/images/Femalecollection/lehengas.jpg" alt="Designer Lehenga"/>
            <span>
              Designer Lehenga | The Poshaak |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹25,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹2,500 (Rental)
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
            <img src="/images/Femalecollection/saree.jpg" alt="Designer Saree"/>
            <span>
              Designer Saree | S FAB |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹18,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹1,800 (Rental)
              </strong>
            </span>
          </div>
        </div>

        <div className="collectionRight">
          <div className="dailyImg">
            <img src="/images/Femalecollection/anarkali.jpg" alt="Anarkali Suit"/>
            <span>
              Anarkali Suit | R Bhavana's |
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ₹12,000 (MRP)
              </span>
              <strong style={{ color: "white", marginLeft: "8px" }}>
                | ₹1,200 (Rental)
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>);
};
export default WomenEthnicWear;
