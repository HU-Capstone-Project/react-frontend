import React from "react";

const Home = () => {
  return (
    <div>
      <main className="page lanidng-page">
        <section className="portfolio-block block-intro">
          <div
            className="jumbotron hero-technology"
            style={{ margin: "-104px 0px" }}
          >
            <h1 className="hero-title">KD Trees</h1>
            <p className="hero-subtitle">
              <i>
                “The purpose of software engineering is to control complexity,
                not to create it.”
              </i>{" "}
              <br />
              Jon L. Bentley, Inventor of KD-Trees
            </p>
            <p></p>
            <a className="btn btn-primary" role="button" href="/kdtrees">
              Learn More
            </a>
          </div>
        </section>
        <section className="portfolio-block website">
          <div className="container">
            <div className="heading">
              <h2>Copy Move Forgery Detection</h2>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <div className="card border-0">
                  <div className="card-body">
                    <h6>
                      <a href="#">Picture 1</a>
                    </h6>
                    <p className="text-muted card-text">
                      For this image, alpha = 10, blocksize = 9, tm = 0.001
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/1.PNG"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/2.PNG"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-8">
                <div className="card border-0"></div>
                <p>
                  Forgery has been a major security issue since before computers
                  even existed. In the digital age, however, with editing
                  softwares becoming more and more sophisticated, the act of
                  forgery has become less and less identifiable. From fake news
                  and memes, to mass propaganda and false evidence: it affects
                  both the individual, and the masses.
                </p>
                <p>
                  Copy move forgery is one such form of forgery, where
                  essentially a part of the image is copy pasted into the same
                  image in a way that it looks natural to the human eye. The aim
                  of this tool is to identify and highlight this copy pasted
                  portion to help us distinguish fake from the original. In this
                  ever evolving cyber era, this will prove to be a great tool to
                  ensure honesty and originality of media.
                </p>
                <a
                  className="btn btn-primary btn-lg"
                  role="button"
                  style={{ margin: "10%" }}
                  href="/cmfd"
                >
                  Access the Tool Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="portfolio-block website"
          style={{
            backgroundImage:
              "url(&quot;https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg&quot;) center / contain no-repeat",
          }}
        >
          <div className="container">
            <div className="heading">
              <h2>Pictures with their Forgery Detected Outputs</h2>
            </div>
            <div>
              <p>
                The output pictures of the images that are saved in our library.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h6>
                      <a href="#">Picture 1</a>
                    </h6>
                    <p className="text-muted card-text">
                      For this image, alpha = 10, blocksize = 9, tm = 0.001
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/nature/1.jpeg"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/nature/1a.jpeg"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h6>
                      <a href="#">Picture 2</a>
                    </h6>
                    <p className="text-muted card-text">
                      For this image, alpha = 10, blocksize = 9, tm = 0.001
                      <br />
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/nature/3.jpeg"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="#">
                          <img
                            className="card-img-top scale-on-hover"
                            src="/static/assets/img/nature/3a.jpeg"
                            alt="Card Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <a
                  className="btn btn-primary btn-lg"
                  role="button"
                  style={{ margin: "20px" }}
                  href="/pictures"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-block website">
          <div
            className="container"
            style={{ background: "rgba(248,249,250,0.19)" }}
          >
            <div className="heading">
              <h2>Generative Art Using KD Trees</h2>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>
                <i>
                  "Art is the imposing of a pattern on experience, and our
                  aesthetic enjoyment is recognition of the pattern"{" "}
                </i>
                - Alfred North Whitehead
              </p>
            </div>
            <div className="row" style={{ margin: "30px 0px" }}>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="#">
                    <img
                      className="card-img-top scale-on-hover"
                      src="/static/assets/img/Generative_Art_1.jpeg"
                      alt="Card Image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="#">
                    <img
                      className="card-img-top scale-on-hover"
                      src="/static/assets/img/Generative_Art_2.jpeg"
                      alt="Card Image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="#">
                    <img
                      className="card-img-top scale-on-hover"
                      src="/static/assets/img/Generative_Art_4.jpeg"
                      alt="Card Image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="#"></a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="#"></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <a
                  className="btn btn-primary btn-lg"
                  role="button"
                  style={{ margin: "20px" }}
                  href="/art"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
