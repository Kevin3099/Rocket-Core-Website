import React from "react";
import { Helmet } from "react-helmet";

// Custom Components
import Navbar from "./navbar";
import Footer from "./footer";

// Custom styles
import "../styles/components/layout.scss";

const Layout = ({ title, children }) => {
	return (
		<>
			<Helmet>
				<title>{title} : RocketCore</title>
			</Helmet>
			<div className="site">
				<Navbar />
				<div className="content">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
