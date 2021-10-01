import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const state = {
    age: 24,
    hobby: "운동",
    title: "21-2 MERN 세션 ",
    name: "명재위",
    major: "sports",
    contact: {
      email: "mjw8941@naver.com",
      phone: "010-3096-8941",
    },
    mbti: "infj",
  };

  return (
    <div className="App">
      <Header name={state.name} title={state.title} />
      <Body
        age={state.age}
        hobby={state.hobby}
        major={state.major}
        mbti={state.mbti}
      />
      <Footer contact={state.contact} />
    </div>
  );
} //

export default App;
