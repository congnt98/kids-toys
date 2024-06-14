import ProductItem from "component/ProductItem/ProductItem";
import React from "react";

const Product = () => {
  const Products = [
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
    {
      name: "name 1",
      vendor: "PAW PATROL",
      sku: "6053026",
      price: 57,
      price_sale: 57,
      rating: 98,
      old: 60,
      availability: 93,
      wislist: 39,
      wislist_status: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/mykingdom-6061804_1.jpg?v=1685041351&width=500",
      sex: "sex 1",
      detail: "detail 1",
      sale: 83,
      id: "1",
    },
  ];

  return (
    <>
      <div className="product-list flex flex-wrap mx-[-8px] ">
        {Products.map((item, key) => (
          <ProductItem
            key={key}
            image={item.image}
            name={item.name}
            sku={item.sku}
            vendor={item.vendor}
            price={item.price}
            price_sale={item.price_sale}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
