function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>저는 {props.name}입니다.</h3>
    </>
  );
}

export default Header;
