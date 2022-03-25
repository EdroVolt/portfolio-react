import Progress from "../Progress/Progress";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="container">
        <h2 className="skills-header text-center">Skills</h2>
        <p className="text-center px-5 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          laudantium hic cumque aperiam quae illo incidunt rerum culpa dolores
          nisi quos repellendus vero iusto, odio quo non nam aliquid eius.
        </p>
        <div className="row">
          <h2 className="main-question col-4">My tools?</h2>

          <div className="col-8">
            <Progress name={"HTML"} percentageWidth={"90"} />
            <Progress name={"CSS"} percentageWidth={"90"} />
            <Progress name={"JavaScript"} percentageWidth={"90"} />
            <Progress name={"React"} percentageWidth={"75"} />
            <Progress name={"Node"} percentageWidth={"75"} />
          </div>
        </div>
      </div>
    </div>
  );
}
