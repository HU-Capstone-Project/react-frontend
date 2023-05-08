import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Section = ({ title, content, inView, bg }) => {
  const slideIn = useSpring({
    from: { transform: "translate3d(-50%, 0, 0)", opacity: 0 },
    to: {
      transform: inView ? "translate3d(0%, 0, 0)" : "translate3d(-50%, 0, 0)",
      opacity: inView ? 1 : 0,
    },
  });

  return (
    <animated.div
      style={{
        slideIn,
        backgroundColor: bg,
        padding: "3rem",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ fontSize: "2.5rem", color: "#36B9CC", textAlign: "center", fontWeight: "600" }}>{title}</h3>
      <p style={{ fontSize: "1.5rem", color: "#061A40" }}>{content}</p>
    </animated.div>
  );
};

function Home() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Container>
      <h2
        style={{
          color: "#061A40",
          marginBottom: "2rem",
          textAlign: "center",
          paddingTop: "2rem",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Welcome to the Road Health Monitoring Dashboard
      </h2>
      <Row className="mb-5">
        <Col ref={ref}>
          <Section
            inView={inView}
            title="Section 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, eros sit amet tincidunt sagittis, nisl urna viverra enim, in bibendum ipsum turpis at libero."
            bg="#F5B0CB"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Section
            inView={inView}
            title="Section 2"
            content="Nulla facilisi. Vestibulum at metus et purus semper cursus. Vivamus sit amet consequat odio. Vivamus vehicula elit in risus fringilla, quis dapibus libero pellentesque."
            bg="#FCF7F8"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Section
            inView={inView}
            title="Section 3"
            content="Fusce finibus malesuada nisl, ac tristique augue cursus et. Phasellus nec urna mollis, imperdiet ex ac, aliquet felis."
            bg="#F5B0CB"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Section
            inView={inView}
            title="Section 4"
            content="Praesent at dapibus lectus. Aenean vel odio vitae libero lacinia tristique. Pellentesque et venenatis sapien, ut auctor tellus."
            bg="#FCF7F8"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
