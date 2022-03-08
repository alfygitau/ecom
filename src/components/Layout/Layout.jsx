import React from "react";
import Announcement from "../Announcement/Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
