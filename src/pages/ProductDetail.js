import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.detailContainer}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
