import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="casa">Casa</Link>
        <Link to="construcao">Construção</Link>
        <Link to="familia">Família</Link>
        <Link to="castiel">Castiel</Link>
        <Link to="praia">Praia</Link>
      </ul>
    </div>
  )
}