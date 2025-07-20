import React from "react";
import Moviecard from "./Moviecard";

function App() {
  return (
    <div className="App">
      <Moviecard 
        Title="Inception"
        Year={2010}
        Rating={8.8}
        PosterURL="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
      />
    </div>
  );
}

export default App;
