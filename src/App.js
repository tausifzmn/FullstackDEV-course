import React from 'react'

const Course = (props) => {
  
  const total = props.course.parts.reduce((sum,part) => {
    return sum + part.exercises
  }, 0)

  return (
    <div>
      <Header name={props.course.name}/>
      {props.course.parts.map(part => 
        <Content key={part.id}  title={part.name} num={part.exercises} />
      )}

      <Total sum = {total}/>

    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        Course Name: {props.name}
      </h1>
    </div>
  )
}

const Content = (part) => {
  return (
    <div>
        <Part title={part.title} num={part.num} /> 
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.title} {props.num}
      </p>
    </div>
  )
}


const Total = (total) => {
  return (
    <div>
      <p>
        <b>Total number of Exercises: {total.sum}</b>
      </p>
    </div>
  )
} 


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map( (course,index) => {
    return (
      <div key={course.id}>
        <Course course={course} />
      </div>
    )}
  )
}

export default App