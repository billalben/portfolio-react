import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./skillItem";
import { educationTimeline, experienceTimeline, skills } from "../../constants";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {educationTimeline.map((timeline, index) => (
            <TimelineItem key={index} {...timeline} />
          ))}
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experienceTimeline.map((timeline, index) => (
            <TimelineItem key={index} {...timeline} />
          ))}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
