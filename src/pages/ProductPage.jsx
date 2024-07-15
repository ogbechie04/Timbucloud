import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function ProductPage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const size = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${import.meta.env.VITE_ORGANIZATION_KEY}&reverse_sort=false&page=1&size=${size}&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();

        if (data && data.items && Array.isArray(data.items)) {
          setProducts(data.items);
          console.log(products);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [name]); // Dependencies for useEffect

  return (
    <>
      <div className="flex flex-col mx-5 lg:mx-20 mt-5 lg:mt-10 md:gap-10 gap-5">
        <NavBar />
        <div className="flex items-center flex-col gap-4">
          <h1 className="md:text-3xl text-2xl font-bold">
            Product Details for: <span className="text-mainblue">{name}</span>
          </h1>
          <div className="max-w-96">
            {products
              .filter((product) => product.name === name)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.photos[0].url}
                  imageAlt={product.name}
                  productName={product.name}
                  price={product.current_price[0]["NGN"][0]}
                  oldPrice={product.oldPrice}
                  description={product.description}
                  id={product.id}
                />
              ))}
          </div>
          <Link to={'/'}><a href="" className="font-medium text-lg hover:underline">Return to Home</a></Link>

        </div>
      </div>
    </>
  );
}

export default ProductPage;
