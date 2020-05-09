import React from 'react';
import { Cards, Chart, CountryPicker,Footer} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from './images/gocorona.jpg';
import World from './World';
class Home extends React.Component {
  state={
    data:{}, 
    country:'',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();

   this.setState({data:fetchedData});
  }
  handleCountryChange = async (country) =>   {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
  }

  render() {
const {data, country}=this.state;

    return (
      <div>
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="corona"/>
        <World/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Home;
