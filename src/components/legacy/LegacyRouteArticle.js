import React from 'react'
import { useSelector } from 'react-redux'

const LegacyRouteArticle = (props) => {
    const { slug } = props;

    const legacyRoutes = useSelector((state) => {
        let data = state.firestore.data.legacyRoutes;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    
    
    let content = legacyRoutes ? legacyRoutes.filter(article => article.slug === slug) : null;
    let article = content ? content[0] : null;



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
                    <div className="route-article__stop-list">
                        <ol>
                            {article.locations.split(',').map((location,index) => <li key={`location ${index}`}>{location}</li>)}
                        </ol>
                    </div>
                </div>
            </article>
            : null}
        </>
    )
}

export default LegacyRouteArticle
