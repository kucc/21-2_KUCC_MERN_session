function Body(props) {
    return (
        <>
            <div>저는 {props.age >= 30 ? '30대' : '20대'}입니다.</div>
            <div>{props.hobby}를 좋아합니다.</div>
            <div>전공은 {props.major}입니다.</div>
        </>
    );
}

export default Body;