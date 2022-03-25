import "./protfolioCard.css";

export default function PortfolioCard(props) {
  return (
    <div className="card portfolio-card" style={{ width: "18rem" }}>
      <img
        loading="lazy"
        src={props.img}
        className="card-img-top"
        alt="project"
      />
    </div>
  );
}
