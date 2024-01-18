import { useState } from 'react';
import './main.css'

const App = () => {

  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Juan Sandoval</p>
      <h2>Contador: {contador}</h2>
      <button id='btn-incrementa' className="btn" onClick={() => setContador(contador+1)}>Incrementa</button>
      <button id='btn-decrementa' className="btn" onClick={() => setContador(contador-1)}>Decrementa</button>
      <button id='btn-reinicia' className="btn" onClick={() => setContador(0)}>Reinicia</button>
    </>
  )
}

export default App;