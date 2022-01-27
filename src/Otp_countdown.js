// Otp-countdown.js
import React from 'react';
import { Grid,Paper,Box, Avatar, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useState} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
 
const Otp_countdown=()=>{
    const paperStyle={padding :20,height:'70vh',width:280, margin:"60px auto"}
    const avatarStyle={backgroundColor:'#6d7f9f'}   //  #3370bd
    const btnstyle={marginTop:'28px ',backgroundColor:'#6d7f9f'}
     
    const [user, setUser] = useState({
        otp:"",
        
      });
      const { fname, lname, email,phone} = user;
 
      const handleChange  = e => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
   
      const handleSubmit = () => {
          // your submit logic
      }
 
      // Timer 
 
    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Register</h2>
                    <h4 style={{color:"green"}}></h4>
                  <Box color="text.secondary">
                    <Typography variant="body2">
                        Enter OTP Sent to your mobile number XXXXXX9989
                    </Typography>  
                  </Box>    
                </Grid><br/>
 
                <ValidatorForm
                onSubmit={handleSubmit}>
                 <TextValidator
                    label="Enter 4 Digit OTP"
                    onChange={handleChange}
                    variant="outlined"
                    inputProps={{ maxLength: 4 }}
                    name="otp"
                    size="small"
                    type="text"
                    fullWidth
                    validators={['required']}
                    errorMessages={['OTP is required']}
                    value={user.fname}
                 />
                
               <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>VERIFY</Button>
            </ValidatorForm>
                <Box mt={3} ><Typography fontWeight={500} align="center" color='textSecondary'> Resend OTP in <span style={{color:"green",fontWeight:"bold"}}> 00:{counter}</span> </Typography></Box>
              
                  <Typography align="center">  
                    <Link to="Signup">
                     <span style={{marginLeft:"5px"}}> Resend OTP </span>
                    </Link>
                  </Typography> 
            
            </Paper>
        </Grid>
    )
}
 
export default Otp_countdown