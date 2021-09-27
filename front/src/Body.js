function Body(props) {
  const { age, hobby } = props;
  console.log(props);
  return (
    <>
      <div>저는 {age > 30 ? "30대" : "20대"}입니다.</div>
      <div>{hobby} 좋아합니다.</div>
    </>
  );
}

export default Body;
