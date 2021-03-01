import React, { useState } from 'react'
import EventInputField from './components/EventInputField/index'

function App() {
  const [newEventName, setEventName] = useState('')
  const [newEventDateTime, setEventDateTime] = useState(new Date().toISOString().substring(0, 16))
  const [message, setMessage] = useState('')
  const [messageStatus, setMessageStatus] = useState('')

  const onSubmit = () => {
    if (!newEventName) {
      console.log('Please add name')
      setMessageStatus('NO_NAME')
      setMessage('Please input the event name')
      return
    }
    setMessageStatus('')
    setMessage('')
  }

  return (
    <div className="App">
      <EventInputField
        setEventName={setEventName}
        newEventName={newEventName}
        setEventDateTime={setEventDateTime}
        newEventDateTime={newEventDateTime}
        onSubmit={onSubmit}
      />
      {messageStatus === 'NO_NAME' && (<div> {message} </div>)}
    </div>
  );
}

export default App;
