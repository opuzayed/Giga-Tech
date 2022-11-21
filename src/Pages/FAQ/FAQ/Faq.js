import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q.Who should take an Online Course?</Accordion.Header>
        <Accordion.Body>
          Students join our online courses for a variety of reasons and come
          from diverse backgrounds, professions, and age groups. With online
          courses, you can Advance your skill-set or begin a career change. Take
          the next step in your formal education. Ease the transition before
          entering a full-time academic program. Enjoy learning a new topic.
          Whatever the reason, our online courses are a flexible way of learning
          about the art world without disrupting your daily life.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I select a course?</Accordion.Header>
        <Accordion.Body>
          Visit the course catalog to browse our offerings. In addition to
          searching by course duration and availability, you can also search by
          subject to ensure you find a course that reflects your interests.
          Though it is not required, we encourage those who have not studied art
          before to consider taking an art history course first to get a solid
          grounding in the discipline before exploring more specific
          disciplines. Our art history courses are the perfect first step before
          moving on to art market courses.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Are there prerequisites or language requirements?
        </Accordion.Header>
        <Accordion.Body>
          There are no prerequisites. Our courses are open to students of all
          backgrounds who are 18 years of age and older. All courses are
          conducted in English. Video lectures include English subtitles and the
          option to slow-down, pause, or replay lectures for better retention.
          Discussion boards are a critical component of each of our courses;
          therefore, we suggest students have a conversational knowledge of
          English when pursuing a Certificate of Completion. For any of the art
          writing courses, students need to be 100% proficient in written
          English.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Can I take more than one course at a time?
        </Accordion.Header>
        <Accordion.Body>
          If you are new to online learning, we recommend that you begin with
          one course. As our courses are offered frequently throughout the year,
          you can always come back and continue your studies with one or more
          topics.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Faq;
