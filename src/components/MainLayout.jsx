import React from 'react';
import {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined, MinusOutlined, PlusOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import {Avatar, Button, Layout, Menu, theme} from 'antd';

import {Link, Outlet} from "react-router-dom";
import Main from "./Main";

const MainLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {Header, Sider, Content} = Layout;

    return (

        <Layout style={{ height:"100vh"}}>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key:'1',
                            icon: <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />,
                            label: <Link
                                to='/main'>
                                Home
                            </Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: <Link
                                to='/main/projects'>
                                Проекты
                            </Link>,
                        },
                        {
                            key: '4',
                            icon: <PlusOutlined />,
                            label: <Link
                                to='/main/tasks'>
                                Задачи
                            </Link>,
                        },
                        {
                            key: '5',
                            icon: <MinusOutlined />,
                            label: <Link
                                to='/secure/delete-films'>
                                Пользователи
                            </Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>

    );
};

export default MainLayout;