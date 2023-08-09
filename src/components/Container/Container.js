import "./Container.css";

const Container = ({ center, children }) => {
  let classNames = ["Container"];

  if (center) {
    classNames.push("Container--center");
  }

  const backgroundColor = () => {
    if (children[1].type.name === "Loading") {
      return (
        <div
          className={classNames.join(" ")}
          style={{ backgroundColor: "aliceblue" }}
        >
          {" "}
          {children}
        </div>
      );
    } else if (children[1].type.name === "Error") {
      return (
        <div
          className={classNames.join(" ")}
          style={{ backgroundColor: "coral" }}
        >
          {" "}
          {children}
        </div>
      );
    } else {
      return (
        <div
          className={classNames.join(" ")}
          style={{ backgroundColor: "white" }}
        >
          {" "}
          {children}
        </div>
      );
    }
  };

  return <div>{backgroundColor()}</div>;
};

export default Container;
