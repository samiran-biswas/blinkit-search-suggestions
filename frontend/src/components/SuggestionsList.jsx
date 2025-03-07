import React from "react";
import { ListGroup } from "react-bootstrap";

const SuggestionsList = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;

  return (
    <ListGroup className="position-absolute w-100 bg-white border rounded shadow mt-1 overflow-auto" style={{ maxHeight: "30rem", zIndex: 10 }}>
      {suggestions.map((item) => (
        <ListGroup.Item 
          key={item.merchant_id} 
          className="d-flex align-items-center p-3 border-bottom list-group-item-action"
          style={{ cursor: "pointer", transition: "background 0.3s" }}
          onMouseDown={() => onSelect(item)}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f9fa")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          {/* Product Image */}
          <img 
            src={item.image_url || "https://via.placeholder.com/50"} 
            alt={item.name || "No name"} 
            className="me-3 rounded border shadow-sm"
            style={{ width: "55px", height: "55px", objectFit: "cover" }}
          />

          {/* Product Details */}
          <div className="flex-grow-1">
            <p className="fw-bold mb-1 text-dark">{item.name || "No Name Available"}</p>
            <p className="text-muted small mb-1">{item.unit || "N/A"}</p>

            {/* Price Section */}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-success fs-5">₹{item.price || "0"}</span>
              {item.mrp > item.price && (
                <span className="text-muted text-decoration-line-through ms-2 fs-6">₹{item.mrp}</span>
              )}
            </div>

            {/* Stock Information */}
            <span className={`small fw-bold ${item.inventory > 0 ? "text-success" : "text-danger"}`}>
              {item.inventory > 0 ? `✔ In stock: ${item.inventory}` : "❌ Out of stock"}
            </span>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SuggestionsList;
