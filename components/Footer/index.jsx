import Link from "next/link";

const Footer = () => {
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-text">
              <p>
                Copyright © 2021 Company Name - Design: 
                <a rel="nofollow" href="/facebook" />
                My Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
