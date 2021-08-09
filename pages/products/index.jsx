import ProductCard from "../../components/ProductCard";
import { productService } from "../../services/product.service";

const Products = (props) => {
  const { productData } = props;
  return (
    <div>
      <div className="featured-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>Featured Items</h1>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div id="filters" className="button-group">
                <button className="btn btn-primary" data-filter="*">
                  All Products
                </button>
                <button className="btn btn-primary" data-filter=".new">
                  Newest
                </button>
                <button className="btn btn-primary" data-filter=".low">
                  Low Price
                </button>
                <button className="btn btn-primary" data-filter=".high">
                  Hight Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured container no-gutter">
        <div className="row posts">
          {productData?.map((product, index) => (
            <ProductCard {...product} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const data = await productService.getAllProducts();

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
