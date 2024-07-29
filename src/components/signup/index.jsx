import React, { useState, useRef } from 'react';
import '../signup/index.css';

const Signin = () => {
  const [parag, setParag] = useState('');
  
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const saveclick = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let isValid = true;

  
    if (username.length < 3) {
      alert('Username kamida 3 ta belgidan iborat bo\'lishi kerak.');
      isValid = false;
    }

    if (!email) {
      alert('Email togri formatda bolishi kerak.');
      isValid = false;
    }

    if (password.length < 6) {
      alert('Parol kamida 6 ta belgidan iborat bolishi kerak.');
      isValid = false;
    }

    if (isValid) {
      setParag('Siz muvafaqqiyatli royxatdan otdingiz');
    }
  };

  return (
    <div className='signbox'>
      <div className="box">
        <form>
          <input
            type="text"
            placeholder='Username'
            ref={usernameRef}
            required
          /> <br />
          <input
            type="email"
            placeholder='Email'
            ref={emailRef}
            required
          /> <br />
          <input
            type="password"
            placeholder='Password'
            ref={passwordRef}
            required
          /> <br />
          <br />
          <h1>{parag}</h1>
          <button type="submit" onClick={saveclick}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
