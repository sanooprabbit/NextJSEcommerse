import Slider from "react-slick";
import ProductCard from "../ProductCard";

const Recommendation = ({ recommendations }) => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "sample",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="slider-container">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Featured Product</h1>
            </div>
          </div>
          <Slider {...settings}>
            {recommendations?.map((product, index) => (
              <div key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
