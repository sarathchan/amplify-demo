import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import axios from "axios";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {
  const [firstname, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Dob, setDob] = useState("")
  const [Response, setResponse] = useState("")
  const [loading, setLoading] = useState(false);



  const handleClick = () => {
    setResponse("")
    setLoading(true);
    
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
        setLoading(false);
        
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
        <InputLabel id="demo-simple-select-helper-label">Select Team</InputLabel>

        <Select
        className='select'
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-helper"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          autoWidth

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
<LoadingButton
        
        loadingPosition="start"
        startIcon={<SearchIcon />}
        variant="contained"
        onClick={handleClick}
        loading={loading}
      >
        Ask
      </LoadingButton>
        {/* <Button onClick={handleClick} variant="contained">Search</Button> */}
</div>
{
  Response != "" ? 

        <div className='response'>

        <p >
          {Response}
        </p>
        </div> :
        <></>
}
      </div>




    </div>
  );
}

export default App;
