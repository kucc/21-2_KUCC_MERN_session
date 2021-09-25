import React from 'react';

function Body({age, hobby, major}) {
    return (
        <>
           <div>저는 {age > 30 ? '30대' : '20대'}입니다.</div>
            <div>{hobby}를 좋아합니다.</div>
            <div>전공은 {major}입니다.</div>
        </>
    );
}

export default Body;