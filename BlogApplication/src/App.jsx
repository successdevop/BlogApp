import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  BLOG,
  CONTACT,
  HOME,
  PRIVACY,
  SUBSCRIBE,
} from "./assets/constants/routePaths";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Privacy_Policy_Page from "./pages/Privacy_Policy_Page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={HOME} element={<HomePage />} />
        <Route path={BLOG} element={<BlogPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={CONTACT} element={<ContactPage />} />
        <Route path={SUBSCRIBE} element={<HomePage />} />
        <Route path={PRIVACY} element={<Privacy_Policy_Page/>} />
      </Routes>
      
    </> 
  );
}

export default App;
