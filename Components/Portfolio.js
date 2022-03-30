import portfolio from "../Data/Portfolio";

const Portfolio = () => {
  const { filters, projects } = portfolio;

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              {filters.map((filter) => (
                <li data-filter={`.${filter}`} key={filter}>
                  {filter.split("-")[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {projects.map((project, i) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item ${project.filter}`}
              key={i}
            >
              <div className="portfolio-wrap">
                <img
                  src={`/Gallery/Projects/${project.img}/main.webp`}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    {project.name}
                  </span>
                  <div className="portfolio-links">
                    <a
                      href={`/Gallery/Projects/${project.img}/main.webp`}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={project.name}
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href={`/detail/${i}`}
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
