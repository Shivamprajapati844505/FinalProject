import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
 import './Login.css'
function Login(){
    return(
        <div className="login">
        <form action="">
          <div className="title">Login</div>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <br /> <br /><br />
          <TextField id="standard-basic" label="Password" variant="standard" />
           <br /> <br /> <br />
           <Button variant="contained" id="btn">Login</Button>
        </form>
    </div>
    )
}

export default Login;