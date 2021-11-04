import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:id" component={Detail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
