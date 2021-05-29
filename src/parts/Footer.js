import React from 'react';
import { FaFacebook,FaTwitter,FaGithub } from 'react-icons/fa';

function Footer () {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-4 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item" >
                  <a href="/">
                    <h1 className="text-dark"><FaFacebook/></h1>
                  </a>
                </li>
                <li className="list-inline-item " style={{padding:20}}>
                  <a href="/">
                    <h1 className="text-dark"><FaTwitter/></h1>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <h1 className="text-dark"><FaGithub/></h1>
                  </a>
                </li>
              </ul>
              <p className=" text-center copyright text-muted">Copyright &copy;Atsaris Website 2021</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;