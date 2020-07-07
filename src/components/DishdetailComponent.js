import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        const cm = comments.map((comment)=>{
            return (
                <li><p>{comment.comment}<br/>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });
        if (cm == null) {
            return <div></div>;
        }
        else {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cm}
                    </ul>
                </div>
            );
        }
    }

    render() {
        if (this.props.dish == null){
            return <div></div>;
        }
        else {
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)},
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
    }
}

export default Dishdetail;