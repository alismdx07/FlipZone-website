import './index.css'
import {useState} from 'react'
import { useNavigate} from 'react-router';
const Loginpage=()=>{
const [Username,setUsername]=useState("");
const[gmail,setgmail]=useState("");
const[Password,setPassword]=useState("");
const handleusername=(event)=>{
    setUsername(event.target.value)
}
const handlegmail=(event)=>{
    setgmail(event.target.value)
}
const handlePassword=(event)=>{
    setPassword(event.target.value)
}
const Naviagte=useNavigate()
const handlelogin=()=>{
    if(Username===''|| gmail===''|| Password===''){
        alert("plz fill all the required fields")
        return
    }
    localStorage.setItem("username",Username)
    localStorage.setItem("Gmail",gmail)
    localStorage.setItem("IsLoggedIn","true")
    Naviagte('/products')
    // Naviagte('/cart')
    // Naviagte('/wishlist')
}

    return(
        <div className='login-container'>
        <div className='login-card'>
        <h1>Login Here</h1>
        <label> Username</label>
        <input type='text' placeholder="enter your name" onChange={handleusername}/>
        <label>Email</label>
        <input type='Email' placeholder="enter your Email" onChange={handlegmail}/>
        <label>Password</label>
        <input type='Password' placeholder="enter your Password" onChange={handlePassword}/>
        <button onClick={handlelogin}>Login</button>
        </div>
        </div>
    )
}
export default Loginpage