import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import axios from "axios";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {
  const [firstname, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Dob, setDob] = useState("")
  const [Response, setResponse] = useState("")



  const handleClick = () => {
    const URL = 'https://xqqbxnn2kk4vhyqkrinahgyoa40swxwv.lambda-url.us-east-1.on.aws/'
    let body = {
      "question_type": firstname,
      "question": LastName
    }
    let header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
    console.log(body)
    axios
      .post(URL, JSON.stringify(body),header
        )
      .then((res) => {
        console.log(res)
        setResponse(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <h1>
        Chat Support
      </h1>
      <div className='input'>
        <InputLabel id="demo-simple-select-helper-label">Question Type</InputLabel>

        <Select
        className='select'
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-helper"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          autoWidth
          label="Question Type"

        >

          <MenuItem value='salesforce-developer'>Ask to Salesforce Team</MenuItem>
          <MenuItem value='aws'>Ask to AWS Digital team</MenuItem>
          <MenuItem value='solution-arch'>Ask to Solution Architect</MenuItem>
        </Select>
      </div>
      <div className='input'>

        <TextField id="outlined-basic" label="Enter Question" placeholder='Enter Question'
          onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className='input'>

        {/* <TextField id="outlined-basic" 
          placeholder='Select DOB'
          type="date"
          onChange={setDob} />
          </div>
          <div className='login-btn'> */}
<div>

        <Button onClick={handleClick} variant="contained">Search</Button>
</div>
        <div className='response'>

        <p >
          {Response}
        </p>
        </div>
      </div>




    </div>
  );
}

export default App;
