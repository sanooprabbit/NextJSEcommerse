const axios = require("axios");

export const productService = {
  getAllProducts,
  getProductDetails,
};

function getAllProducts() {
  return axios.get("https://fakestoreapi.com/products").then((resp) => {
    return resp.data;
  });
}

function getProductById(productId) {
  return axios.get(`https://fakestoreapi.com/products/${productId}`).then((resp) => {
    return resp.data;
  });
}

function getFeaturedProducts() {
  return axios.get("https://fakestoreapi.com/products?limit=5").then((resp) => {
    return resp.data;
  });
}

async function getProductDetails(productId) {
  const productData = await Promise.all([getProductById(productId), getFeaturedProducts()]);
  return {
    details: productData[0],
    recommendation: productData[1]
  }
}