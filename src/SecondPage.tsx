import React from 'react';
import './SecondPage.css'
import test from './assets/testImage.jpg'
import { Link } from 'react-router-dom';
const SecondPage: React.FC = () => {
  return (
    <div>
      <h1>Заметки</h1>
        <br />
        <br />
        <br />
        <div className='note'>
          <Link target="_blank" to={test}><img src={test} alt="" /></Link>
          <h1>04.07.2024</h1>
        </div>
    </div>
  );
}
export default SecondPage;
