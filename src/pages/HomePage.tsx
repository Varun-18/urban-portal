import { useEffect, useState } from "react";
import { API } from "../utils";
import { Product } from "../types";
import { Table } from "../components/Table";

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const { products } = await API.get({ url: "/products" });
      console.log("🚀 ~ fetchProducts ~ products:", products);
      setProducts(products);
    } catch (error) {
      console.log("🚀 ~ fetchProducts ~ error:", error);
    }
  };

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, [products]);

  return (
    <div>
      <Table data={products} />
    </div>
  );
};
