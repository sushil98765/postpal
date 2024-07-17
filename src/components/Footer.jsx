


import React from 'react';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscription form submitted!');
    // Additional logic can be added for actual subscription handling
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none">
              <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <span className="mb-3 mb-md-0 text-white">© 2024 Company, Inc</span>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Subscribe to Newsletter</h5>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" required />
                <button className="btn btn-outline-light" type="submit">Subscribe</button>
              </div>
            </form>
            <p className="text-muted">Stay updated with our latest news and updates.</p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <p className="text-white">Connect with us on social media:</p>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="#" className="text-white">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-white">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-white">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <p className="text-white">Contact us:</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-muted">Email:</span>
                {' '}
                <a href="mailto:info@example.com" className="text-white text-decoration-none">sushilpal2002@gmail.com.com</a>
              </li>
              <li>
                <span className="text-muted">Phone:</span>
                {' '}
                <a href="tel:+1234567890" className="text-white text-decoration-none"> +91 9131393809</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center text-muted">&copy; Blogpal EcrioRost Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
