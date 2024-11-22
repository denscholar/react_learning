import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const phone = useContext(AppContext);
  return (
    <div>Footer
      <h5>Phone number: {phone} </h5>
    </div>
  )
}

export default Footer