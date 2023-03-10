import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
	return (
		<section className={`${classes.hero}`}>
			<Container>
				<Row>
					{/* ========== hero content ============= */}
					<Col lg="6" md="6">
						<div className={`${classes.hero__content}`}>
							<SectionSubtitle subtitle="Hello" />
							<h2 className="mt-3 mb-3">I&apos;m Rakibul Anas</h2>
							<h5 className="mb-4">Mern-Stack Developer</h5>
							<p>
								I am a quick learner and a dedicated programmer with substantial
								web and software development expertise.
							</p>
							<div className="mt-5">
								<button className="primary__btn">
									<a
										href="http://https://www.fiverr.com/rakibulanas777?up_rollout=true"
										target="_blank"
										rel="noopener noreferrer"
									>
										Hire me
									</a>
								</button>

								<button className="secondary__btn">
									<Link href="#">Download CV</Link>
								</button>
							</div>
						</div>
					</Col>

					{/* ========== hero img ============= */}
					<Col lg="6" md="6">
						<div className={`${classes.hero__img} text-end`}>
							<Image alt="hero-image" src={heroImg} width="400" height="400" />

							<div className={`${classes.hero__skills}`}>
								<h6>Skills</h6>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
								<span>
									<i className="ri-bar-chart-line"></i>
								</span>
							</div>

							<div
								className={`${classes.hero__experience} d-flex align-items-center gap-3`}
							>
								<span>
									<i className="ri-lightbulb-flash-line"></i>
								</span>
								<div className="bg-transparent">
									<h6>Experience</h6>
									<h6 className="mb-0">2 Years</h6>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
