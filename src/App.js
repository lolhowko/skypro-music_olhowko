import "./App.css";
import { AudioPlayer } from "./components/audioPlayer";
import  { NavMenu } from './components/navMenu';
import { SideBar } from "./components/sideBar";
import { TrackList } from "./components/tracklist";


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
