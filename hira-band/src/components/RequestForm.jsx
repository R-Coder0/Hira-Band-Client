import { useState } from 'react';
import emailjs from 'emailjs-com';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
    .send(
      'service_0a7ufx6', // Replace with your EmailJS Service ID
      'template_po5hlml', // Replace with your EmailJS Template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_message: formData.message,
      },
      '2zeRNlW7w8EuZlHUQ' // Replace with your EmailJS User ID
    )
    .then(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    })
    .catch(() => {
      setIsSending(false);
      setError('An error occurred. Please try again.');
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto flex overflow-hidden">
      {/* Left Image Section */}
      <div className="w-1/2 relative"
      style={{
        
      }}>
        <img
          src="https://via.placeholder.com/400x400" // Replace with actual image
          alt="Request Booking"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
          Book Your Event with Us
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Request Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 px-6 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300 disabled:opacity-50"
          >
            {isSending ? 'Sending...' : 'Send Request'}
          </button>
        </form>

        {isSent && (
          <p className="mt-4 text-green-600 text-center">Your request has been sent successfully!</p>
        )}
        {error && (
          <p className="mt-4 text-red-600 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
