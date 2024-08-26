import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Error404 } from "./pages/Error";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Register from "./Register";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {user ? (
          <>
            {" "}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Error404 />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </>
        )}
      </Routes>
    </div>
  );
};
export default App;
