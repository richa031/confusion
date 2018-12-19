//menu of dishes(component)
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';


class Menu extends Component{//adding menu component
    constructor(props){//defining constructor
        super(props);
    }

    

    render(){//will return what to display on UI
        const menu = this.props.dishes.map((dish) => {//to use state(dishes) of App component here as props
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;//we can import this wherever we want