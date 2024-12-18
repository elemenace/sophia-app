import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className=""></div>
        <div className="m-2 text-center text-sm ">
          <p>
            &copy; {new Date().getFullYear()} Sophia The Flower. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
