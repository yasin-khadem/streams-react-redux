import {Link} from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link className='item' to='/'>
                streamer
            </Link>
            <Link className='item' to='/stream/new'>
                create
            </Link>
            <div className='right menu'>
                <Link className='item' to='/'>
                    All streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}
export default Header