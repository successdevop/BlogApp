import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  BLOG,
  CONTACT,
  HOME,
  SUBSCRIBE,
} from "./assets/constants/routePaths";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={BLOG} element={<BlogPage />} />
      <Route path={ABOUT} element={<AboutPage />} />
      <Route path={CONTACT} element={<ContactPage />} />
      <Route path={SUBSCRIBE} element={<HomePage />} />
    </Routes>
  );
}

export default App;
