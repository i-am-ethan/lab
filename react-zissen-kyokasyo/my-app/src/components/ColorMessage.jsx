export const ColorMessage = (props) => {
  console.log(props)
  const {color, children} = props;
  const contentStyle = {
    color: color,
    fontSize: "20px",
  }
  return <p style={contentStyle}>{children}</p>
}