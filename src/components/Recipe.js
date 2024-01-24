import React from "react";

export default function Recipe({ id, title, img, onSelectRecipe }) {
  const reciepeStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "20px 20px 20px 0",
    paddingRight: "10px",
    backgroundColor: "#FF6347",
    color: "#ffffff",
  };

  const imgStyle = {
    width: "200px",
    margin: "0 10px 0 0",
  };

  const nameStyle = {
    margin: 0,
    fontSize: "1.5rem",
  };

  return (
    <div
      style={reciepeStyle}
      className="hover"
      onClick={() => onSelectRecipe(id)}
    >
      <img style={imgStyle} src={img} alt={`${title}  `} />
      <h3 style={nameStyle}>{title}</h3>
    </div>
  );
}
