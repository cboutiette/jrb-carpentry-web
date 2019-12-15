import { Layout, Menu } from 'antd';
import React from 'react';
import logo from './jrb-logo.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">Get a Quote</Menu.Item>
            <Menu.Item key="4">About</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p style={{ padding: '0 64px', marginTop: 64 }}>
                JRB Carpentry Coming Soon...
              </p>
            </header>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>JRB Carpentry ©2019 Created by Chris Boutiette</Footer>
      </Layout>
    </div>
  );
}

export default App;
