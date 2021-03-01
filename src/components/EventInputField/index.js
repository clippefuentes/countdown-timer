import React from 'react'

function EventInputField ({
  setEventName, newEventName, setEventDateTime, newEventDateTime, onSubmit
}) {
  return (
    <div>
      <div>
        <div> Event Name: </div>
        <div> <input value={newEventName} onChange={(e) => setEventName(e.target.value)}/></div>
      </div>
      <div>
        <div> Event Date: </div>
        <div> <input type="datetime-local" value={newEventDateTime} onChange={(e) => setEventDateTime(e.target.value)} /></div>
      </div>
      <div>
        <button onClick={() => onSubmit()}>Start</button>
      </div>
    </div>
  )
}

export default EventInputField