import React from 'react';
import './App.css'; // CSS 파일 연결

const App = () => {
  return (
    <div className="container">
      <div className="header">
      <img src="/aga_logo.png" alt="로고" className='logo'/>
        <h1>AGA HugHeart</h1>
        <h2>브랜드 비전 및 소개</h2>
      </div>
      <h3>
        HUGHEART is Different
      </h3>
      <p className='description'>
        마음이 따뜻해지는 공간, 허그하트 심리상담센터입니다.
      </p>
      <p className="description">
        허그하트 심리상담센터는 석/박사 전문가들이 모여 주 호소에 맞는 프로그램을 연구하여
        내담자 맞춤형 심리상담 프로그램을 제공합니다.
      </p>
      <p className="description">
        최초의 AI 미술치료 프로그램을 소개합니다. 내담자의 호소에 맞는 프로그램을 논문을
        기반으로 추천합니다.
      </p>
      <footer>
        background color : #F2F2F2
      </footer>
      <a
          className="App-link"
          href="https://sion0107.cafe24.com/skin-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          돌아가기
        </a>
    </div>
  );
};

export default App;
