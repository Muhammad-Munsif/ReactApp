import React from 'react'

const SpreadOperator = () => {
  const maleStudent = ['Asad','Ahmad','Saad','Izhar','Munsif','Zia','Sadiq']
  const femaleStudent = ['Sara','Sadaf','Aaman','Hira','Humaira','Muniba']
  const allStudents = [...maleStudent,...femaleStudent]
  return (
    <div>
      <h1>List of Student</h1>
      {
        allStudents.map((student, index)=>
          <ul>
            <li key={index}>{student}</li>
          </ul>
        )
      }
    </div>
  )
}

export default SpreadOperator

