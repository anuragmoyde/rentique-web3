import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
// BlogPost Component
const BlogPost = ({ id, gender, availability, size, collection, clothing, price, display, name, onClick }) => {
    return (<div className="post2" onClick={() => onClick(id)}>
      <img src={display} alt={`${gender} ${clothing}`} className="post-image"/>
      <div className="Description">
        <span>{name}</span><span>${price}</span>
      </div>
      {/* <div className="basic">
          <span className="description">
            {collection} Collection - {clothing}
          </span>
          <div className="liner">
            <span>
              <strong>Gender:</strong> {gender}
            </span>
            <span>
              <strong>Size:</strong> {size}
            </span>
          </div>
        </div>
        <div className="profile">
          <span>
            <FontAwesomeIcon icon={faClock} className="icon" /> {availability}
          </span>
          <div className="Reviews">
            <span>Price: <strong>{price}</strong></span>
          </div>
        </div> */}
    </div>);
};
// NoticeBoard Component
const NoticeBoard = ({ list, onClick }) => {
    return (<div className="notices2">
      {list.map((blog) => (<BlogPost key={blog.id} id={blog.id} gender={blog.gender} availability={blog.availability} size={blog.size} collection={blog.collection} clothing={blog.clothing} price={blog.price} display={blog.display} name={blog.name} onClick={onClick}/>))}
    </div>);
};
export default NoticeBoard;
