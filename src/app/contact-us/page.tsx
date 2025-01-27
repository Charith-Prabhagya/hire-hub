import Navigation from "@/components/Navigation";

const ContactUs = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            We'd love to hear from you!
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions? Feel free to reach out to us and we’ll get back to
            you as soon as possible.
          </p>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                rows={4}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
