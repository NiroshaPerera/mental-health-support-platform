import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './components/Home/HomePage';
import ContentLibrary from './components/Contents/ContentLibrary';
import ContentViewer from './components/Contents/ContentViewer';
import AssessmentDashboard from './components/Assessment/AssessmentDashboard';
import Quiz from './components/Assessment/Quiz';
import ForumOverview from './components/Forum/ForumOverview';
import DirectorySearch from './components/Directory/DirectorySearch';
import JournalDashboard from './components/Journal/JournalDashboard';
import ProfileManagement from './components/User/ProfileManagement';
import TestComponent from './components/TestComponent';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/content" component={ContentLibrary} />
          <Route path="/content/:id" component={ContentViewer} />
          <Route exact path="/assessment" component={AssessmentDashboard} />
          <Route path="/assessment/:id" component={Quiz} />
          <Route path="/forum" component={ForumOverview} />
          <Route path="/directory" component={DirectorySearch} />
          <Route path="/journal" component={JournalDashboard} />
          <Route path="/profile" component={ProfileManagement} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
