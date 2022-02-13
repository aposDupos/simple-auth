import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";
import {Col, Layout, Menu, Row} from "antd";
import {EditOutlined, HomeOutlined, IdcardOutlined} from "@ant-design/icons";

const {Header, Content, Footer} = Layout
export const BaseLayout = () => {
    const navItems = [
        {
            to: '/',
            name: 'Login',
            icon: <HomeOutlined/>
        }, {
            to: '/register',
            name: 'Register',
            icon: <IdcardOutlined/>
        }, {
            to: '/change-password',
            name: 'Change password',
            icon: <EditOutlined/>
        },
    ]
    let location = useLocation()
    return (
        <Layout style={{height: '100vh'}}>
            <Header style={{background: "white"}}>
                <Row justify={'center'}>
                    <Col span={8}>
                        <Menu selectedKeys={location.pathname} mode={"horizontal"}>{
                            navItems.map(({to, name, icon}) => (
                                <Menu.Item key={to} icon={icon}>
                                    <Link to={to}>{name}</Link>
                                </Menu.Item>
                            ))
                        }
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content style={{
                padding: '64px',
                width: '100%', height: '100%'
            }}>
                <Row style={{height: '100%'}} align={'middle'} justify={'center'}>
                    <Col span={24}>
                        <Outlet/>
                    </Col>
                </Row>
            </Content>
            <Footer>
                2022
            </Footer>
        </Layout>
    )
}