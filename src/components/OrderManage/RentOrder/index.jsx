import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

class ContentBox extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>订单管理</Breadcrumb.Item>
          <Breadcrumb.Item>租车订单</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        租车订单
        </Content>
      </Layout>
    )
  }
}

export default ContentBox;
