import "./App.css";
import { AudioPlayer } from "./components/audioPlayer/audioPlayer";
import  { NavMenu } from './components/navMenu/navMenu';
import { SideBar } from "./components/sideBar/sideBar";
import { TrackList } from "./components/tracklist/tracklist";


function App() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <main className="main">

            <NavMenu />
            <TrackList />
            <SideBar /> 
            <AudioPlayer />

            </main>
            
            <footer className="footer"></footer>
          </div>
        </div>
  
      </div>
  
    );
  }
  

export default App;
