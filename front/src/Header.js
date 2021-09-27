function Header(props) {
  const state = {
    title: "21-2 MERN 세션",
    name: props.age === 23 ? "김채린" : props.name,
  };
  return (
    <>
      <h1>{state.title}</h1>
      <h2>나는 세션장 {state.name}입니다.</h2>
    </>
  );
}

export default Header;
