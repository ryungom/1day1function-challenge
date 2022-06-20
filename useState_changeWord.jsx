import { useState } from 'react'

function App(){
  const [name, setName] = useState('피카츄');
  let color = 'yellow'

  function changeColor(){
    color = color === 'brown' ? 'yellow' : 'brown';
    document.querySelector('#color').textContent = color;
  }

  return(
    <>
      <h1 id="name">{name}</h1>
      <p id="color">{color}</p>
      <button onClick={()=>{
        setName(name === '라이츄' ? '피카츄' : '라이츄');
      }}>포켓몬이름변경</button>
      <button onClick={changeColor}>색상변경</button>
    </>
  )
}

export default App;