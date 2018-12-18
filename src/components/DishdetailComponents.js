import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';

class Dishdetail extends Component{
    /*constructor(props){
        super(props);
        this.state = {//properties related to the component that we can make use of
            selectedDish: null,
            selectedDish: {
                comments: null
            }
        }
    }*/
   /* onDishSelect(dish) {
        this.setState({selectedDish: dish});
        this.setState({...this.state, selectedDish:{
            comments: dish.comments
        }});
    }*/
    renderComments(comments){
        if(comments==null){
            return(<div></div>);
        }
        const cmnts = comments.map((comment)=>{
           return(     
            <div key={comment.id}>
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            </div>
           );
        });
        return(
            <div className="col-12 col-md-5 mt-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
            {cmnts}
            </ul>
            </div>
        )
    }
    renderDish(dish){
        if(dish!=null){
            return (
                <div className="col-12 col-md-5 offset-md-1 mt-5 ">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
           } else {
               return(<div></div>)
           }
        
    }

    render(){
         const dish = this.props.dish;
         if(dish==null){
            return(<div></div>)
        }
        const dishItem = this.renderDish(dish);
        const commentItem = this.renderComments(dish.comments);
        return(
            <div className="row">
                {dishItem}
                {commentItem}

            </div>
        );
    }
}
export default Dishdetail;