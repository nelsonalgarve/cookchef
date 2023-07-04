import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes'

function Content() {

  const recipes = data.map((recipe) => {
    return <Recipe key={recipe._id} title={recipe.title} image={recipe.image}/>
  })

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes}
        </div>
      </div>
    </div>
  );
}

export default Content;