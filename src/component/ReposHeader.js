import React,{Component} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';

class ReposHeader extends Component{
    constructor(props){
        super(props);

        this.handleSortChange=this.handleSortChange.bind(this);
    }

    handleSortChange(e){
        this.props.onSortChange(e.target.value);
    }

    render(){
        if (!this.props.repos) {
            return null;
          }
        return(
            <Container>
                <Row>
                    <Col md={8} className='text-left'><h4>Repositories</h4></Col>

                    <Col md={4}>
                        <Form.Control as='select' placeholder='select' onChange={this.handleSortChange}>
                            <option value='desc'>Most Recent</option>
                            <option value='asc'>Oldest First</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row className='text-left'>
                    <Col md={12}>
                        <p>Found {this.props.repos.length} Repositories.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default ReposHeader;