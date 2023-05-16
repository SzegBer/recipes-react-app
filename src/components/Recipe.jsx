// single recepie display
// receive options
// assemble the right url for the fetch
// fetch and give the data to map function to display a few of them.

import './styles/Recipe.css'

import { useFetch } from '../hooks/useFetch'

const Recipe = (props) => {

  const options = props.options

  const urlBuilder = () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

    const cuisine = options.cuisine
    const diet = options.diet
    const type = options.type
    const nr = options.nr
  
    return `${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&number=${nr}`
  }

  let url = urlBuilder()
  //console.log(url)
  const { data: recipes } = useFetch(url)

  return (
    <div className="recipes">
      <h2>Here are your recipes. Good luck with the cooking!</h2>

      <div className="hits">
        {
        recipes && recipes.results.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <img className="picture" src={recipe.image} alt={recipe.title} />
            <h3 className="title">{recipe.title}</h3>
          </div> 
        ))
        }
      </div>
    </div>
  )
}

export default Recipe;