<!-- 1:  npm install react-router-dom -->
<!-- 2:
 import { BrowserRouter } from 'react-router-dom';
   Got To main.jsx -> 
   <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  -->
<!-- 3:
   import { Routes, Route } from 'react-router-dom'

    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />          
        <Route path="about" element={<About />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  
  -->
<!-- 4: 
 import { Outlet } from 'react-router-dom'
     Go to RootLayout -> 
      <Header/>
        <Outlet/>
      <Footer/>
    
    -->
