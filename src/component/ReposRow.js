import React,{Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TimeAgo from 'react-timeago';
import { Container, Col,Row } from 'react-bootstrap';


class ReposRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListGroup.Item action href={this.props.repo.html_url}>
                <b>{this.props.repo.name}</b><br/>
                <i className='small'>{this.props.repo.language}</i><br/>
                {this.props.repo.description}<br/>
                <span className='small'>Update<TimeAgo date={this.props.repo.pushed_at}/></span>
            </ListGroup.Item>
        );
    }
}

export default ReposRow;