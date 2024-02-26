const Header = (props) => {
  return (
    <h2>{props.course}</h2>
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
    <p><b>total of {total} exercises</b></p>
  )
  
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course["name"]}/>
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]}/>
    </div>
  )
}
export default Course;