import { useState } from "react";
const Adjust = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems);
    // Handler for submitting the updates
    const handleSubmit = (id) => {
        // Find the index of the item with the given id
        const updatedItems = items.map((item) => item.id === id
            ? {
                ...item,
                count: item.count, // Keep the current count unless changed
                price: item.price, // Keep the current price unless changed
            }
            : item);
        setItems(updatedItems); // Update the state with modified items
        alert(`Item with ID: ${id} has been updated`);
    };
    // Handler for deleting a specific item
    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };
    return (<div className="clothing-management">
      <h2>Clothing Inventory Management</h2>
      <ul className="clothing-list">
        {items.map((item) => (<li key={item.id} className="clothing-item">
            <div className="item-details">
              <span>
                <strong>Name:</strong> {item.name}
              </span>
              <span>
                <strong>Clothing Type:</strong> {item.clothing}
              </span>

              <label>
                <strong>Count:</strong>
                <input type="number" id={`count-${item.id}`} value={item.count} // Link input value to state
         onChange={(e) => setItems(items.map((itm) => itm.id === item.id
                ? { ...itm, count: parseInt(e.target.value, 10) }
                : itm))} min="0" className="input-box"/>
              </label>

              <label>
                <strong>Price:</strong>
                <input type="text" id={`price-${item.id}`} value={item.price} // Link input value to state
         onChange={(e) => setItems(items.map((itm) => itm.id === item.id
                ? { ...itm, price: parseFloat(e.target.value) }
                : itm))} className="input-box"/>
              </label>
            </div>

            <div className="item-actions">
              <button onClick={() => handleSubmit(item.id)} className="submit-button">
                Submit
              </button>

              <button onClick={() => handleDelete(item.id)} className="delete-button">
                Delete
              </button>
            </div>
          </li>))}
      </ul>
    </div>);
};
export default Adjust;
