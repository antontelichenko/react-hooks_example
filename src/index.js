//useState//////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

// function Example() {
    
//     const [count, setCount] = useState(0);//функция useState принимает значение переменной и возвращает значение и функцию
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );
//   }
  
//   ReactDOM.render(<Example />, document.getElementById("root"));

//  serviceWorker.unregister();

//useEffect///////////////////////////////////////////////////////////////

// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

// function App() {
//     let [names, setNames] = useState([]);//функция useState принимает значение переменной и возвращает значение и функцию

//     useEffect(() => {
//       fetch("https://uinames.com/api/?amount=5")
//         .then(response => response.json())
//         .then(data => {
//           setNames(data);
//         });
//     }, []);//useEffect принимает анонимную функцию и массив переменных, изменение которых повлечет повторный запуск useEffect
  
//     return (
//       <div className="App">
//         <div>
//           {names.map((item, i) => (
//             <div key={i}>
//               {item.name} {item.surname}
//             </div>
//           ))}
//         </div>
//       </div>
//     );//выводим в цикле результат
//   }
  
//   ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorker.unregister();

//own hooks//////////////////////////////////////////////////////////////

import React, { useState } from "react";
import ReactDOM from "react-dom";

function useCounter({ initialState }) {
  const [count, setCount] = useState(initialState);//функция useState принимает значение переменной и возвращает значение и функцию
  const increment = () => setCount(count + 1);//переменная, в которую пишем результат выполнения функции, которая вызывает setCount
  const decrement = () => setCount(count - 1);//переменная, в которую пишем результат выполнения функции, которая вызывает setCount
  return [count, { increment, decrement}];//возвращаем массив, где первый элемент - "count"-текущее значение hook, а второй элемент - объект, содержащий функции для взаимодействия с hook
}

function App() {
  const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });//вызвали функцию useCounter и закинули в нее state, функция вернула массив, и мы записали его в переменную
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

