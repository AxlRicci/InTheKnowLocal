import React from 'react';
import { Link } from 'react-router-dom'

const AuthorPage = (props) => {
    const { authors } = props
    const { slug } = props.match.params
    return (
        <div>
            {authors 
            ? (authors.map(author => {
                if (author.slug === slug) {
                    return (
                        <div className="container text-center">
                            <img className="img-fluid mx-auto d-block rounded-circle" src={author.image} alt={`${author.name}'s headshot`}/>
                            <h1>{author.name}</h1>
                            <p>{author.bio}</p>
                            <Link to={`/authors/interview/${author.id}/${author.slug}`} className="btn btn-primary">Read Interview</Link>
                        </div>
                    )
                } else {
                    return null
                }
            }))
            : null}
        </div>
    )
}

export default AuthorPage;