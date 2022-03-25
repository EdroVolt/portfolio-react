export default function Progress(props) {
  return (
    <>
      {props.name}
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${props.percentageWidth}%` }}
          aria-valuenow={props.percentageWidth}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
}
