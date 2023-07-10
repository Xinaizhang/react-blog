import React from 'react'
import Logo from "../img/logo_footer.png"

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth",
    });
  }

  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by <b>Xinai</b> <i>2023.7</i>
      </span>
      <button onClick={scrollToTop}>Back to top</button>
    </footer>
  )
}

export default Footer