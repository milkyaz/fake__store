// ProductList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectFilteredProducts } from "../store/productsSlice";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import "./filter.css";
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const productsStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  if (productsStatus === "loading") {
    return <div>Loading...</div>;
  } else if (productsStatus === "succeeded") {
    return (
      <Box
        className="box__item"
        style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 50 }}
      >
        {products.map((product) => (
          <Box style={{ border: "1px solid black" }} key={product.id}>
            <CardMedia
              sx={{ width: "100%", height: 150 }}
              component="img"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography
                style={{ width: 300, paddingTop: 20 }}
                variant="h5"
                component="div"
              >
                {product.title}{" "}
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 20, paddingTop: 9 }}
                  gutterBottom
                  variant="p"
                >
                  Price: {product.price}
                </Typography>
                <CurrencyRubleIcon
                  sx={{ width: 19 }}
                  style={{ paddingBottom: 0 }}
                />
              </Box>
              <Typography
                style={{ fontWeight: "bold", fontSize: 20 }}
                gutterBottom
                variant="p"
              >
                Category: {product.category}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    );
  } else if (productsStatus === "failed") {
    return console.log(error);
  }
};

export default ProductList;
