import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/Twitter"; // Twitter icon is now called X
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MapIcon from "@mui/icons-material/Map";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const Footer = () => {
  return (
    <footer>
      <div className="container py-5 border-top">
        {/* Row 1 */}
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              About ShoppKua
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="/history" className="text-muted small d-block">
                  Company History
                </a>
              </li>
              <li>
                <a href="/mission" className="text-muted small d-block">
                  Mission
                </a>
              </li>
              <li>
                <a href="/vision" className="text-muted small d-block">
                  Vision
                </a>
              </li>
              <li>
                <a href="/values" className="text-muted small d-block">
                  Values
                </a>
              </li>
              <li>
                <a href="/SRS" className="text-muted small d-block">
                  Sustainability and Social Responsibility
                </a>
              </li>
              <li>
                <a href="/OurTeam" className="text-muted small d-block">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted small d-block">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Shop</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/category/clothing"
                  className="text-muted small d-block"
                >
                  Clothing
                </a>
              </li>
              <li>
                <a
                  href="/category/accessories"
                  className="text-muted small d-block"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="/category/footwear"
                  className="text-muted small d-block"
                >
                  Footwear
                </a>
              </li>
              <li>
                <a
                  href="/category/electronics"
                  className="text-muted small d-block"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a href="/category/home" className="text-muted small d-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/offers" className="text-muted small d-block">
                  Offers
                </a>
              </li>
              <li>
                <a href="/new-products" className="text-muted small d-block">
                  New Products
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              Customer Service
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="text-muted small d-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted small d-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-muted small d-block">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="/returns" className="text-muted small d-block">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/size-guide" className="text-muted small d-block">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="/track-order" className="text-muted small d-block">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Legal</h3>
            <ul className="list-unstyled mb-4">
              <li>
                <a href="/terms" className="text-muted small d-block">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted small d-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted small d-block">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          {/* Column 5: Contact Us */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              Contact Us
            </h3>
            <ul className="list-unstyled text-muted small">
              <li className="d-flex align-items-start mb-2">
                <MailIcon className="me-2 text-muted" fontSize="small" />
                <span>support@shoppkua.com</span>
              </li>
              <li className="mb-2">
                <LocalPhoneIcon className="me-2 text-muted" fontSize="small" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <WatchLaterIcon className="me-2 text-muted" fontSize="small" />
                <span>Monday to Friday: 9am - 6pm</span>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.google.com/maps/place/37.7749,-122.4194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted"
                >
                  <MapIcon className="me-2 text-muted" fontSize="small" />
                  <span>1234 Market Street, Springfield, USA</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Column 6: Follow Us */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              Follow Us
            </h3>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">
                <a href="#" className="text-reset">
                  <FacebookIcon className="me-2" />
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-reset">
                  <InstagramIcon className="me-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-reset">
                  <i class="bi bi-tiktok me-2 fs-5"></i>Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-5 border-top text-center">
          <p className="text-muted small">
            © 2025 SHOPPKUA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
