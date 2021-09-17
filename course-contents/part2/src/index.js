import ReactDOM from 'react-dom'
import App from './App.js'

// import axios from 'axios'


// 测试 promise
// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise) // fulfilled

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2) // rejected

// 请求并渲染 （从本地 JSON 服务器
// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.render(
//     <App notes={notes} />,
//     document.getElementById('root')
//   )
// })

ReactDOM.render(<App />, document.getElementById('root'))