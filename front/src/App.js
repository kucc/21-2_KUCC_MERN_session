import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const state = {
    name: "강태웅",
    age: 22,
    hobby: "춤추기, 더보이즈, 노래듣기, 보석십자수",
    contact: "mail: sag06078@naver.com, phone: 010-8628-8084",
  };

  return (
    <div className="App">
      <Header name={state.name} age={state.age} />
      <Body age={state.age} hobby={state.hobby} />
      <Footer contact={state.contact} />
    </div>
  );
}

export default App;
