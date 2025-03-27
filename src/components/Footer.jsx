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
import { Link } from "react-router-dom";

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
                <Link to="/history" className="text-muted small d-block">
                  Company History
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-muted small d-block">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-muted small d-block">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/values" className="text-muted small d-block">
                  Values
                </Link>
              </li>
              <li>
                <Link to="/SRS" className="text-muted small d-block">
                  Sustainability and Social Responsibility
                </Link>
              </li>
              <li>
                <Link to="/OurTeam" className="text-muted small d-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted small d-block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Shop</h3>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/category/clothing"
                  className="text-muted small d-block"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/category/accessories"
                  className="text-muted small d-block"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/category/footwear"
                  className="text-muted small d-block"
                >
                  Footwear
                </Link>
              </li>
              <li>
                <Link
                  to="/category/electronics"
                  className="text-muted small d-block"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/home" className="text-muted small d-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-muted small d-block">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/new-products" className="text-muted small d-block">
                  New Products
                </Link>
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
                <Link to="/contact" className="text-muted small d-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted small d-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted small d-block">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted small d-block">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-muted small d-block">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-muted small d-block">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Legal</h3>
            <ul className="list-unstyled mb-4">
              <li>
                <Link to="/terms" className="text-muted small d-block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted small d-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted small d-block">
                  Cookie Policy
                </Link>
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
                  <i className="bi bi-tiktok me-2 fs-5"></i>Tiktok
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
