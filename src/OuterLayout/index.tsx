import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, MobileOutlined } from '@ant-design/icons';

// import { Container } from './styles';

const { Header, Sider, Content } = Layout;

const logoStyle = {
  height: '28px',
  margin: '16px',
  background: 'rgba(255, 255, 255, 0.3)',
};

const OuterLayout: React.FC = ({ children }) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isMenuCollapsed}
        onCollapse={() => setIsMenuCollapsed(!isMenuCollapsed)}
      >
        <div style={logoStyle} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MobileOutlined />}>
            <Link to="/devices">Dispositivos</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default OuterLayout;
