import video from "../data/video.js";
import Buttons from "./Buttons.jsx";


import Video from "./Video.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
    <Video vid={video}/>
    <Buttons vid={video}/>
    </div>
  );
}

export default App;
