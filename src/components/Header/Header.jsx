import "./header.css";
export default function Header() {
  return (
    <div>
      <header className="cover">
        <div className="cover-title">
          <h1>Ahmed Edrees</h1>
          <p>Full-Stack Engineer</p>
        </div>
        <img
          src="img/cover.jpg"
          className="cover-image d-block h-100 w-100"
          alt="..."
        />
      </header>
    </div>
  );
}
