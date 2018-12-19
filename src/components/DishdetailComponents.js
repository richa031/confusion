import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';

    
    function RenderComments({comments}){
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
    function RenderDish({dish}){
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

    const Dishdetail = (props) => {
         const dish = props.dish;
         if(dish==null){
            return(<div></div>)
        }
        
        return(
            <div className="row">
                <RenderDish dish = {props.dish} />
                <RenderComments comments = {props.dish.comments} />

            </div>
        );
    }

export default Dishdetail;