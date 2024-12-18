import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center text-white py-20 h-screen"
      style={{ backgroundImage: "url('lily.jpg')" }}
    >
      {/* Blur effect on the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 filter blur-lg"></div>

      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold pt-12">
          Fresh Flowers Delivered to Your Doorstep
        </h2>
        <p className="mt-4 text-lg">
          Discover beautiful bouquets crafted with love and care.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded shadow-lg hover:bg-pink-600 transition"
        >
          Shop Now
        </Link>
        <div className="mt-4">
          <Link to="/blog" className="text-white hover:text-pink-500 mx-4">
            Visit our Blog
          </Link>
          <Link to="/contact" className="text-white hover:text-pink-500 mx-4">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
