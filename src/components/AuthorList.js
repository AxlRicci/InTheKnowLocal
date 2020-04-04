import React from 'react';
import { Link } from 'react-router-dom'

const AuthorList = (props) => {
    const {authors} = props
    return (
        <div className="container">
            <div className="row">
                {authors 
                ? authors.map(author => {
                    return (
                        <div class="card-deck mx-auto">
                            <div class="card mx-4 my-2 border-light" style={{width: 18 + 'rem'}}>
                                <img src={author.image} class="card-img-top" alt="..."></img>
                                <div class="card-body text-center">
                                    <h5 class="card-title">{author.name}</h5>
                                    <p class="card-text">{author.intro}</p>
                                    <Link to={`/authors/bio/${author.slug}`} className="btn btn-primary">Read more</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                : null}
            </div>
        </div>
    )
}

export default AuthorList