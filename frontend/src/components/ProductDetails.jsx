import React from "react";
import { Modal, Button, Carousel, Badge } from "react-bootstrap";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;



  return (
    <Modal show={true} onHide={onClose} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title className="fw-bold">{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="row">
          {/* Left: Image Carousel */}
          <div className="col-md-6">
            <Carousel className="mb-3 shadow rounded" touch={true} interval={null}>
              {product.images?.length > 0 ? (
                product.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={img}
                      alt={`Product ${index}`}
                      className="d-block w-100 rounded"
                      style={{ maxHeight: "350px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))
              ) : (
                <img
                  src={product.image_url || "https://via.placeholder.com/350"}
                  alt={product.name}
                  className="d-block w-100 rounded shadow"
                  style={{ maxHeight: "350px", objectFit: "cover" }}
                />
              )}
            </Carousel>
          </div>

          {/* Right: Product Info */}
          <div className="col-md-6">
            <h5 className="text-primary fw-bold">{product.brand || "Brand N/A"}</h5>
            <p className="text-muted"><b>Unit:</b> {product.unit || "N/A"}</p>

            {/* Price Section */}
            <div className="d-flex align-items-center mb-3">
              <h3 className="text-success fw-bold mb-0 me-2">₹{product.price}</h3>
              {product.mrp && <del className="text-muted fs-5">₹{product.mrp}</del>}
              {product.discount > 0 && (
                <Badge bg="danger" className="ms-2">{product.discount}% OFF</Badge>
              )}
            </div>

            {/* Stock Information */}
            <p className={`fw-bold ${product.inventory > 0 ? "text-success" : "text-danger"}`}>
              {product.inventory > 0 ? `In Stock: ${product.inventory}` : "Out of Stock"}
            </p>

            {/* CTA Button */}
            {product.inventory > 0 ? (
              <Button variant="success" className="w-100 shadow-sm fw-bold p-3" >
                🛒 Add to Cart
              </Button>
            ) : (
              <Button variant="secondary" className="w-100 shadow-sm fw-bold p-3" disabled>
                ❌ Out of Stock
              </Button>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <Button variant="danger" onClick={onClose} className="fw-bold px-4">
          ❌ Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetails;
