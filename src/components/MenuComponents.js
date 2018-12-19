//menu of dishes(component)
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';

    function RenderMenuItem({ dish, onClick }){
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {//to use state(dishes) of App component here as props
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
            
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
            </div>
        );
    
    }
export default Menu;//we can import this wherever we want