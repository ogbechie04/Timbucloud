import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useLocation, Link } from "react-router-dom";
import SearchAccount from "../components/SearchAccount";
import NavBar from "../components/NavBar";
import ProductCategory from "../components/ProductCategory";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import heroImage from "../assets/hero-image.jpg";
import userImage from "../assets/user-image.jpg";
import laptop from "../assets/laptop.svg";
import airpods from "../assets/airpods.svg";
import controller from "../assets/controller.svg";
import iPhone from "../assets/iphone.svg";

function ListingPage() {
  const location = useLocation();
  console.log(location);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const size = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=115305807e2746e893b60d4d9ecee23b&reverse_sort=false&page=${currentPage}&size=${size}&Appid=V1X2GKWL8HPEEAP&Apikey=8b84c46837194a0ea1f90fe7b452c5d420240712130446321603`
        );
        const data = await response.json();

        if (data && data.items && Array.isArray(data.items)) {
          setProducts(data.items);
          const calculatedTotalPages = Math.ceil(data.total / size);
          setTotalPages(calculatedTotalPages); // Calculate total pages
        } else {
          throw new Error("Unexpected data format");
        }

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [currentPage, size]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <div className="mx-5 lg:mx-20 mt-5 lg:mt-10">
        <header>
          <SearchAccount />
          <NavBar />
          <img
            src={heroImage}
            alt="heroImage"
            className="w-full mt-3.5 lg:mt-14"
          />
        </header>
        <div className="w-full h-6 bg-mainblue-background mt-6 hidden lg:block"></div>

        <main className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-9 lg:gap-11">
          <section className="flex flex-col items-center w-fit gap-[77px]">
            <div className="w-full lg:w-fit flex flex-col gap-3.5 lg:gap-0.5">
              <p className="lg:text-lg text-base leading-7 font-bold font-inter bg-mainblue text-white text-center lg:text-justify py-3.5 lg:pl-9 lg:pr-20 w-full rounded lg:rounded-b-none text-nowrap">
                SHOP BY CATEGORY
              </p>
              <div className="flex lg:flex-col gap-4 lg:gap-0.5 flex-wrap justify-between">
                <ProductCategory categoryName={"Smartphones"} />
                <ProductCategory
                  categoryName={"Laptops"}
                  className={"order-3 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Accessories"}
                  className={"order-2 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Gaming"}
                  className={"order-6 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Wearable Technologies"}
                  className={"order-4 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Photo/Videography"}
                  className={"order-5 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Audio Entertainment"}
                  className={"lg:rounded-b hidden lg:flex"}
                />
              </div>
            </div>
            <div className="lg:flex flex-col items-center gap-6 border-solid border hidden rounded border-mainblue shadow-[0px_4px_8px_0px_#08319C] p-3">
              <div className="flex flex-col items-center gap-3 pt-7">
                <p className="text-mainblue font-bold leading-7 text-xl">
                  BEST GADGETS
                </p>
                <p className="font-bold leading-7 text-base">SHOP NOW!</p>
              </div>
              <img src={userImage} alt="user-image" />
            </div>
          </section>
          <section className="md:w-full w-fit flex flex-col items-center lg:gap-[92px] gap-10">
            <div className="flex flex-col gap-5 md:gap-10 w-full">
              <div className="text-xl lg:text-2xl font-bold text-mainblue leading-7 flex justify-between font-inter">
                <p>FEATURED PRODUCTS</p>
                <div className="lg:flex gap-8 hidden">
                  <a href="" className="hover:underline">
                    Promo
                  </a>
                  <a href="" className="hover:underline">
                    New Arrival
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2.5 md:gap-5">
                <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-40 md:gap-y-14 ">
                  {products.map((product) => (
                    <Link key={product.id} to={`/ProductPage/${product.name}`}>
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
                    </Link>
                  ))}
                </div>
                <ReactPaginate
                  className="list-none flex justify-center items-center font-roboto font-normal text-base"
                  pageCount={totalPages}
                  pageRangeDisplayed={4}
                  marginPagesDisplayed={2}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  activeClassName="active"
                  pageClassName="page-item"
                  previousClassName="page-item"
                  nextClassName="page-item"
                  previousLabel="Previous"
                  nextLabel="Next"
                />
              </div>
            </div>
            {/* <Button buttonText={"VIEW MORE PRODUCTS"} className={"p-3"} /> */}
          </section>
        </main>
      </div>
      <footer className="lg:mx-20">
        <Footer />
      </footer>
    </>
  );
}

export default ListingPage;
