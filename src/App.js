import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WelcomePage from './components/Home/WelcomePage';
import HomePage from './components/Home/HomePage';
import ContentLibrary from './components/Contents/ContentLibrary';
import ContentViewer from './components/Contents/ContentViewer';
import AssessmentDashboard from './components/Assessment/AssessmentDashboard';
import Quiz from './components/Assessment/Quiz';
import ForumOverview from './components/Forum/ForumOverview';
import ForumThreads from './components/Forum/ForumThreads';
import ThreadView from './components/Forum/ThreadView';
import PostEditor from './components/Forum/PostEditor';
import DirectorySearch from './components/Directory/DirectorySearch';
import TherapistProfile from './components/Directory/TherapistProfile';
import JournalDashboard from './components/Journal/JournalDashboard';
import JournalEntryEditor from './components/Journal/JournalEntryEditor';
import MoodTracker from './components/Journal/MoodTracker';
import ProfileManagement from './components/User/ProfileManagement';
import LoginPage from './components/User/LoginPage';
import RegistrationPage from './components/User/RegistrationPage';
import { AuthProvider, AuthContext } from './context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <PrivateRoute exact path="/content" component={ContentLibrary} />
            <PrivateRoute path="/content/:id" component={ContentViewer} />
            <PrivateRoute exact path="/assessment" component={AssessmentDashboard} />
            <PrivateRoute path="/assessment/:id" component={Quiz} />
            <PrivateRoute exact path="/forum" component={ForumOverview} />
            <PrivateRoute exact path="/forum/:id" component={ForumThreads} />
            <PrivateRoute path="/forum/:forumId/thread/:threadId" component={ThreadView} />
            <PrivateRoute path="/forum/:forumId/new-thread" component={PostEditor} />
            <PrivateRoute exact path="/directory" component={DirectorySearch} />
            <PrivateRoute path="/directory/:id" component={TherapistProfile} />
            <PrivateRoute exact path="/journal" component={JournalDashboard} />
            <PrivateRoute path="/journal/new-entry" component={JournalEntryEditor} />
            <PrivateRoute path="/journal/mood-tracker" component={MoodTracker} />
            <PrivateRoute path="/profile" component={ProfileManagement} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
