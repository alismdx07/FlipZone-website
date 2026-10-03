import './index.css'
const Loginpage=()=>{
    return(
        <div className='login-container'>
        <div className='login-card'>
        <h1>Login Here</h1>
        <label> Username</label>
        <input type='text' placeholder="enter your name"/>
        <label>Email</label>
        <input type='Email' placeholder="enter your Email"/>
        <label>Password</label>
        <input type='Password' placeholder="enter your Password"/>
        <button>Login</button>
        </div>
        </div>
    )
}
export default Loginpage