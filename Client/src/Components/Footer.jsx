
const Footer = () => {
  return (
    <>
    <footer className="bg-green-700 text-white py-8">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <p className="text-sm">
        We are dedicated to providing quality counseling services to students, executives, and administrators to ensure their personal and professional growth.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul>
        <li className="mb-2">
          <a href="/" className="hover:text-green-300">Home</a>
        </li>
        <li className="mb-2">
          <a href="/about" className="hover:text-green-300">About</a>
        </li>
        <li className="mb-2">
          <a href="/services" className="hover:text-green-300">Services</a>
        </li>
        <li className="mb-2">
          <a href="/contact" className="hover:text-green-300">Contact</a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <p className="text-sm">
        Email: <a href="mailto:info@counseling.com" className="hover:text-green-300">info@counseling.com</a>
      </p>
      <p className="text-sm">
        Phone: <a href="tel:+1234567890" className="hover:text-green-300">+123 456 7890</a>
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-green-300"><i className="fab fa-facebook"></i> Facebook</a>
        <a href="#" className="hover:text-green-300"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="#" className="hover:text-green-300"><i className="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>
  </div>

  <div className="border-t border-green-600 mt-8 pt-4">
    <p className="text-center text-sm">© 2025 Counseling System. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer