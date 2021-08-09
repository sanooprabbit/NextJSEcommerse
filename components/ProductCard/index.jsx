import Link from "next/link";

const ProductCard = (props) => {
  const { image, title, price, id } = props;
  return (
    <div id={2} className="item high col-md-4">
      <Link href={`/products/${id}`}>
        <div className="featured-item">
          <div className="w-100 text-center">
            <img src={image} alt={title} />
          </div>
          <h4>{title}</h4>
          <h6>₹{price}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
