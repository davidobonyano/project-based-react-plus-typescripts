
// import Moviecard from "./Moviecard";
import Todolist from "./Todolist";
import { Counter } from "./Counter";
import FormValidation from "./FormValidation";

function App() {
  return (
    <div className="App">
      {/* <Moviecard 
        Title="Inception"
        Year={2010}
        Rating={8.8}
        PosterURL="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
      /> */}
      <Todolist></Todolist>
      <Counter></Counter>
      <FormValidation></FormValidation>
    </div>
  );
}

export default App;
