import "./App.css";
import Experience from "./components/Experience";
import Intro from "./components/Intro";

function App() {
  return (
    <div>
      <Intro />

      <section>
        <h2>Experience</h2>

        <Experience
          role="Full Stack Developer"
          company="Coronasafe"
          type="Part Time"
          duration="2 months"
          descriptions={[
            "Started out as a 6 months fellowship by AICTE and Pupilfirst, I was selected as one of the 24 among 50K nationwide particapts for building open-source software for disaster management. Initial 3 months was focused on training and in the later, worked on 2 open-source projects coronasafe/arike (Pallitive Care Management System) and coronasafe/life(Crowd-Sourced Emergency Services Directory).",
            "Started out as a 6 months fellowship by AICTE and Pupilfirst, I was selected as one of the 24 among 50K nationwide particapts for building open-source software for disaster management. Initial 3 months was focused on training and in the later, worked on 2 open-source projects coronasafe/arike (Pallitive Care Management System) and coronasafe/life(Crowd-Sourced Emergency Services Directory).",
          ]}
          skills={["reactjs", "expressjs", "nodejs", "mongodb"]}
        />

        <Experience
          role="Mentor"
          company="FacePrep"
          type="Part Time"
          duration="2 months"
          descriptions={[
            "Started out as a 6 months fellowship by AICTE and Pupilfirst, I was selected as one of the 24 among 50K nationwide particapts for building open-source software for disaster management. Initial 3 months was focused on training and in the later, worked on 2 open-source projects coronasafe/arike (Pallitive Care Management System) and coronasafe/life(Crowd-Sourced Emergency Services Directory).",
            "Started out as a 6 months fellowship by AICTE and Pupilfirst, I was selected as one of the 24 among 50K nationwide particapts for building open-source software for disaster management. Initial 3 months was focused on training and in the later, worked on 2 open-source projects coronasafe/arike (Pallitive Care Management System) and coronasafe/life(Crowd-Sourced Emergency Services Directory).",
          ]}
          skills={["reactjs", "expressjs", "nodejs", "mongodb"]}
        />
      </section>
    </div>
  );
}

export default App;
