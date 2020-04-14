import React from 'react'
import { useSelector } from 'react-redux'
import './legacyRouteArticle.scss'

const LegacyRouteArticle = (props) => {
    const { slug } = props;
    console.log(slug)

    const legacyRoutes = useSelector((state) => {
        let data = state.firestore.data.legacyRoutes;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    
    
    let content = legacyRoutes ? legacyRoutes.filter(article => article.slug === slug) : null;
    let article = content ? content[0] : null;

    console.log(article)



    return (<>
        {article
            ? <article className="route-article">
                <div className="route-article__intro">
                    <h1 className="route-article__title">{article.title}</h1>
                    <h3 className="route-article__subtitle">{article.subtitle}</h3>
                </div>
                <div className="route-article__content">
                    <div className="route-article__content-intro">
                        {article.intro.split('<br>').map((line,index) => {
                            return (
                                <div key={`articleLine ${index}`}>
                                    <p className="route-article__intro-text" >{line}</p>
                                    <br/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="route-article__stop-list">
                    <div>
                        <ol className='stop-list'>
                            {article.locations.split(',').map((location,index) => <li className='stop-list__link' key={`location ${index}`}>{location}</li>)}
                        </ol>
                    </div>
                </div>
            </article>
            : null}
        </>
    )
}

export default LegacyRouteArticle
