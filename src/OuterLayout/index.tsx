import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  FileOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons';

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
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default OuterLayout;
