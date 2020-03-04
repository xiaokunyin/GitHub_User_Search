import React,{Component} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


class ProfileShow extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if (!this.props.profileInfo) {
            return null;
        }

        return(
            <div className='container'>
                <CardGroup>
                    <Card>
                        <Card.Img variant='top' src={this.props.profileInfo.avatar_url}/>
                        <Card.Body>
                            <Card.Title>{this.props.profileInfo.login}</Card.Title>
                            <Card.Text>{this.props.profileInfo.name}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Following: {this.props.profileInfo.following}</Card.Title>
                            <Card.Link href={this.props.followingLink}>Check Following</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Followers: {this.props.profileInfo.followers}</Card.Title>
                            <Card.Link href={this.props.followersLink}>Check Followers</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>


            </div>
        )
    }
}

export default ProfileShow;