import "./portfolio.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="portfolio section">
      <h2 className="skills-header text-center mb-5">Portfolio</h2>
      <div className="container gap-4 d-flex flex-wrap justify-content-between">
        <PortfolioCard img="img/projects/1.jpg" />
        <PortfolioCard img="img/projects/2.jpg" />
        <PortfolioCard img="img/projects/3.png" />
        <PortfolioCard img="img/projects/4.png" />
        <PortfolioCard img="img/projects/5.png" />
        <PortfolioCard img="img/projects/6.png" />
        <PortfolioCard img="img/projects/7.jpg" />
        <PortfolioCard img="img/projects/6.png" />
      </div>
    </div>
  );
}
