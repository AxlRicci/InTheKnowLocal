import React, { useEffect } from 'react';
import HeaderGallery from './HeaderGallery'
import IssueHighlights from './IssueHighlights'

import './Home.scss'
import './HeaderGallery.scss'
import './IssueHighlights.scss'


const Home = () => {
    useEffect(() => {document.title = 'In The Know Local'})
        return (
            <div>
                <HeaderGallery/>
                <IssueHighlights toRender={9} />
            </div>
        )
    }

export default Home;