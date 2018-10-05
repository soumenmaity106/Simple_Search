import React,{Component} from 'react'


class Header extends Component{
    constructor(props){
          super(props);

          this.state = {
            keyword: ''  
          }

          
    }


    imputChange(event){
       this.setState({keyword:event.target.value});
       this.props.newsSearch(event.target.value);
    }
    render(){
        return(
            <header >
                <div className="logo" onClick={()=>{
                    console.log('clicked');
                }}>Logo</div>
                <input onChange={this.imputChange.bind(this)} />                
            </header>
        )
    }
}

export default Header;