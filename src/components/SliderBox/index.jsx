import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

// 数据处理
const menuData = [{
  firstMenu: {'key': 'car_manage', 'val': '车辆管理', 'icon': 'car'},
  childMenu: [{'key': '1', 'val': '车辆管理', 'link': '/CarManage/operateManege'},{'key': '2', 'val': '门店车辆管理', 'link': 'CarManage/storeManege'}]
},
{
  firstMenu: {'key': 'order_manage', 'val': '订单管理', 'icon': 'profile'},
  childMenu: [{'key': '1', 'val': '租车订单', 'link': 'OrderManage/rentManege'},{'key': '2', 'val': '维保订单', 'link': 'OrderManage/mainteManege'}]
}]

const menuLists = menuData.map((item) =>
  <SubMenu key={item.firstMenu.key} title={<span><Icon type={item.firstMenu.icon} />{item.firstMenu.val}</span>}>
    {item.childMenu.map((childItem) => 
      <Menu.Item key={childItem.key}>
        <Link to={childItem.link}>{childItem.val}</Link>
      </Menu.Item>
    )}
  </SubMenu>
);
class SliderBox extends Component {
  state = {
  };
  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }} collapsible="true">
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
          {menuLists}
        </Menu>
      </Sider>
    )
  }
}

export default SliderBox;
