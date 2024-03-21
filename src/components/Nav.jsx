import { Link } from "react-router-dom"
import { useState } from "react"

export default function Nav() {
  
  const [active, setActive] = useState(null)

  const navList = [
      { name: "HTML", url: "html" },
      { name: "CSS", url: "css" },
      { name: "JavaScript", url: "javascript" },
      { name: "React", url: "react" },
      { name: "Sanity and headless CMS", url: "headless-cms" }
  ]

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <nav>
      <ul>
        {navList.map((category, i) => (
          <li key={i}>
            <Link to={`${category.url}`} className={active === i ? "active" : ""} onClick={() => handleClick(i)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}


