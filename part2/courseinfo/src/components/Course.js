import React from 'react'

const Header = ({course }) => <h2>{course.name}</h2>

const Total = ({ parts }) => {
    const total = parts.reduce((s, p)=>{return s+p.exercises},0)
    return (
        <div>
            <h3>total of {total} exercises</h3>
        </div>
    )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
    return(
        <div>
        {parts.map(part => 
            <Part key={part.id} part={part} />
        )}
        </div>
    )
}

const Course = ({course}) =>{
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course