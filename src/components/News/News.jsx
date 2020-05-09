import React from 'react';
import coronaUpdate from '../../images/news1.jpg';
import Footer from '../Footer/Footer';
class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    fetch('https://cryptic-ravine-96718.herokuapp.com/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      news: myJson.news
    })
  });
  }
  render() {
    console.log(this.state)
    return (
    <div>
      <img  src={coronaUpdate} alt="corona-update" style={{height:200 , marginLeft:50}}/>
        <div>
          {this.state.news.map((item, index) => {
            return (
              <div className="container" style={{marginTop:50, color:'black'}}>
              <div className="card z-depth-0 post-summary">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">{item.title}</span>
                <div className="card-action">
                  <a href={item.link} rel="noopener noreferrer" target="_blank">Read More</a>
                </div>
              </div>
              </div>
              </div>
            )
          })}
        </div>
        <Footer/>
        </div>
    )
  }
}

export default News;
