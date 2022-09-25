import { useState } from 'react'
import './App.css'
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;



function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `Menu exemplo ${index + 1}`,
        }))}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Atividade 2</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Site criado utilizando o framework Ant Design, a partir de recursos de layout e UI. <br />
        <br />
<br />
<br />
<br />
        Ant Design é um padrão de design para produtos de nível corporativo que podem ser integrados a outras estruturas de front-end, como Angular, React ou Vue. A implementação oficial do Ant Design foi lançada com React, mas pode ser usada com outros frameworks JavaScript. É uma ferramenta de código aberto com aproximadamente 50,4 mil estrelas no GitHub, é a segunda biblioteca React UI mais usada no mundo. Muitas empresas estão usando esse padrão de design, como Alibaba, Tencent, Didi, etc.

      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ana Jade de Lis e Silva
    </Footer>
  </Layout>
  )
}

export default App
