const Header = (props) => {
return(
  <div>
    <h1>{props.course}</h1>
  </div>
)
}

const Part = (props) =>{
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <p>
        <Part part={part1}/>
        <Part part={part2}/>
        <Part part={part3}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  let total =0
  props.parts.forEach(value => {
    total+=value.exercises
  })
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}
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

export default App