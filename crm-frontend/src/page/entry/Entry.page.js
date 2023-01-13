import React, {useState} from 'react'
import './entry.style.css'
import Card from 'react-bootstrap/Card';
import Login from '../../components/login/Login.comp';
import ResetPassword from '../../components/password-reset/PasswordReset.comp';

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('login')
const handleOnChange = (e) => {
  const {name, value} = e.target

  switch(name){
    case 'email':
      setEmail(value)
      break;
    case 'password':
      setPassword(value)
      break;
      default:
        break;
  }
};

const handleOnSubmit = (e) => {
  e.preventDefault()

  if(!email || !password){
    return alert("incomplete form");
  }
  //ToDo call API to login
  console.log(email, password);
};

const handleOnResetSubmit = (e) => {
  e.preventDefault()

  if(!email){
    return alert("incorrect email");
  }
  //ToDo call API to login
  console.log(email);
};

const formSwitcher = frmType => {
  setFrmLoad(frmType);
};

  return (
    <div className='entry__page bg-primary'> 
        <Card className='form__box' style={{ width: '19rem', height: '22rem' }}>
          {frmLoad === 'login' &&
          <Login 
          handleOnChange={handleOnChange} 
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          email={email}
          pass={password}
          />}
          {frmLoad === 'rest' &&
          <ResetPassword
          handleOnChange={handleOnChange} 
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email={email}
          />}
        </Card>
    </div>
  )
}

export default Entry