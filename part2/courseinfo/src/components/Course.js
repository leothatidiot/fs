const Header = ({str}) => {
  return (
    <h2>{str}</h2>
  )
}

const Part = ({part}) => {
  return (
    <p key={part.id}>{part.name} {part.exercises}</p>
  )
}

const Content = ({course}) => {
  return (
    course.parts.map(
      (part) => <Part key={part.id} part={part} />
    )
  )
}

const Total = ({parts}) => {
  return (
    <h3>Number of exercises {
      parts.reduce( (acc,cur)=>acc+=cur.exercises, 0 )
    }</h3>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header str={course.name} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course