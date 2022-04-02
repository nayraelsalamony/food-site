import React from "react";
import {Carousel ,} from "react-bootstrap";
import { Component } from "react";
class Slider extends Component {
    render() {
        return(
            <Carousel fade  style={{paddingRight:"50px",paddingLeft:"50px",paddingTop:"50px"}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/news/manufacturers/dessert-boards-rise-as-top-trend-with-unlimited-marketing-potential/13074653-1-eng-GB/Dessert-boards-rise-as-top-trend-with-unlimited-marketing-potential.jpg"
                style={{height:'300px' , width:'400px'}}
                alt="First slide"
                
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://visualsonline.cancer.gov/retrieve.cfm?imageid=2397&dpi=300&fileformat=jpg"
                style={{height:'300px' , width:'400px'}}
                alt="Second slide"
               
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg"
                style={{height:'300px' , width:'400px'}}
                alt="Third slide"
            
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 
        )
    }
}

export default Slider;