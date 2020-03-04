import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import { Col, Row, Form } from "react-bootstrap";

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(e.target.value);
    }

    handleTextChange(e){
        this.props.onHandleChange(e.target.value);
    }

    render(){
        return(
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId='formInlineName'>
                        <Form.Label column sm={4}><b>GitHub Username:</b></Form.Label>
                        <Col sm={8}>
                            <Form.Control type='text' placeholder='Enter Username Here' value={this.props.inputValue} onChange={this.handleTextChange}></Form.Control>
                        </Col>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SearchBar;