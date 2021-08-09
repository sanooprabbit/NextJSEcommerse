import ProductDetails from "../../components/ProductDetails";
import { productService } from "../../services/product.service";
import Recommendation from "../../components/Recommendation";
import { ProductContextProvider } from "../../context/product.context";

const Product = ({ productData }) => {
  const { recommendation, details } = productData;

  return (
    <ProductContextProvider>
      <div className="mb-3">
        <ProductDetails {...details} />
      </div>
      <div>
        <Recommendation recommendations={recommendation} />
      </div>
    </ProductContextProvider>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const { params } = context;

  const data = await productService.getProductDetails(params?.productId);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productData: data,
    },
  };
}
