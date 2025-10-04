import { useEffect, useState } from "react";
import OneProduct from "./OneProduct";
import Loader from "./Loader";

export default function Foundations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <ul className="flex flex-row flex-wrap justify-center items-center gap-y-12 gap-x-8">
      {data.length > 0 ? (
        data.map((product) => (
          <OneProduct
            key={product.id}
            name={product.name}
            price={product.price}
            price_sign={product.price_sign}
            product_link={product.product_link}
            brand={product.brand}
            type={product.product_type}
            image={product.api_featured_image}
          />
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
}
