import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons";
import {emailRules, formSettings, passwordRules, repeatPasswordRules} from "./formSettings";
import {FormLayout} from "./FormLayout";
import {useDispatch} from "react-redux";
import {userRegister} from "../../store/slices/userSlice";

export const SignUp = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const onFinish = ({email, password}) => {
        dispatch(userRegister({email, password}))
    }

    return (
        <FormLayout>
            <Form
                form={form}
                {...formSettings}
                onFinish={onFinish}
                scrollToFirstError
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
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[...repeatPasswordRules]}
                >
                    <Input.Password
                        size={'large'}
                        prefix={<LockOutlined/>}
                        placeholder="confirm password"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{
                    span: 16,
                    offset: 9,
                }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </FormLayout>

    )
}