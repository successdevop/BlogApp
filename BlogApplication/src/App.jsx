import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  BLOG,
  CONTACT,
  HOME,
  PRIVACY,
} from "./assets/constants/routePaths";

import Navbar from "./components/Navbar";

import {
  AboutPage,
  BlogPage,
  ContactPage,
  HomePage,
  Privacy_Policy_Page,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={HOME} element={<HomePage />} />
        <Route path={BLOG} element={<BlogPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={CONTACT} element={<ContactPage />} />
        <Route path={PRIVACY} element={<Privacy_Policy_Page />} />
      </Routes>
    </>
  );
}

export default App;
