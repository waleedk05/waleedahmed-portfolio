import React from 'react'
import 'boxicons'

const Banner = () => {
  return (
    <div class='banner'>
      <div class='container'>
        <div class='row p-5' >
          <div class='col-xl-8 col-lg-8'>
            <div class='textblock'>
              <h1 >Waleed Ahmed</h1>

              <h3> FrontEnd Developer || ReactJs || Web Developer</h3>
              <p>Let's connect on social media!</p>
              <div class="social-media">

                <a href="https://www.linkedin.com/in/waleedahmed05/" target="_blank" rel="noreferrer">
                  <i class="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/waleedk05" target="_blank" rel="noreferrer">
                  <i class="uil uil-github-alt"></i>
                </a>

                <a href="https://www.instagram.com/waleedk_05/ " target="_blank" rel="nonreferrer">
                  <i class="uil uil-instagram"></i>
                </a>

              </div>
              <a href="./Waleed Ahmed CV.pdf" download class="btn mt-2">Download CV <i class="uil uil-import"></i> </a>
            </div>

          </div>
          <div class='col-xl-4 col-lg-4'>
            <img src="./Home_img.JPG" alt="" class='home-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner