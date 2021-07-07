import SingleDay from "./singleDay/index";
import Forecast from "./forecast/index";

const DisplayBody = () => {
  return (
    <section className="display-body-container">
      <SingleDay />
      <Forecast />
    </section>
  );
};

export default DisplayBody;
