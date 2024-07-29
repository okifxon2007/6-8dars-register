import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../signin/index.css';

const Signin = () => {
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repasswordRef = useRef(null);
  const navigate = useNavigate();

  function validate() {
    let isValid = true;

    const nameValue = nameRef.current.value;
    if (nameValue.length <= 3) {
      alert('Ism 3 ta belgidan ko\'p bo\'lishi va faqat harflardan iborat bo\'lishi kerak.');
      nameRef.current.style.outlineColor = 'red';
      isValid = false;
    } else {
      nameRef.current.style.outlineColor = '';
    }

    const usernameValue = usernameRef.current.value;
    if (usernameValue.length < 5) {
      alert('Username kamida 5 ta belgidan iborat bolishi kerak.');
      usernameRef.current.style.outlineColor = 'red';
      isValid = false;
    } else {
      usernameRef.current.style.outlineColor = '';
    }

    const emailValue = emailRef.current.value;
    if (!emailValue) {
      alert('Email togri formatda bolishi kerak.');
      emailRef.current.style.outlineColor = 'red';
      isValid = false;
    } else {
      emailRef.current.style.outlineColor = '';
    }

    
    const passwordValue = passwordRef.current.value;
    if (passwordValue.length < 6) {
      alert('Parol kamida 6 ta belgi bolishi kerak kerak.');
      passwordRef.current.style.outlineColor = 'red';
      isValid = false;
    } else {
      passwordRef.current.style.outlineColor = '';
    }

    
    

    return isValid;
  }

  function handle(event) {
    event.preventDefault();
    const valid = validate();

    if (valid) {
      navigate('/signup');
    }
  }

  return (
    <div className='signbox'>
      <div className="box">
        <h1>Signin</h1>
        <form>
          <input
            ref={nameRef}
            className='name'
            type="text"
            placeholder='Name'
          /> <br />
          <input
            ref={usernameRef}
            type="text"
            placeholder='Username'
          /> <br />
          <input
            ref={emailRef}
            type="email"
            placeholder='Email'
          /> <br />
          <input
            ref={passwordRef}
            type="password"
            placeholder='Password'
          /> <br />
          <input
            ref={repasswordRef}
            type="password"
            placeholder='Repassword'
          /> <br /> 

          <br />
          <br />
          <button onClick={handle}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
