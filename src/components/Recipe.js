import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe(props) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }
  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt="recipe" />
      </div>
      <div  className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
        <h3 className="mb-20" >{props.title}</h3>
        <i className={`fa-solid fa-heart ${liked && "text-primary"}`}></i>
      </div>
    </div>
  );
}

export default Recipe;