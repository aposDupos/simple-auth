import React from "react";
import {Link, Outlet} from "react-router-dom";
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
    return (
        <Layout>
            <Header style={{background: "white"}}>
                <Row justify={'center'}>
                    <Col span={8}>
                        <Menu mode={"horizontal"}>{
                            navItems.map(({to, name, icon}) => (
                                <Menu.Item key={name} icon={icon}>
                                    <Link to={to}>{name}</Link>
                                </Menu.Item>
                            ))
                        }
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>
                2021
            </Footer>
        </Layout>
    )
}