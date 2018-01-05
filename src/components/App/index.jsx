import React, { Component } from 'react';
import NavBox from '../NavBox/index';
import ContentBox from '../ContentBox/index';
import SliderBox from '../SliderBox/index';
import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBox />
        <Layout>
          <SliderBox />
          <ContentBox />
        </Layout>
      </Layout>
    )
  }
}

export default App;
