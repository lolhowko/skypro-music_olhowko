
import { AudioPlayer } from "./components/audioPlayer/audioPlayer";
import  { NavMenu } from './components/navMenu/navMenu';
import { SideBar } from "./components/sideBar/sideBar";
import { TrackList } from "./components/tracklist/tracklist";
import * as S from './app.styles'
import { GlobalStyle } from "./global.styles";


function App() {
    return (
      <>
      <GlobalStyle />
      <div className="App">
        <S.Wrapper>
          <S.Container>
            <S.Main>

            <NavMenu />
            <TrackList />
            <SideBar /> 
            <AudioPlayer />

            </S.Main>
            
            <footer className="footer"></footer>
          </S.Container>
        </S.Wrapper>
  
      </div>
      </>
    );
  }
  

export default App;
