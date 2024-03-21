import { Link } from "react-router-dom"

export default function Nav() {
  
  const navList = [
      { name: "HTML", url: "html" },
      { name: "CSS", url: "css" },
      { name: "JavaScript", url: "javascript" },
      { name: "React", url: "react" },
      { name: "Sanity and headless CMS", url: "headless-cms" }
  ]

  return (
    <nav>
      <ul>
        {navList.map((category, i) => (
          <li key={i}>
            <Link to={`${category.url}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}


