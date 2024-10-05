import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
import './Signup.css'
function Signup() {
    return ( 
        <div className="login">
        <form  action="">
          <div className="title">Sign Up</div>
          <TextField id="standard-basic" label="Username" variant="standard" />
          <br /> <br /><br />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <br /> <br /><br />
          <TextField id="standard-basic" label="Password" variant="standard" />
           <br /> <br /> <br />
           <Button variant="contained" id="btn">Login</Button>
        </form>
     </div> 
     );
}

export default Signup;