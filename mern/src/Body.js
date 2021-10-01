function Body({ name, age, major, hobby }) {
  return (
    <>
      <div>마이 네임 이즈 {name}.</div>
      <div>아이 엠 {age ? "20" : "??"}대.</div>
      <div>아이 스터디 {major}.</div>
      <div>아이 하트 {hobby}.</div>
      <div>나이스 투 밑 유.</div>
    </>
  );
}

export default Body;
