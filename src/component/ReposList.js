import React,{Component} from 'react';
import ReposHeader from './ReposHeader';
import ListGroup from 'react-bootstrap/ListGroup';
import ReposRow from './ReposRow';

class ReposList extends Component{
    constructor(props){
        super(props);

        this.handleSortChange=this.handleSortChange.bind(this);
    }

    handleSortChange(direction){
        this.props.onSortChange(direction);
    }




    render(){

        if (!this.props.repos) {
            return null;
        }

        let rows=[];
        this.props.repos.forEach(function(repo){
            rows.push(<ReposRow repo={repo} key={repo.name}/>);            
        });

        return(
            <div>
                <ReposHeader repos={this.props.repos} onSortChange={this.handleSortChange}/>

                <ListGroup className='text-left'>
                    {rows}
                </ListGroup>
            </div>
        )
    }
}


export default ReposList;