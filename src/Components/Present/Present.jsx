import "./Present.scss";
import nag from "../../assets/nag.png";
const Present = () => {
  return (
    <section className="present">
      <div className="container">
        <div className="present__wrapper">
          <div className="present__top">
            <h2 className="present__title">Representative of the company</h2>
          </div>
        <div className="present__img">
          <img src={nag} alt="" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Present;
