import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        data && setGoods(data);
        setLoading(false);
      });
  }, []);

  return <>{loading ? <Preloader /> : <GoodsList goods={goods} />}</>;
}

export { Shop };
