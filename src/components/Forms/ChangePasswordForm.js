import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons";
import {formSettings, oldPasswordRules, passwordRules, repeatPasswordRules} from "./formSettings";
import {FormLayout} from "./FormLayout";
import {useDispatch} from "react-redux";
import {changePassword} from "../../store/slices/userSlice";

export const ChangePasswordForm = () => {
    const [form] = Form.useForm();
    const [password, setPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const dispatch = useDispatch()
    const onFinish = ({oldPassword, password}) => {
        dispatch(changePassword({password, oldPassword}))
    }
    return (
        <FormLayout>
            <Form
                form={form}
                {...formSettings}
                onFinish={onFinish}
            >
                <Form.Item
                    name="oldPassword"
                    label="Old password"
                    rules={[...oldPasswordRules]}
                >
                    <Input.Password
                        size={'large'}
                        value={oldPassword}
                        prefix={<LockOutlined/>}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="New password"
                    rules={[...passwordRules]}
                >
                    <Input.Password
                        size={'large'}
                        value={password}
                        prefix={<LockOutlined/>}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm new password"
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
                        Change password
                    </Button>
                </Form.Item>
            </Form>
        </FormLayout>

    )
}

