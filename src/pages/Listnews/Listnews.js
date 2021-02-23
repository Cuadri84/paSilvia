import React, { Component } from "react";
import axios from 'axios';

class Listnews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news:[]
    }
  }
  componentDidMount() {
    
    setTimeout(() => {
      axios.get(`http://newsapi.org/v2/everything?q=nba&language=es&from=2021-01-23&sortBy=publishedAt&apiKey=c6e2487aede141e79d7b3cef2ca3345e`)
      
      .then(res => {
        const news = res.data;
        this.setState( {news: news.articles} );
        console.log(news.articles)
      })
    },1000);
    
  }
  //aqui arriba hace el fetch de la app y debajo en el render haciendole el map lo muestra

  render() {
    return (
      <div>
      <h3>Noticias ApiNews</h3>
      <ul>
        {this.state.news.map((noticia,i) => 
        <li key={i}>
        
        {noticia.title}
        
        </li>)}
        {/* {noticia.name}, {noticia.email} */}
      </ul>
      </div>
    )
  }
}

export default Listnews;
