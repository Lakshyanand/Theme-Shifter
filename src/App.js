import { useContext } from 'react';
import './App.css';
import Header from './Components/Header';
import ThemeProvider from './Components/ThemeProvider';
import Toggle from './Components/Toogle';
import ThemeContext from './Components/ThemeContext';

function App() {
  const context = useContext(ThemeContext);
  return (
    // <ThemeProvider>
      <div className="App" style={{textAlign:'left', padding:'10px', backgroundColor: context.currentMode === 'light' ? 'white' : 'black', color: context.currentMode === 'light' ? 'black' : 'white'}}>
        <Header />
        <Toggle />
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
          ut orci nec sodales. Donec dignissim tortor eget metus mollis, vel
          gravida lectus accumsan. Vestibulum dapibus tortor in massa lacinia
          tempus. Morbi et dolor et ipsum eleifend viverra in a erat. Nam vel
          rhoncus urna, eu finibus justo. Nunc sodales lacinia turpis, vitae
          viverra erat rutrum eget. Phasellus dapibus imperdiet odio, consectetur
          rutrum velit pharetra elementum. Aliquam tempor mauris nec consequat
          cursus. Nullam mi libero, sodales ut ornare at, lobortis ut metus. Cras
          quis ex non odio vehicula elementum et in magna. Phasellus eget
          ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
          pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis
          urna. Aliquam semper tristique nunc vel placerat. Etiam nec magna ex{" "}
        </div>
      </div>
    // </ThemeProvider>
  );
}

export default App;
