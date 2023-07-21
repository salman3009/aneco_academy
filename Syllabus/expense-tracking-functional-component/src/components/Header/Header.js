import './Header.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import login from '../../service/index';
const Header=()=>{

  const flag = useSelector((state)=>state.login.flag);
  const email = useSelector((state)=>state.login.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutHandler=(event)=>{
        event.preventDefault();
        login.failure(dispatch);
        navigate('login');
  }
   return (<div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="" className="navbar-brand"><i className="fa fa-address-book" aria-hidden="true"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="" className="nav-link">{email} <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link  to="about" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link">Contact</Link>
                  </li>
              </ul>
              {!flag && <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success signup my-2 my-sm-0" type="submit"><Link to="">Sign up</Link></button>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="login">Login</Link> </button>
              </form> }

              {flag && <form className="form-inline my-2 my-lg-0">
                <button onClick={onLogoutHandler} className="btn btn-outline-success signup my-2 my-sm-0" type="submit">Logout</button>
              </form>}
           

      
            </div>

            
          </nav>
   </div>)

}
export default Header;
