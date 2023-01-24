import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Meta from "../components/UI/Meta";

export default function Home() {
	return (
		<>
			<Meta title="home" desc="this is descrtion" />
			<Fragment>
				<Hero />
				<Services />
				<About />
				<Portfolio />
				<Testimonial />
				<Contact />
			</Fragment>
		</>
	);
}
