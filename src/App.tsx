import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Header from '../src/components/Header';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './public/scss/index.scss';


const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header className="App-header" name="零壹"/>
        <Home />
      </div>
    </ConfigProvider>
  );
};

export default App;
