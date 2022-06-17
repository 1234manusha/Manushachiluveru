import React, { Component } from 'react'
import {footer} from 'react-bootstrap';


export class Footer1 extends Component {

    refertopage(){
        window.location.href=`/AskHelp`
      }

  render() {
    return (
        <footer>
       <div className="container-fluid text-center" style={{ backgroundColor: "black", color: "blue" }}>
            <div className="py-5">
                <div className="col-12">
                    <h2 className="text-light py-2">Interested in working with us ?</h2>
                    <button className="btn btn-outline-light btn-lg">Let's Talk</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 py-3 text-center align-items-center">
                    <h5 className="text-info pb-3">More Links</h5>
                    <a className="text-light d-block">Blogs</a>
                    <a  className="text-light d-block">Home</a>
                    <a href="#"  className="text-light d-block" onClick={() => this.refertopage()}>Contact Us</a>
                    <a href="#" className="text-light">Write a recommendation <i className="fas fa-heart text-light"></i>
                    </a>
                </div>
                <div className="col-12 col-md-4 text-light text-justify py-3"> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fuga facilis temporibus! Accusantium corporis culpa ab, numquam quis soluta molestiae veritatis doloremque architecto repellat explicabo recusandae perspiciatis temporibus atque ipsam?
                    </p>
                </div>
                
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">Social</h5>
                    <a href="#">
                        <i className="fab fa-linkedin text-light h1 d-block"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope-square text-light h1 d-block"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github text-light h1 d-block"></i>
                    </a> 
                </div>                
            </div>
            
                <div className="col-12 text-muted py-3">
                    <p>Copyright @ Rushvik Allampally 2021</p>

                </div>
            
        </div>
    </footer>
    )
  }
}

export default Footer1