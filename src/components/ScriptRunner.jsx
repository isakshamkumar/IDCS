import React, { useState } from 'react';
import './ScriptRunner.css'; // Import your CSS file for dark mode styling

function ScriptRunner() {
  const [userTyped, setUserTyped] = useState('');
  const [textInputVisible, setTextInputVisible] = useState(false);

  const openPythonScript = (scriptName) => {
    // Logic to open the Python script
    fetch('http://localhost:5000/execute-python-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ script_path: scriptName }) 
    })
    .then(response => response.json())
    .then(data => {
      // setOutput(data.output);
      // alert('hi')
      console.log(data,'dataa');
    })
    .catch(error => {
      console.error('Error executing Python script:', error);
    });
  };
  const handleSendToPyScript=async()=>{
    const response = await fetch('http://localhost:5000/handle_user_input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_input: userTyped }) 
    })
    .then(response => response.json())
    .then(data => {
      // setOutput(data.output);
      // alert('hi')
      console.log(data,'dataa');
    })
    .catch(error => {
      console.error('Error executing Python script:', error);
    });
  }

  return (
    <div className="App">
      <div className="container" onClick={() => openPythonScript('./script.py')}>
        <p>Container 1</p>
      </div>
      <div className="container" onClick={() => setTextInputVisible(true)}>
        <p>Container 2</p>
        {textInputVisible && (
          <>
          

          <input
            type="text"
            value={userTyped}
            onChange={(e) => setUserTyped(e.target.value)}
            className="textInput"
          />
          <button onClick={handleSendToPyScript}> Send Message</button>
          </>
        )}
      </div>
      <div className="container" onClick={() => openPythonScript('script2.py')}>
        <p>Container 3</p>
      </div>
    </div>
  );
}

export default ScriptRunner;
