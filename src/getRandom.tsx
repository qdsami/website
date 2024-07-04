import React, { useState } from 'react';
import './getRandom.css'

const getRandom: React.FC = () => {
const[names, setNames]=useState<string []>([]);
  const[text, setText]= useState('');
  const [checked, setChecked] = useState(false);
  const [text2, setText2] = useState('Значение');

  function getValues(){
  if(text.trim()!=""){
  names.push(text.trim());
  console.log(names);
  setText('');
  }else{
  alert('Enter Значение');
  }
  }

  function getItemId(p0: { item: string; }){
    setNames(names.filter((item=>item!=p0.item)));
    console.log(names);
  }

  function handleChange(e: { target: { checked: boolean; }; }) {
    setChecked(e.target.checked);
  }

  function getRandomValue(){
    var itemToDelete = names[Math.floor(Math.random()*names.length)];
    if(checked){
      console.log(itemToDelete);
      console.log(names);
      setNames(names.filter((item=>item!=itemToDelete)));
      console.log(names);
    }else{
      console.log(itemToDelete);
    }
    setText2(itemToDelete);
  }
  const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // предотвратить добавление новой строки в textarea
      console.log('Enter key pressed');
      getValues();
    }
  };
  return (
  <div>
    <h2>Рандомайзер</h2>
    <div className='questions'>

      <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      id="inputText"
      spellCheck="false"
      className="getName"
      placeholder="Никнеймы" >
</textarea><button onClick={getValues}>Добавить</button>
    </div>
    <br />
    <div className='questions'>
      <label className="container">Убрать повтор
        <input type="checkbox" onChange={handleChange} />
      </label>
    </div>
    <div className='questions'>
      <button id="createButton" onClick={getRandomValue}>Вывод</button>
      <h2 id='changeThis'>{text2}</h2>
    </div>
    <div className="output">
      {
      names.length ? names.map(item=>(
      <div className='cardName' id={item} key={item}>
        <button id={item} onClick={()=>getItemId({item})}><h1>{item}</h1>
          <h5>Удалить</h5>
        </button>
      </div>
      )) : <h1>Пусто</h1>
      }
    </div>
  </div>
  );
  }
  export default getRandom;