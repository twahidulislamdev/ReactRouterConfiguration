// STEP 1: INSTALLATION
// --------------------
// Run in terminal:
// npm install react-router-dom

// STEP 2: WRAPPING APP WITH BROWSERROUTER
// ----------------------------------------
// File: main.jsx or index.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// STEP 3: DEFINING ROUTES
// -----------------------
// File: App.jsx

import { Routes, Route } from 'react-router-dom'

// Import your page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* Basic Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Route with parameter */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      
      {/* 404 Route - Must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App

// STEP 4: CREATING NAVIGATION LINKS
// ---------------------------------
// File: components/Navbar.jsx

import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
    </nav>
  )
}
export default Navbar

// STEP 5: USING ROUTE PARAMETERS
// ------------------------------
// File: pages/ProductDetail.jsx

import { useParams } from 'react-router-dom'
// Get the :id parameter from URL
const { id } = useParams()  
function ProductDetail() {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product with ID: {id}</p>
    </div>
  )
}
export default ProductDetail

// STEP 6: PROGRAMMATIC NAVIGATION
// -------------------------------
// File: pages/Home.jsx

import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about')
  }
  const goBack = () => {
    navigate(-1) // Go to previous page
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}
export default Home


// STEP 7: ACTIVE NAVIGATION LINKS
// -------------------------------
// File: components/Header.jsx

import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <nav>
        <NavLink 
          to="/"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/about"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          About
        </NavLink>
        
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
export default Header


// SETUP COMPLETE! ✅
// Your React Router is now configured and ready to use
