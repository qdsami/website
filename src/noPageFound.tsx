import React from 'react';
import bee from './assets/bee.gif';
import { Link } from 'react-router-dom';

const noPageFound: React.FC = () => {
  return (
    <div>
<Link to="/"><img className='logo2' src={bee} alt="" title='Нажми' /></Link>

<h1>Страница <span style={{ color: '#ff5252' }}>не найдена</span></h1>
  </div>
  );
}
export default noPageFound;