export const ColorMessage = (props) => {
  console.log(props)
  const contentStyle = {
    color: props.color,
    fontSize: "20px",
  }
  return <p style={contentStyle}>{props.children}</p>
}