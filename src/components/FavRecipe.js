import React from "react";

export default function FavRecipe({ fav, setFav }) {
  const containerStyle = {
    width: "50%",
    padding: " 20px 50px",
    backgroundColor: "#F5F5DC",
    borderRadius: "10px",
  };

  function handleDeleteFav(favId) {
    setFav((fav) => fav.filter((fav) => fav.id !== favId));
  }
  return (
    <div style={containerStyle}>
      <h1>Favourite Recipes</h1>
      {fav.map((e) => (
        <p>
          <FavItem
            onDeleteFav={handleDeleteFav}
            id={e.id}
            title={e.title}
            img={e.image}
          />
        </p>
      ))}
    </div>
  );
}

function FavItem({ title, img, id, onDeleteFav }) {
  const containerStyle = {
    backgroundColor: "#32CD32",
    display: "flex",
    paddingRight: "20px",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    position: "relative",
  };

  const buttonStyle = {
    position: "absolute",
    right: "10px",
    borderRadius: "50%",
    backgroundColor: "#e03131",
    padding: "3px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#FFF",
  };

  const imgStyle = { width: "150px", marginRight: "20px" };
  return (
    <div style={containerStyle}>
      <img style={imgStyle} src={img} alt="as" />
      <h3>{title}</h3>

      <button style={buttonStyle} onClick={() => onDeleteFav(id)}>
        X
      </button>
    </div>
  );
}
