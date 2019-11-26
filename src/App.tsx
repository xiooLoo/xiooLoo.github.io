import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Header from '../src/components/Header';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header className="App-header" name="Jinpeng~"/>
        <Home />
      </div>
    </ConfigProvider>
  );
};

export default App;
