// import { CgScrollV } from "react-icons/cg";
import { FaArrowDown } from "react-icons/fa";
import heroImg from "../../public/hero-img.jpg";
import "./HeroSection.css";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FaPaperPlane } from "react-icons/fa6";
function HeroSection() {
  return (
    <>
      <main className="hero-section">
        <div className="hero-content">
          <div className="content">
            <h1 className="content-heading">Hi,👋🏻 I'm Madhavan</h1>
            <p className="content-subheading">Frontend Developer</p>
            <p className="content-description">
              <RoughNotationGroup show={true}>
                Bringing fresh ideas to solve complex problem and to make life
                much easier. I am a Fresher who is a{" "}
                <RoughNotation type="highlight" color="#ff000044">
                  Frontend Developer{" "}
                </RoughNotation>{" "}
                who is energetic. I love building tools that are{" "}
                <RoughNotation type="highlight" color="#fff00f44">
                  user-friendly
                </RoughNotation>
                , <RoughNotation type="circle">simple</RoughNotation> and
                delightful.
                <br />I was a student at Velammal College of Engineering and
                Technology where I developed my skills of{" "}
                <RoughNotation type="underline">
                  Front-end Web Developement
                </RoughNotation>
                . I also used my skills made some money by doing{" "}
                <RoughNotation type="highlight" color="#0000ff88">
                  freelancing jobs{" "}
                </RoughNotation>
                in{" "}
                <RoughNotation type="highlight" color="#00960055">
                  Upwork
                </RoughNotation>
                . With that I have a exposure of Real project
                <br />I am currently looking for a new role of the{" "}
                <RoughNotation type="box">Frontend Developer</RoughNotation>,
                Hire Me ?
              </RoughNotationGroup>
            </p>
            <button className="contact-btn">
              Contact <FaPaperPlane />
            </button>
          </div>
          <div className="content-image-wrapper">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="media-links">
          <a href="#">
            <PiLinkedinLogoDuotone />
          </a>
          <a href="#">
            <PiGithubLogoDuotone />
          </a>
          <a href="#">
            <SiLeetcode />
          </a>

          {/* <a href="link"></a> */}
        </div>
      </main>
      <div className="scroll">
        Scroll Down <br />
        <FaArrowDown className="scroll-icon" />
      </div>
    </>
  );
}
export default HeroSection;
