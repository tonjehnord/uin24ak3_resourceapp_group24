import { useEffect, useState } from 'react'
import { resources } from '../assets/ressurser'
import { useParams } from 'react-router-dom'


export default function Resources() {

    const { category } = useParams()
    const [filteredResources, setFilteredResources] = useState([])

    useEffect(() => {
        const filtered = resources.filter(resource => resource.category === category)
        setFilteredResources(filtered)
    }, [category])

    return (
    <>
        <article>
            <ul>
                {filteredResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url}>{resource.title}</a>
                    </li>
                ))}
            </ul>
        </article>
    </>
    )

}