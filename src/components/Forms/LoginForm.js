import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons";
import {emailRules, formSettings, passwordRules} from "./formSettings";
import {FormLayout} from "./FormLayout";
import {useDispatch} from "react-redux";
import {userLogin} from "../../store/slices/userSlice";

export const LoginForm = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onFinish = (values) => {
        dispatch(userLogin(values))
    }
    return (
        <FormLayout>
            <Form
                form={form}
                {...formSettings}
                onFinish={onFinish}
            >
                <Form.Item
                    label={'Email'}
                    name={'email'}
                    required
                    rules={[...emailRules]}
                >
                    <Input
                        size={'large'}
                        type={'email'}
                        value={email}
                        placeholder={'example: index@index.com'}
                        prefix={<UserOutlined/>}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[...passwordRules]}
                >
                    <Input.Password
                        size={'large'}
                        value={password}
                        prefix={<LockOutlined/>}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{
                    span: 16,
                    offset: 9,
                }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </FormLayout>

    )
}