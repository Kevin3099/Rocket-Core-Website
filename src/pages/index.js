import React from "react";

// Custom Components
import Layout from "../components/layout";

// Custom styles
import "../styles/pages/index.scss";

const Index = () => (
	/* We can now use the custom "Layout" component like a normal HTML element.
	   title="Home" is an example of a "prop" (property), which is data we can pass
	   to the component for it to use when its rendered. In this case, the Layout
	   component can use the "title" prop to dynamically adjust the <head> of the page
	   whenever we change pages.
	*/
	<Layout title="Home">
		<h1>Hello, world!</h1>
	</Layout>
);

export default Index;
