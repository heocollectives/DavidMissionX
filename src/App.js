import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Other Pages
import Home from "./Home/Home";
import teacherProject from "./teacherProjects/teacherProject";
import TeacherSide from "./ProjectBuilder1 - Teacher/TeacherSide";
import studentProfiles from "./ProjectBuilder1 - Teacher/StudentProfiles/studentProfiles";
import helpRequest from "./ProjectBuilder1 - Teacher/HelpRequest/helpRequest";
import ProjectSubmissions from "./ProjectBuilder1 - Teacher/ProjectSubmissions/ProjectSubmissions";
import TeacherBuilder from "./TeacherBuilder/TeacherBuilder";
import databaseVideo from './TeacherBuilder/databasevideo';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TeacherSide" component={TeacherSide} />
          <Route path="/StudentProfiles" component={studentProfiles} />
          <Route path="/HelpRequest" component={helpRequest} />
          <Route path="/ProjectSubmissions" component={ProjectSubmissions} />
          <Route path="/teacherLibrary" component={teacherProject} />
          <Route path="/teacherBuilder" component={TeacherBuilder} />
          <Route path="/databaseVideo" component={databaseVideo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
