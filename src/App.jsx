import { useState, useEffect } from 'react'
import './App.css'
import { useScrollAnimation } from './hooks/useScrollAnimation'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import required Swiper modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import heroImage from './assets/products/12.jpg'
import nikeAirMax from './assets/products/02.jpg'
import nikeZoom from './assets/products/03.jpg'
import nikeJordan from './assets/products/13.jpg'
import running from './assets/products/05.jpg'
import basketball from './assets/products/06.jpg'
import lifestyle from './assets/products/07.jpg'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-logo">
          <span className="logo-text">KICK</span>
          <span className="logo-text-highlight">STORE</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link">
            <span>Home</span>
          </a>
          <a href="#featured" className="nav-link">
            <span>Featured</span>
          </a>
          <a href="#collection" className="nav-link">
            <span>Collection</span>
          </a>
          <a href="#contact" className="nav-link">
            <span>Contact</span>
        </a>
      </div>
        <div className="nav-actions">
          <button className="search-btn" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <button className="cart-btn" aria-label="Shopping Cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </button>
          <button className="menu-btn" aria-label="Menu">
            <i className="fas fa-bars"></i>
        </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1>
              Step Into <span className="highlight">Greatness</span>
            </h1>
            <p className="animate-on-scroll delay-1">
              Discover our premium collection of Nike footwear. From iconic classics to the latest innovations, 
              find your perfect pair.
            </p>
            <div className="hero-buttons animate-on-scroll delay-2">
              <button className="cta-button">
                Shop Now
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="cta-button-secondary">
                View Collection
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          
          <div className="hero-slider animate-on-scroll delay-2">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 350,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="hero-swiper"
            >
              <SwiperSlide>
                <img src={heroImage} alt="Nike Shoe" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nikeAirMax} alt="Nike Air Max" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nikeZoom} alt="Nike Zoom" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nikeJordan} alt="Nike Jordan" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={running} alt="Running Shoes" />
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="hero-stats animate-on-scroll delay-3">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured" id="featured">
        <div className="section-header animate-on-scroll">
          <span className="section-subtitle">Our Selection</span>
          <h2>Featured Products</h2>
          <p>Discover our most popular picks</p>
        </div>
        <div className="products-grid">
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={nikeAirMax} alt="Nike Air Max" />
            </div>
            <div className="product-info">
              <h3>Nike Air Max 90</h3>
              <div className="product-details">
                <p className="price">₹ 9,995</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={nikeZoom} alt="Nike Blazer" />
            </div>
            <div className="product-info">
              <h3>Nike Blazer Phantom Low</h3>
              <div className="product-details">
                <p className="price">₹ 10,295</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={nikeJordan} alt="Nike Court Vision" />
            </div>
            <div className="product-info">
              <h3>Nike Court Vision Low Next Nature</h3>
              <div className="product-details">
                <p className="price">₹ 7,095</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={running} alt="Nike Dunk Low" />
            </div>
            <div className="product-info">
              <h3>Nike Dunk Low</h3>
              <div className="product-details">
                <p className="price">₹ 11,895</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={heroImage} alt="Nike Air Force 1" />
            </div>
            <div className="product-info">
              <h3>Nike Air Force 1 '07</h3>
              <div className="product-details">
                <p className="price">₹ 8,195</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={basketball} alt="Nike LeBron" />
            </div>
            <div className="product-info">
              <h3>Nike LeBron Witness 7</h3>
              <div className="product-details">
                <p className="price">₹ 9,295</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={lifestyle} alt="Nike Revolution" />
            </div>
            <div className="product-info">
              <h3>Nike Revolution 6</h3>
              <div className="product-details">
                <p className="price">₹ 3,695</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <div className="product-image">
              <img src={nikeAirMax} alt="Nike Pegasus" />
            </div>
            <div className="product-info">
              <h3>Nike Air Zoom Pegasus 39</h3>
              <div className="product-details">
                <p className="price">₹ 10,795</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="rating-count">Stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="categories" id="collection">
        <div className="section-header animate-on-scroll">
          <span className="section-subtitle">Categories</span>
          <h2>Shop by Category</h2>
          <p>Find your perfect fit</p>
        </div>
        <div className="categories-grid">
          <div className="category animate-on-scroll">
            <div className="category-image">
              <img src={running} alt="Running Shoes" />
            </div>
            <div className="category-content">
              <h3>Running</h3>
              <p>Built for speed and comfort</p>
              <button className="category-btn">
                Shop Running
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="category animate-on-scroll delay-1">
            <div className="category-image">
              <img src={basketball} alt="Basketball Shoes" />
            </div>
            <div className="category-content">
              <h3>Basketball</h3>
              <p>Dominate the court</p>
              <button className="category-btn">
                Shop Basketball
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="category animate-on-scroll delay-2">
            <div className="category-image">
              <img src={lifestyle} alt="Lifestyle Shoes" />
            </div>
            <div className="category-content">
              <h3>Lifestyle</h3>
              <p>Casual comfort meets style</p>
              <button className="category-btn">
                Shop Lifestyle
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content animate-on-scroll">
          <span className="section-subtitle">Subscribe</span>
          <h2>Stay in the Loop</h2>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="subscribe-form">
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <button className="subscribe-btn">
              <span>Subscribe</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="newsletter-features">
            <div className="feature">
              <i className="fas fa-lock"></i>
              <span>Secure</span>
            </div>
            <div className="feature">
              <i className="fas fa-paper-plane"></i>
              <span>Weekly</span>
            </div>
            <div className="feature">
              <i className="fas fa-ban"></i>
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About KickStore</h4>
            <p>Your premier destination for authentic Nike footwear. We bring you the latest and greatest in athletic and lifestyle shoes.</p>
            <div className="footer-features">
              <div className="footer-feature">
                <i className="fas fa-truck"></i>
                <span>Free Shipping</span>
              </div>
              <div className="footer-feature">
                <i className="fas fa-undo"></i>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#featured"><i className="fas fa-chevron-right"></i>Featured</a></li>
              <li><a href="#collection"><i className="fas fa-chevron-right"></i>Collection</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i>About Us</a></li>
              <li><a href="#contact"><i className="fas fa-chevron-right"></i>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> info@kickstore.com</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Sneaker Street, NY</p>
            </div>
            <div className="contact-hours">
              <h5>Opening Hours</h5>
              <p>Mon - Fri: 9:00 AM - 10:00 PM</p>
              <p>Sat - Sun: 10:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="payment-methods">
              <h5>We Accept</h5>
              <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 KickStore. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Info</a>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
