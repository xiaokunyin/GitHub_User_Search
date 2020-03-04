import React,{Component, Fragment} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ReposList from './ReposList';
import ProfileShow from './ProfileShow';

class GitHubUserSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[],
            profile:'',
            followingUrl:'',
            followersUrl:'',
            sortDirection:'desc'
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateRepos=this.updateRepos.bind(this);
        this.updateProfile=this.updateProfile.bind(this);
        this.handleSortChange=this.handleSortChange.bind(this);
    }
    handleChange(text){
        this.setState({
            inputValue:text
        })
    }

    getRepos(username){
        return axios.get('https://api.github.com/users/' + username + '/repos',{
            params:{
                sort:'pushed',
                direction:this.state.sortDirection
            }
        });
    }

    getProfile(username){
        return axios.get('https://api.github.com/users/' + username);
    }


    updateRepos(response) {
        this.setState({
          list: response.data
        })
      }
    updateProfile(response){
        this.setState({
            profile:response.data
        })
    }

    
    handleSubmit(){
        this.getRepos(this.state.inputValue).then(this.updateRepos);
        this.getProfile(this.state.inputValue).then(this.updateProfile);
        this.setState({
            followingUrl:'https://github.com/'+this.state.inputValue+'?tab=following',
            followersUrl:'https://github.com/'+this.state.inputValue+'?tab=followers'
        })
    }

    handleSortChange(direction) {
        this.setState({ sortDirection: direction }, () => {
          this.getRepos(this.state.inputValue).then(this.updateRepos);      
        });    
      }


    render(){
        console.log(this.state.followingUrl);
        console.log(this.state.list);
        return(
            <div className='content'>
                <SearchBar
                    inputValue={this.state.inputValue}
                    sortDirection={this.state.sortDirection}
                    onHandleChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <hr/>
                <ProfileShow 
                    profileInfo={this.state.profile} 
                    followingLink={this.state.followingUrl}
                    followersLink={this.state.followersUrl}
                />
                <hr/>
                <ReposList
                    repos={this.state.list}
                    onSortChange={this.handleSortChange}
                />
            </div>
        );
    }
}
export default GitHubUserSearch;