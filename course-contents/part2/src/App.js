import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    // axios.get('http://localhost:3001/notes').then( // GET
    noteService.getAll().then(response => { // 提取 GET
      console.log('promise fulfilled')
      setNotes(response.data)
    }
    )

    noteService.getAll().then(response => {
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault() // 阻止页面重新加载 不是页面刷新 
    // console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    // setNotes(notes.concat(noteObject)) // 此操作会更新 app 组件的状态

    // part2/d
    // axios.post('http://localhost:3001/notes', noteObject).then(response => { // POST 更改了 db.json
    noteService.create(noteObject).then(response => { // 提取 POST
      console.log(response)
      setNotes(notes.concat(response.data)) // 只更改了 App 的 note
      setNewNote('')
    })
  }

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    axios.put(url, changedNote).then(response => { // PUT
    // noteService.update(id, changedNote).then(response => { // 提取 PUT
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    }).catch(error => {
      alert(`the note '${note.content}' was already deleted from server`)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)} >
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) =>
          // <li key={note.id}> {note.content} </li>
          <Note key={i} note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App