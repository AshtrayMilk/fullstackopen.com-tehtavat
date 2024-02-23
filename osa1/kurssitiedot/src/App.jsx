
const Header = (props) => {
  return (
    <p>{props.course}</p>
  )
}
const Content = (props) => {
  const parts = props.parts.map(
    (part, key) =>
      <Part name={part["name"]} exercises={part["exercises"]} key={key}/>
  )

  return (
    <div>
      {parts}
    </div>
  )
}
const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = (props) => {
  const total = props.parts.map(
    part => part["exercises"]
  ).reduce((sum, acc) => sum + acc, 0)
  
  console.log(total)
  return(
    <p>Number of exercises {total}</p>
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
      <Header course={course["name"]}/>
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]}/>
    </div>
  )
}

export default App