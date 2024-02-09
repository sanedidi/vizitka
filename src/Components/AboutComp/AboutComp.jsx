import "./AboutComp.scss";
import nag from "../../assets/nag.png";
import soft from "../../assets/mn-soft.png";
import solutions from "../../assets/mn-solution.png";
const AboutComp = () => {
  return (
    <section className="comps">
      <div className="container">
        <div className="comps__wrapper">
          <div className="comps__comp nag">
            <div className="comps__logo">
              <a target="_blank" href="https://shop.nag.ru/about-company">
                <img src={nag} alt="" />
              </a>
            </div>
            <div  className="comps__desc">
              <a target="_blank" href="https://shop.nag.ru/about-company">
                NAG - freedom of choice Our catalog contains more than 1,000
                brands and more than 45,000 product items. This allows us to
                comprehensively complete even the most complex
                telecommunications projects. The NAG company carries out retail
                and wholesale sales of software and hardware systems (SHC),
                including any of their components, telecommunications and
                radio-electronic equipment for deployment, modernization and
                maintenance of IT infrastructure.
              </a>
            </div>
          </div>
          <div className="comps__comp soft">
            <div className="comps__logo">
              <a target="_blank" href="https://mn-soft.uz/">
                <img src={soft} alt="" />
              </a>
            </div>
            <div  className="comps__desc">
              <a target="_blank" href="https://mn-soft.uz/about-us/">
                MN Soft is an Uzbek company, a developer of innovative systems
                in in the field of speech synthesis and recognition
                technologies, audio and video information, facial recognition,
                voice and multimodal biometrics. Only a few have achieved
                success in this area. companies in the world.
              </a>
            </div>
          </div>
          <div className="comps__comp solutions">
            <div className="comps__logo">
              <a target="_blank" href="https://mn-solutions.uz/">
                <img src={solutions} alt="" />
              </a>
            </div>
            <div  className="comps__desc">
              <a target="_blank" href="https://mn-solutions.uz/about.html">
                LLC "MN Solutions" dates back to 2018 and throughout the entire
                time, dynamically developing, bases its activities based on the
                use of the latest technologies and proven solutions in design,
                construction and operation means of communication. We provide a
                full production cycle for “arrangement” of your production -
                from design, construction, installation, operation and
                adjustment prior to commissioning of the facility "Full
                construction".
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
