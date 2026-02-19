/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  line-height: 1.6;
  color: #333;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  display: inline;
  margin-left: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-cta a {
  color: white;
  text-decoration: none;
}

/* Hero */
.hero {
  height: 90vh;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  margin-bottom: 1.5rem;
}

/* Learning Ways */
.learning-ways {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
}

.learning-ways h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #555;
}

.ways-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.way-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.way-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.way-card h3 {
  margin-bottom: 0.6rem;
  color: #222;
}

.way-card p {
  color: #555;
  font-size: 0.95rem;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.6);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  position: relative;
  text-align: center;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

/* About */
.about {
  padding: 3rem 2rem;
  text-align: center;
}

/* Contact */
.contact {
  padding: 3rem 2rem;
  text-align: center;
}

.contact form input,
.contact form textarea {
  width: 60%;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact button {
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links li {
    display: block;
    margin: 0.5rem 0;
  }

  .contact form input,
  .contact form textarea {
    width: 90%;
  }
    }
