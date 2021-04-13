import React from 'react'


const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  
  const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part}/>
        )}
      </div>
    )
  }
  
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  
  
  const Total = ({ parts }) => {
    let total = parts.reduce((result, part) => result + part.exercises, 0)
    return(
      <h3>Number of exercises {total}</h3>
    ) 
  }

  export default Course