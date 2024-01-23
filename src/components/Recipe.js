import React from "react";

export default function Recipe({ id, title, img, onSelectRecipe }) {
  const reciepeStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "20px",
    backgroundColor: "#F5F5DC",
    padding: "10px",
  };

  const imgStyle = {
    width: "100px",
    margin: "10px",
  };

  return (
    <div style={reciepeStyle} onClick={() => onSelectRecipe(id)}>
      <img style={imgStyle} src={img} alt={`${title}  `} />
      <h3>{title}</h3>
    </div>
  );
}
