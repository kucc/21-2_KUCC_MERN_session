function Body({ age, hobby, major, mbti }) {
  return (
    <>
      <div>저는 {age > 30 ? "30대" : "20대"}입니다.</div>
      <div>{hobby}을/를 좋아합니다. </div>
      <div>전공은 {major} 입니다</div>
      <div>MBTI는 {mbti} 입니다</div>
    </>
  );
}

export default Body;
