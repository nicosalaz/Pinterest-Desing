import './App.css';
import { Header, PinLayout, Footerfloat } from './components/main';
import Media from 'react-media';

const App = () => {
  return (
    <div>
      <Media query="(max-width: 375px)">
        {(matches)=>{
            return matches ? Mobile() : Desktop();
        }}
      </Media>
    </div>
  );
};

const Mobile = () =>{
  return (
    <div>
      <Header/>
      <PinLayout />
      <Footerfloat/>
    </div>
  );
}
const Desktop = () =>{
  return (
    <div>
      <Header/>
      <PinLayout />
    </div>
  );
}
export default App;
