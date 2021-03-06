import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
  ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <PartBuilder props={props.parts[0]} />
    <PartBuilder props={props.parts[1]} />
    <PartBuilder props={props.parts[2]} />
    </>
  )
}

const PartBuilder = (props2) => {
  return (
    <>
    <p>
      {props2.props.name} {props2.props.exercises}
    </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
    </>
  )
}

export default App
