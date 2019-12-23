import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import RouterConfig from './routers';
import './App.css';
import './public/scss/index.scss';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterConfig />
    </ConfigProvider>
  );
};

export default App;
