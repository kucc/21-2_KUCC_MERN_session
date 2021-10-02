function Body(props) {
    const {Name, age, major, hobby} = props;

    return (
        <>
        <div>안녕하세요 {major}{Name}입니다. {age}살 이고요,</div>
        <div> 취미는 {hobby}입니다! </div>
        </>
    )
}

export default Body