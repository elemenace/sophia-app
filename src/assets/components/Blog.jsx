const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {/* Blog Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog1.jpg"
              alt="Blog 1"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                The Ultimate Guide to Choosing Comfortable Shoes
              </h3>
              <p className="text-gray-500">
                Learn how to pick the perfect pair of shoes for comfort and
                style, no matter the occasion. Whether it's for daily use,
                sports, or formal events, this guide covers everything you need
                to know.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog2.jpg"
              alt="Blog 2"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                10 Must-Have Sneakers for Every Shoe Lover
              </h3>
              <p className="text-gray-500">
                Discover the top sneakers that combine functionality, design,
                and trend-setting appeal. These shoes are perfect for anyone
                looking to add stylish, versatile options to their collection.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog3.jpg"
              alt="Blog 3"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                Exploring Shoe Trends in San Carlos City
              </h3>
              <p className="text-gray-500">
                Dive into the latest shoe styles and trends taking over San
                Carlos City's fashion scene. From casual wear to high-end
                sneakers, discover what’s hot and why.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog4.jpg"
              alt="Blog 4"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                Beginner’s Guide to Cleaning Your Sneakers
              </h3>
              <p className="text-gray-500">
                Step-by-step instructions to keep your sneakers fresh and clean
                without damaging them. Learn the best techniques and products to
                preserve their appearance and longevity.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog5.jpg"
              alt="Blog 5"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                The Future of Eco-Friendly Shoe Materials
              </h3>
              <p className="text-gray-500">
                Discover how sustainable materials are reshaping the shoe
                industry for a greener future. Explore the innovations in
                eco-friendly materials that are becoming more common in the
                market.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/blog6.jpg"
              alt="Blog 6"
              className="h-48 object-cover w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                Mastering the Art of Pairing Shoes with Outfits
              </h3>
              <p className="text-gray-500">
                Tips and tricks for creating stylish looks by matching your
                shoes with your wardrobe. From casual outfits to formal attire,
                this guide will help you step up your fashion game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
