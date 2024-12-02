import heroImage from "../assets/images/home.jpg";
import webImage from "../assets/images/web.jpg";
import Graphic from "../assets/images/graphil.jpg";
import digital from "../assets/images/digital.jpg";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `url(${heroImage}) no-repeat center center/cover`,
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div className="container">
          <h1>Welcome to FreelancerHub</h1>
          <p>Your one-stop platform to connect with the best freelancers.</p>
          <a href="#projects" className="btn btn-primary btn-lg">
            Explore Projects
          </a>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="mt-3">
            FreelancerHub is a platform designed to connect talented freelancers
            with businesses around the world. Whether you're looking for your
            next gig or need experts for your projects, we’ve got you covered.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Featured Projects</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src={webImage} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Build responsive and dynamic websites with cutting-edge
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={Graphic} className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Graphic Design</h5>
                  <p className="card-text">
                    Create stunning visuals and designs for marketing and
                    branding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={digital} className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Digital Marketing</h5>
                  <p className="card-text">
                    Optimize your online presence and drive traffic with expert
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
