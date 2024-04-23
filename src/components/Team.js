import React from "react";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Equipo</h2>
          <p>Mira nuestro equipo</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={100}>
              <div className="member-img">
                <img
                  src="assets/img/team/toti.jpg"
                  className="img-fluid"
                  alt="Toti"
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Gorky Palacios Mutis</h4>
                <span>Desarrollador de Software</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src="assets/img/team/dania.jpg"
                  className="img-fluid"
                  alt
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dania Palacios Mutis</h4>
                <span>Marketing y Contabilidad</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={300}>
              <div className="member-img">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={400}>
              <div className="member-img">
                <img
                  src="assets/img/team/team-4.jpg"
                  className="img-fluid"
                  alt
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
