import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function MyForm() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateInput = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // Example validation: input must not be empty
    setIsValid(inputValue.trim() !== '');
  };

  return (
    <div>
      <label htmlFor='username'>Username</label>
      <InputText
        id='username'
        value={value}
        onChange={validateInput}
        className={!isValid ? 'p-invalid' : ''} // Apply p-invalid class based on validation
        aria-describedby='username-help'
      />
      {!isValid && (
        <small id='username-help' className='p-error'>
          Username is required.
        </small>
      )}
    </div>
  );
}

export default MyForm;
