import { Link } from "react-router-dom"

const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p3>{smoothie.method}</p3>
      <div className="rating">{smoothie.rating}</div>
      <div className="button">
        <Link to={'/' + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  )
}

export default SmoothieCard