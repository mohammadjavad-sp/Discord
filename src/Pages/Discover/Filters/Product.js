import { Button, Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { product } = useParams();
  const [res, setRes] = useState(null);
  const productAxios = async () => {
    let result = await axios(`https://fakestoreapi.com/products/${product}`);
    setRes(result.data);
  };
  useEffect(() => {
    productAxios();
  }, []);
  console.log(res);
  return (
    res && (
      <section className="flex w-[90%] mx-auto py-10 gap-16 flex-col lg:flex-row items-center">
        <div>
          <img src={res.image} className="w-[300px]" />
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-6/12 items-center lg:items-start">
          <h6 className="font-GgMedium ">&#9679; {res.category}</h6>
          <h2 className="font-GrintoBold text-[24px] md:text-[30px] lg:text-start text-center">{res.title}</h2>
          <p className="font-GgSemiBold text-[20px] lg:text-start text-center">{res.description}</p>
          <Rating name="read-only" value={res.rating.rate} readOnly />
          <div className="flex gap-2 flex-col items-center lg:items-start">
            <h6 className="font-GgMedium line-through">500$</h6>
            <h4 className="font-GgBold text-[24px]">{res.price + "$"}</h4>
          </div>
          <Button className="!w-fit" variant="contained" color="error">
            Add to cart
          </Button>
        </div>
      </section>
    )
  );
};

export default Product;
