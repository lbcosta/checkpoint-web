import React from 'react';
import { PageHeader } from 'antd';

// import { Container } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <PageHeader
      backIcon={false}
      title={title}
      style={{
        background: '#fff',
        borderTop: '1px solid #ebedf3',
      }}
    />
  );
};

export default Header;
