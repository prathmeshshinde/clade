import "./App.css";
import Header from "./Components/Header/Header";
import JobInfo from "./Components/JobInfo/JobInfo";
import JobPage from "./Components/JobPage/JobPage";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="flex">
        <div className="w-9/12">
          <JobPage />
        </div>
        <div className="w-3/12 border-blue-200">
          <JobInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
