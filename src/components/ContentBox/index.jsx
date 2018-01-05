import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class ContentBox extends Component {

  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          Welcome!!
        </Content>
      </Layout>
    )
  }
}

export default ContentBox;
