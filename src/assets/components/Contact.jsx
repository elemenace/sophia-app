import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="max-w-md mx-auto mt-8 space-y-4">
          {/* Form fields */}
          <div>
            <label htmlFor="name" className="block text-left font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded shadow hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
