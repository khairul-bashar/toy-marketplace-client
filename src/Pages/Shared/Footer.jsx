import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200">
        <div>
          <Link to="/">
            <img
              className="w-14 h-14 rounded-3xl border border-red-300"
              src="https://previews.123rf.com/images/lumitar/lumitar1604/lumitar160400005/55700019-babyish-emblem-with-a-doll-girl-s-toys-pastel-color-palette-pink-pale-pink-blue-flat.jpg"
              alt=""
            />
          </Link>
          <p>
            Toys Car Industries Ltd
            <br />
            All Time services This Company
          </p>
          <label className="label"></label>
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-[#FFB6C6] absolute top-0 right-0  rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <span className="footer-title">About Us</span>
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/Login" className="link link-hover">
            LogIn
          </a>
          <a href="/register" className="link link-hover">
            Register
          </a>
          <a href="/Blogs" className="link link-hover">
            Blogs
          </a>
        </div>
        <div>
          <span className="footer-title">Toy Cars</span>
          <a href="/all-toys" className="link link-hover">
            All Toys
          </a>
          <a href="/add-toys" className="link link-hover">
            Add Toys
          </a>
          <a href="/MyToys" className="link link-hover">
            My Toys
          </a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a href="/AllToys" className="link link-hover">
            Awal Road, Dhaka
          </a>
          <a href="/AddToys" className="link link-hover">
            +088 019000000
          </a>
          <a href="/MyToys" className="link link-hover">
            userinfo@gmail.com
          </a>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-[#1A1A1A] text-white">
        <div>
          <p>
            Copyright © 2023 - All right reserved by Toy Cars Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
