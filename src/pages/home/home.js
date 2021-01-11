import React, { useEffect } from 'react';
import HeaderGallery from '../../components/header-gallery/header-gallery.component';
import MosaicIssueGallery from '../../components/mosaic-issue-gallery/mosaic-issue-gallery.component';


const Home = () => {
    useEffect(() => {document.title = 'In The Know Local'})
        return (
            <main>
                <HeaderGallery/>
                <MosaicIssueGallery />
            </main>
        )
    }

export default Home;