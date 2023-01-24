import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
	return (
		<section id="contact" className={`${classes.contact}`}>
			<Container>
				<Row>
					<Col lg="6" md="6">
						<SectionSubtitle subtitle="Contact me" />
						<h3 className="mt-4 mb-4">Contact with me</h3>
						<p>
							“Success is peace of mind, which is a direct result of
							self-satisfaction in knowing you made the effort to become the
							best of which you are capable.” —John Wooden
						</p>

						<ul className={`${classes.contact__info__list}`}>
							<li className={`${classes.info__item}`}>
								<span>
									<i className="ri-map-pin-line"></i>
								</span>
								<p>Tangail - Bangladesh</p>
							</li>

							<a
								href="mailto:rakibulanas777@gmail.com"
								style={{ textDecoration: "none" }}
							>
								<li className={`${classes.info__item}`}>
									<span>
										<i className="ri-mail-line"></i>
									</span>
									<p>rakibulanas777@gmail.com</p>
								</li>
							</a>
							<a href="tel:+01856844803" style={{ textDecoration: "none" }}>
								<li className={`${classes.info__item}`}>
									<span>
										<i className="ri-phone-line"></i>
									</span>
									<p>+8801856844803</p>
								</li>
							</a>
						</ul>

						<div className={`${classes.social__links}`}>
							<Link href="#">
								<i className="ri-youtube-line"></i>
							</Link>
							<Link href="#">
								<i className="ri-github-line"></i>
							</Link>
							<Link href="#">
								<i className="ri-facebook-line"></i>
							</Link>
							<Link href="#">
								<i className="ri-linkedin-line"></i>
							</Link>
							<Link href="#">
								<i className="ri-instagram-line"></i>
							</Link>
						</div>
					</Col>

					<Col lg="6" md="6">
						<Form />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
