import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'

import './not-found.styles.scss'

// Renders the 404 page.

const NotFound = () => {
  return (
    <main className="container">
      <section className="not-found">
        <div className="not-found__content">
          <h1>Oops...</h1>
          <h2>We could not find the page you were looking for.</h2>
          <CustomButton type="Link" to="/">Back to homepage</CustomButton>
        </div>
      </section>
    </main>
  )
}

export default NotFound
