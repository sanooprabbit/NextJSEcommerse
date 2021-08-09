const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="caption">
              <h2>My Super Store</h2>
              <div className="line-dec" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                <br />
                <br />
                Please tell your friends about{" "}
                <a rel="nofollow" href="">
                  My Store
                </a>{" "}
                Free store site.
              </p>
              <div className="main-button">
                <a href="/products">Order Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
