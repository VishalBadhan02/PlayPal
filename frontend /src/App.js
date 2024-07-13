
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import OtpVerification from './components/otpVerification';
import { Toaster } from 'react-hot-toast';
import Score_card from './Pages/user/score_card';
import AuthLayout from './layouts/authLayout';
import AppLayout from './layouts/appLayout';
import Pagelayout from './layouts/PageLayout';
import Profile from './Pages/user/profile';
import SingleCourse from './components/college/singlecourse';
import PagesHeader from './layouts/pagelayouts';
import FriendList from './Pages/user/friendlist';
import TeamControl from './Pages/user/teamcontrol';
import TournamentControl from './Pages/tournament_control';
import TeamMangement from './Pages/team_managemet';
import FindFriend from './Pages/user/findfriends';
import Feedback from './Pages/footorInfo/feedback';
import About from './Pages/footorInfo/about';
import Forgot from './components/frogot';
import Product from './components/shopping/product';
import Shop from './components/shopping/shop';
import Cricket from './Pages/teamList/cricket';
import Tournament_control from './components/tournamnet_features/tournament_control';
import ChatBox from './Pages/user/chatbox';
import Friends from './components/search/friends';
import JoinTeam from './components/JoinTeam/joinTeam';
import Matches from './Pages/matches';




function App() {
  return (
    <>
      <div className='container-fluid p-0 position-relative '>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/otpverify/:token" element={<OtpVerification />} />
              <Route path="/otpverify" element={<OtpVerification />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>


            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/search" element={<Friends />} /> */}
            </Route>

            <Route element={<PagesHeader />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/scorecard" element={<Score_card />} />
              <Route path="/singlepage/:id" element={<SingleCourse />} />
              <Route path="/friendlist" element={<FriendList />} />
              <Route path="/teamcontrol" element={<TeamControl />} />
              <Route path="/tournamnet-control/:id" element={<TournamentControl />} />
              <Route path="/team-management" element={<TeamMangement />} />
              <Route path="/find-friend" element={<FindFriend />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about" element={<About />} />
              <Route path="/shopping" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/tournament_control" element={<Tournament_control />} />
              <Route path="/cricket/:game" element={<Cricket />} />
              <Route path="/chatbox/:value.request._id" element={<ChatBox />} />
              <Route path="/search" element={<Friends />} />
              <Route path="/join-team" element={<JoinTeam />} />
            </Route>

            <Route element={<Pagelayout />}>
              <Route path="/home" element={<Home />} />
            </Route>

          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;





