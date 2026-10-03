import './index.css'
import { Link } from 'react-router-dom'
const Header=()=>{
    return(
        <div className='main-container'>
<header>
    <h2>FlipZone</h2>
    <nav>
        <Link to='/home'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/login' type="button">Login</Link>
        
    </nav>
</header>
        </div>
    )
}
export default Header