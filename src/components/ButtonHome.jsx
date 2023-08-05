import React from 'react'
import { Link } from 'react-router-dom';

const ButtonHome = ({ to, nameButton }) => {
  return (
    <Link to={to} style={{ width: 'fit-content' }}>
      <button>{nameButton}</button>
    </Link>
  )
}

export default ButtonHome