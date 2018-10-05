
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component{

    constructor(props){
        super(props)


        this.state = {
            News: JSON,
            filtered:JSON
        }
    }
    filterNews(keywords){
        let filtered = this.state.News.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        });
     this.setState({filtered:filtered});
    }

    render(){
        return(
            <div>
                <Header newsSearch={keywords=>this.filterNews(keywords)}/>
                <NewsList news={this.state.filtered}/>
            </div> 

        );
    }
}

ReactDOM.render(<App /> , document.getElementById('root'));
