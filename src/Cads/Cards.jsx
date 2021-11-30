import react, {Component} from 'react'
import img00 from '../assets/Capture.PNG';
import Card from './CardUI';

import img1 from "../assets/image-1.jpg";
import img2 from "../assets/image-11.jpg";
import img3 from "../assets/image-3.jpg";
import img4 from "../assets/image-4.jpg";
import img5 from "../assets/image-5.jpg";
import img6 from "../assets/image-6.jpg";
import img7 from "../assets/image-7.jpg";
import img8 from "../assets/image-8.jpg";
import img9 from "../assets/image-9.jpg";



class Cards extends Component{
    render(){
        return(
    <div className="content">
        <div className="wapper">
            <h1>Spacious</h1>
        <div className="text">
            <p>PLANNET</p>
            <h5>CHARACTERS</h5>
            <h6>Plannet:All</h6>
        </div>
            <div className="container-fluid d-flex justify-content-right">
            <div className="row">
            <div className="col-md-4">
            <Card imgsrc={img1} title="Brooklyn Simmons"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img2} title="Cameron Williamson"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3} title="Aleslie Alexander"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img4} title="kristin Watson"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img5}title="Jenny Wilson"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img6} title="Marvins Mckenny"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img7} title="Jerome Bell"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img8} title="Guy Hawkins"/>
            </div>
            <div className="col-md-4 mt-5">
            <Card imgsrc={img9}title="Roberts Foxs"/>
            </div>
            </div>
            </div>
        </div>
            <div className="my-card height:200px;">
                <div className="my-Card-body text-dark">
                <h4 className="my-Card-title">Jane Cooper</h4>
                <p className="Card-text text-secondary">Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.</p>
                </div>
                <div className="text col-md-12 d-flex justify-content-space-between">
                    <h5 className="text-1">planet</h5>
                    <h7 className=" text-2">Friends</h7>
                    
                </div>
                <div className="text col-md-12 d-flex justify-content-space-between">
                    <h5 className="text-1">Alpha</h5>
                    <h7 className=" text-2">23</h7>
                </div>
                <p>FRIENDS</p>
            <div className="display justify-content-center">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            <div className="display justify-content-center mt-3">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            <div className="display justify-content-center mt-3">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            <div className="display justify-content-center mt-3">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            <div className="display justify-content-center mt-3">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            <div className="display justify-content-center mt-3">
            <div className="my-image">
            <img src={img00} alt="dis-1"/>
            </div>
            <div className="word">
            <h3>Eleanor Pena</h3>
            <p>Amet minim mollit non.</p>
            </div>
            </div>
            </div>
            
    </div>   
    );
 
    }
}


export default Cards;