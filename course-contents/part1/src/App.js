// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react'
// // 状态、计时器
// import React, { useState } from 'react'
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={()=>setCounter(counter+1)}> plus </button>
//     </div>
//   )
// }
// export default App


// // 状态、解构、状态提升
// Often, several components need to reflect the same changing data.
// We recommend lifting the shared state up to their closest common ancestor. 
// 通常，几个组件需要反映相同的变化数据。 我们建议将共享状态提升到它们最接近的共同祖先。
// import React, {useState} from 'react'
// const Display = ({counter}) => {
//   return (
//     <div>{counter}</div>
//   )
// }
// const Button = ({handleClick,text}) => {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const increaseByOne = ()=>setCounter(counter+1)
//   const setToZero = ()=>setCounter(0)
//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button handleClick={increaseByOne} text='plus' />
//       <Button handleClick={setToZero} text='zero' />
//     </div>
//   )
// }
// export default App


// // 复杂状态、展开语法
// import React, {useState} from 'react'
// const App = () => {
//   const [clicks, setClicks] = useState({left:0, right:0})
//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left+1,
//       right: clicks.right
//     }
//     setClicks(newClicks)
//   }
//   const handleRightClick = () => {
//     // // { ...clicks } 创建了一个新对象
//     // const newClicks = {
//     //   ...clicks,
//     //   right: clicks.right+1
//     // }
//     // setClicks(newClicks)
//     setClicks({...clicks,right:clicks.right+1})
//   }
//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// export default App


// 数组、条件渲染、重构（状态提升）、调试
const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks}
    </div>
  )
}
const Button = ({handleClick, text}) => {
  // console.log({handleClick, text}) // 调试
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setAll(allClicks.concat('L ')) // hook 只能从定义 React component 的函数体内部调用
    setLeft(left+1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R '))
    setRight(right+1) // hook 只能从定义 React component 的函数体内部调用
  }
  debugger // 调试
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}


export default App