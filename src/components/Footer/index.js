import React from 'react'
import Image from '../shared/Image'

export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__navigation">
          <Image maxWidth={600} alt="Gatsby in Space" filename={'logo.png'} className="footer__image" />
          <div className="footer__navigation-container">
            <div className="footer__navigation-group">
              <h3 className="footer__navigation-group-title">About us</h3>
              <div className="footer__navigation-items">
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
              </div>
            </div>
            <div className="footer__navigation-group">
              <h3 className="footer__navigation-group-title">Service</h3>
              <div className="footer__navigation-items">
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
              </div>
            </div>
            <div className="footer__navigation-group">
              <h3 className="footer__navigation-group-title">Contact</h3>
              <div className="footer__navigation-items">
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
              </div>
            </div>
            <div className="footer__navigation-group">
              <h3 className="footer__navigation-group-title">Connect</h3>
              <div className="footer__navigation-items">
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
                <a className="footer__navigation-item" href="#1">Company info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__additional">
          <a className="footer__additional-url" href="#1">Zabdos airways. All rights reserved</a>
          <a className="footer__additional-url" href="#1">Cookie policy</a>
          <a className="footer__additional-url" href="#1">Legal</a>
          <a className="footer__additional-url" href="#1">Privacy</a>
          <a className="footer__additional-url" href="#1">Accessability</a>
          <a className="footer__additional-url" href="#1">Optional reserves and fee</a>
          <a className="footer__additional-url" href="#1">Cookie consistent</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer