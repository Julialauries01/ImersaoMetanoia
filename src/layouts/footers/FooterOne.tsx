

import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <div className="footer section-padding"
        style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <Link href="/"><img src="assets/img/logo.png" alt="image-here" /></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p>
                <div className="social_profile">
                  <ul>
                    <li><a href="#" className="f_facebook"><i className="ti-facebook" title="Facebook"></i></a></li>
                    <li><a href="#" className="f_instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                    <li><a href="#" className="f_linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12">

            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Our services</h4>
                <ul>
                  <li><a href="#">Network protection</a></li>
                  <li><a href="#">Computer security</a></li>
                  <li><a href="#">Cyber solution</a></li>
                  <li><a href="#">Locker security</a></li>
                  <li><a href="#">Code Inspection</a></li>
                  <li><a href="#">Folder Duplication</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
              <h4>Our services</h4>
                <ul>
                  <li><a href="#">Network protection</a></li>
                  <li><a href="#">Computer security</a></li>
                  <li><a href="#">Cyber solution</a></li>
                  <li><a href="#">Locker security</a></li>
                  <li><a href="#">Code Inspection</a></li>
                  <li><a href="#">Folder Duplication</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row fc">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_copyright">
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;