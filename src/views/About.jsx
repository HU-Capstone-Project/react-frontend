import React from "react";

const About = () => {
  return (
    <div>
      <main className="page hire-me-page">
        <section className="portfolio-block hire-me">
          <div className="container">
            <div className="heading">
              <img
                src="/static/assets/img/us.jpeg"
                style={{ height: "200px", margin: "21px" }}
              />
              <h2>Division of Labour</h2>
            </div>
            <div className="row">
              <div className="col-auto col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-star"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Fizza Rubab</h3>
                    <p className="card-text">
                      Algorithm Implementation <br /> Generative Art
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-trophy"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Mohammad Hasan Tariq</h3>
                    <p className="card-text">
                      GUI Server Implementation
                      <br /> Backend management
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-star"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Muhammad Aqib Khan</h3>
                    <p className="card-text">
                      Front-end Handling
                      <br /> Image Handling
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-star"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Ruhama Naeem</h3>
                    <p className="card-text">
                      Algorithm Implementation
                      <br /> Image Handling
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-star"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Sameer Pervez</h3>
                    <p className="card-text">
                      Algorithm Implementation
                      <br /> Presentation Building
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default About;
