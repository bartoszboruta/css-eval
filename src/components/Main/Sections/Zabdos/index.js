import React from 'react'
import { graphql } from "gatsby"

import Card from './Card'
import VideoHref from './VideoHref'

export const Zabdos = () => {
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-decoration" />
        <h3 className="section__header-title">The Zabdos Experience</h3>
        <p className="section__header-description">Whether it's your first flight or simply your latest, we work to anticipate your every need</p>
      </div>
      <div className="section__body">
        <VideoHref />
        <Card title="Buisness class" fileName="ex1.jpg" description="Arrive inspired" />
        <Card title="Economy class" fileName="ex2.jpg" description="Expect the expectional" />
        <Card title="Explore the Fleet in AR" fileName="ex3.jpg" description="Award winning technology" />
      </div>
    </section>
  )
}

export default Zabdos
