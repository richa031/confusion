//menu of dishes(component)
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';
import Dishdetail from './DishdetailComponents';

class Menu extends Component{//adding menu component
    constructor(props){//defining constructor
        super(props);

        this.state = {//properties related to the component that we can make use of
            selectedDish: null,
            selectedDish: {
                comments: null
            }
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish
           
        });
    }

    render(){//will return what to display on UI
        const menu = this.props.dishes.map((dish) => {//to use state(dishes) of App component here as props
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
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
                    <Dishdetail dish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}

export default Menu;//we can import this wherever we want