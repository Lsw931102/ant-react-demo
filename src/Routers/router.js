import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';

// 组件引入
import app from '../components/App/index';
//车辆管理
import operateManege from '../components/CarManage/OperateMange/index';
import storeManege from '../components/CarManage/StoreMange/index';

// 订单管理
import rentManege from '../components/OrderManage/RentOrder/index';
import mainteManege from '../components/OrderManage/MainteOrder/index';

ReactDOM.render((
  <BrowserRouter>
    <Route path="CarManage/operateManege" component={operateManege}></Route>
    <Route path="CarManage/storeManege" component={storeManege}></Route>
    <Route path="OrderManage/rentManege" component={rentManege}></Route>
    <Route path="OrderManage/mainteManege" component={mainteManege}></Route>
  </BrowserRouter>
))
// const routeConfig = [
//     { path: '/',
//       component: app,
//       indexRoute: { component: app },
//       childRoutes: [
//         { path: 'CarManage',
//           childRoutes: [
//             { path: '/operateManege', component: operateManege },
//             { path: '/storeManege', component: storeManege }
//           ]
//         },
//         { path: 'OrderManage',
//           childRoutes: [
//             { path: '/rentManege', component: rentManege },
//             { path: '/mainteManege', component: mainteManege }
//           ]
//         }
//       ]
//     }
//   ]
  
//   React.render(<Router routes={routeConfig} />, document.body)

