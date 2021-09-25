function Header(props) {
    const state = {
        title: "21-2 MERN Session",
    };
    return (
        <>
        <div>{state.title}</div>
        <h2>저는 {props.name}입니다.</h2>
        </>
    )
}

// return 값은 하나의 태그로 묶어줘야 한다.
export default Header;