import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MapIcon from "@mui/icons-material/Map";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Link } from "react-router-dom";
import { FooterItem } from "./FooterItem";

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
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem to="/history" text={"Company History"} />
              <FooterItem to="/mission" text={"Mission"} />
              <FooterItem to="/vision" text={"Vision"} />
              <FooterItem to="/values" text={"Values"} />
              <FooterItem
                to="/SRS"
                text={"Sustainability and Social Responsibility"}
              />
              <FooterItem to="/OurTeam" text={"Our Team"} />
              <FooterItem to="/careers" text={"Careers"} />
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Shop</h3>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem to="/category/clothing" text={"Clothes"} />
              <FooterItem to="/category/accessories" text={"Accessories"} />
              <FooterItem to="/category/footwear" text={"Footwear"} />
              <FooterItem to="/category/home" text={"Home"} />
              <FooterItem to="/category/electronics" text={"Electronics"} />
              <FooterItem to="/offers" text={"Offers"} />
              <FooterItem to="/new-products" text={"New Products"} />
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              Customer Service
            </h3>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem to="/contact" text={"Contact"} />
              <FooterItem to="/faq" text={"FAQ"} />
              <FooterItem to="/shipping" text={"Shipping & Delivery"} />
              <FooterItem to="/returns" text={"Returns & Refunds"} />
              <FooterItem to="/size-guide" text={"Size Guide"} />
              <FooterItem to="/track-order" text={"Track Order"} />
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">Legal</h3>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem to="/terms" text={"Terms & Conditions"} />
              <FooterItem to="/privacy" text={"Privacy Policy"} />
              <FooterItem to="/cookies" text={"Cookie Policy"} />
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
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem icon={<MailIcon />} text={"support@shoppkua.com"} />
              <FooterItem
                icon={<LocalPhoneIcon />}
                text={"+1 (555) 123-4567"}
              />
              <FooterItem
                icon={<WatchLaterIcon />}
                text={"Monday to Friday: 9am - 6pm"}
              />
              <FooterItem
                icon={<MapIcon />}
                text={"1234 Market Street, Springfield, USA"}
                href="https://www.google.com/maps/place/37.7749,-122.4194"
              />
            </ul>
          </div>
          {/* Column 6: Follow Us */}
          <div className="col-md-3">
            <h3 className="h6 text-uppercase font-weight-bold mb-3">
              Follow Us
            </h3>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-1">
              <FooterItem
                href="https://www.facebook.com/shoppkua"
                icon={<FacebookIcon />}
                text={"Facebook"}
              />
              <FooterItem
                href="https://www.instagram.com/shoppkua"
                icon={<InstagramIcon />}
                text={"Instagram"}
              />
              <FooterItem
                href="https://www.youtube.com/shoppkua"
                icon={<YouTubeIcon />}
                text={"YouTube"}
              />
              <FooterItem
                href="https://www.tiktok.com/@shoppkua"
                icon={<i className="bi bi-tiktok"></i>}
                text={"Tiktok"}
              />
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
