import React from 'react'
import { Link } from 'react-router-dom';

const ButtonHome = ({ to, nameButton }) => {
  return (
    <Link to={to}>
      <button style={{ width: '280px' }}>{nameButton}</button>
    </Link>
  )
}

export default ButtonHome