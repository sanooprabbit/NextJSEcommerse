
const ProductDetails = (props) => {
  const { image, title, price, id, description, category } = props;

  return (
    <div>
      <div className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>Single Product</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-slider">
                <div id="slider" className="flexslider">
                  <ul className="slides">
                    <li>
                      <img src={image} alt="img"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <h4>{title}</h4>
                <h6>₹{price}</h6>
                <p>{description}</p>
                <span>7 left on stock</span>
                <form action method="get">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    name="quantity"
                    type="quantity"
                    className="quantity-text"
                    id="quantity"
                    onFocus="if(this.value == '1') { this.value = ''; }"
                    onBlur="if(this.value == '') { this.value = '1';}"
                    defaultValue={1}
                  />
                  <input type="submit" className="button" defaultValue="Order Now!" />
                </form>
                <div className="down-content">
                  <div className="categories">
                    <h6>
                      Category:{" "}
                      <span>
                        <a href="#">{category}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="share">
                    <h6>
                      Share:{" "}
                      <span>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;