import React from 'react';
import NewsIte from './news_list_item';

const newslist = (props) =>{
    const items = props.news.map((item)=>{
        return(
           <NewsIte key={item.id} item={item}/>
        )
    });
    return(
        <div>
           {items}
        </div>
    )
}

export default newslist;