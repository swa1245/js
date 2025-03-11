import React from "react";
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to={"/h"}>Home</Link>
        <Link to={"/h/Blogs"}>Blogs</Link>
        <Link to={"/h/contact"}>Contact</Link>

        <Routes>
          <Route path="/h" element={<Home />}>
            <Route path="/h/contact" element={<Contact />}/>
            <Route path="/h/Blogs" element={<Blogs />} />
           
            {/* </Route> */}
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
