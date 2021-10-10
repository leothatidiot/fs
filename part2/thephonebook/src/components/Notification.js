const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const style = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if(message.startsWith('Information')) {
    // Information of X has already been removed from server.
    style.color = 'red'
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification