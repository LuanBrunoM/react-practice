import React from 'react'



const ContainerHome = ({ children }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginBottom: '20px' }}>
      {children}
    </div>
  )
}

export default ContainerHome