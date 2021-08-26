const TemplateImageTransition = ({ image }) => {
  const containerStyle = {
    position: "relative",
    width: 400,
    height: 400,
    owerflow: "hidden",
  }

  const imageStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: "auto",
    height: "auto",
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPposition: "50%",
    transition: "transform .9s cubic-bezier(.215,.61,.355,1)",
  }

  /*const textStyle = {
    
  }*/

  return (
    <div style={containerStyle}>
      <div style={imageStyle}></div>
      {/*<div style={textStyle}></div>*/}
    </div>
  )
}

export default TemplateImageTransition
