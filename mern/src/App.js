import "./App.css";
import logo from "./logo.svg";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  const state = {
    name: "이지유",
    age: true,
    major: "컴퓨터학",
    hobby: "책, 음식, 자연, 사람",
    email: "jiyouleehome@gmail.com",
  };

  return (
    <div className="App">
      <Header />
      <Body
        name={state.name}
        age={state.age}
        major={state.major}
        hobby={state.hobby}
      />
      <Footer email={state.email} />
    </div>
  );
}

export default App;
