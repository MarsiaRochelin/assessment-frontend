import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error">
      There was an error: {error}
      <br></br>Please refresh the page or contact support
    </div>
  );
};

export default Error;
