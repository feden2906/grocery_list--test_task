import './App.css';
import {BaseLayout} from "./layouts";
import {Routing} from "./services/Routing";

function App() {
  return (
      <div className="App">
        <BaseLayout>
          <Routing/>
        </BaseLayout>
      </div>
  );
}

export default App;
