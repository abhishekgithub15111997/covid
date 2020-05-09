import React from 'react';
import Cards from './components/CardsWorld/CardsWorld';
import { fetchData } from './api/index1';
import styles from './World.module.css';

class World extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data:fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
      </div>
    );
  }
}

export default World;