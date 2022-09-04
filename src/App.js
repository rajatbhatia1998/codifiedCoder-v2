
import './App.css';
import Main from './components/Main';
import {ParallaxProvider} from 'react-scroll-parallax'
function App() {
  return (
    <ParallaxProvider>
    <div>
        <Main/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
