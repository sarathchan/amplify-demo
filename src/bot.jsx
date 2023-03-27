import { useState } from 'react'
import { Col, Row } from 'antd';
import './App.css';
import axios from "axios";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import NativeSelect, { SelectChangeEvent } from '@mui/material/Select';

const Bot = () => {
    const [firstname, setFirstName] = useState("salesforce-developer")
    const [LastName, setLastName] = useState("")
    const [Dob, setDob] = useState("")
    const [Response, setResponse] = useState([])
    const [loading, setLoading] = useState(false);
  
  
  
    const handleClick = () => {
    //   setResponse("")
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
        //   for(let obj of res.data  ){

        // }
        
          setResponse(Oldarray =>[ ...Oldarray,res.data ] )



        })
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(Response,"res")
    return (
        <div>
            <Row>
                <Col span={12}> 


                    
                <div className="card">
      <h1>
        Chat Support
      </h1>
      <div className='input'>
      <FormControl sx={{ minWidth: 220, m: 1 }}>
        {/* <InputLabel        style={{color:'black'}} id="demo-simple-select-helper-label">Select Option</InputLabel> */}

        <NativeSelect
        // className='select'
        className = "textfield"
        // style={{color:'white'}}
        labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
          value={firstname}
          // label="Select Option"
          onChange={(e) => setFirstName(e.target.value)}
          autoWidth

        >

          <MenuItem value='salesforce-developer'>Ask to Salesforce Team</MenuItem>
          <MenuItem value='aws'>Ask to AWS Digital team</MenuItem>
          <MenuItem value='solution-arch'>Ask to Solution Architect</MenuItem>
          <MenuItem value='personal-agent'>Ask to Insurance Agent</MenuItem>
          <MenuItem value='mail'>Mail Analyse</MenuItem>
          <MenuItem value='contact-centre-agent'>Talk to Contact Centre</MenuItem>
        </NativeSelect>
        </FormControl>
      </div>
      <div className='input'>

        <TextField sx={{ minWidth: 220, m: 1 }}  id="filled-multiline-static"
          multiline
          rows={4}
          variant="filled"
        className='textfield'
        label="Enter Question" 
        placeholder='Enter Question'
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

      </div>




    </div>
    </Col>
                <Col span={12}>
                  
               

        <div className='card1'>
{
    Response.map((val) => {
        console.log(val.response,"val")
        return(
        <p >
          {val.response}<br></br>
          -----------------------------------------------------------------------
        </p>
        )

      })
}
        </div> 

                  
                </Col>
            </Row>
        </div>
    )
}

export default Bot