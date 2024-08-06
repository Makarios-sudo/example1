import React from 'react'

const Information = ({name, classroom, subject}) => {
  return (
    <div>
        <h1> Hello, {name} </h1>
        <p> Welcome to primary {classroom} </p>
        <p> We learned {subject} last week, about multiplication table  </p>
    </div>
  )
}

export default Information
