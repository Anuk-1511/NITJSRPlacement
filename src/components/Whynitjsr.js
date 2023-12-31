import React from "react";
import { Link } from "react-router-dom";

const Why = (props) => {
  return (
    <div className="whyus-o-container">
      <div className="whyus-container">
        <h1 className="whyus-h1">Why Recruit at NIT Jamshedpur</h1>
        <p>
          <strong>NIT JSR</strong> encourages its students to balance
          their academics and co-curricular activities. This allows for an
          all-round development, as evidenced by the numerous projects
          undertaken and the participation in sports and cultural events. This
          is evident from the wide repertoire of projects that they have done as
          well as their participation in sports and cultural events.
        </p>
        <p>
        There are several reasons why companies choose to recruit at National Institute of Technology (NIT) Jamshedpur:
        </p>
        <h2>The Academic Program</h2>
        <p>The campus offers MCA and M.Tech programs.</p>
        <p>
          The Courses are finely refined and fabricated to meet the needs of the
          versatile industry and latest research areas. The highly qualified,
          intellectual and technically proficient faculty at IIIT-Lucknow fuel
          the learning process in turn igniting the minds.
        </p>
        <p>
          Click <Link to="/courses">here</Link> to see the course structure.
        </p>
        <h2>Admission Criteria</h2>
        <p>
          Admissions to M.C.A program is made throuh NIMCET.
        </p>
        <p>
          B.Tech Entrance at  NIT JAmshedpur is based on JEE Mains score. As the
          students are admitted through the esteemed JEE Mains and represents
          the top 2% of the candidates that appear for the exam nationwide, they
          are handpicked from the garden of knowledge and critical thinking.{" "}
        </p>
        <p>
          Admissions to M.Tech program is made throuh Graduate Aptitude Test
          Engineering (GATE) and Centralized Couselling for M.Tech (CCMT).
        </p>
        <p>
          These students are enriched with both qualitative and quantitative
          skills, thus they make up for the best in class.
        </p>
        <h2>Our Placements and Internships</h2>
        <p>
          The campus has opened doors for various internships which include
          2-months summer internships and 6 months internships for pre-final and
          final year students respectively.
        </p>
        <h2>Faculty</h2>
        <p>
          Our faculty can be compared favorably with the best in the country.
          All regular faculty members of the NIT Jamshedpur, hold Ph.D. and have
          good teaching skills.
        </p>
        <p>
          Our faculty have published various national and international journals
          and conference proceedings and organized several workshops.
        </p>
        <p>
          Our focus on recruiting world-class faculty and strong research
          programs bodes well for the future of the institute, which is fast
          emerging as one of the best in the country and also making its
          presence felt.
        </p>
        <h2>Projects</h2>
        <p>
          Projects are an integral part of the education program. Students are
          required to do group projects/research in many courses that they are
          taught. Students are also provided with an option of the independent
          study which enables them to do research in the field of their
          interest.
        </p>
        <h2>Coders At Work</h2>
        <p>
          Our students take part in many renowned programming competitions like{" "}
          <strong>ACM-ICPC</strong> and <strong>Capture the Flag(CTF)</strong>.
        </p>
        <p>
          And our students are honing their skills on websites like Leetcode,
          GFG , Codestudio, CodeChef etc. in various languages.
        </p>
      </div>
    </div>
  );
};

export default Why;
