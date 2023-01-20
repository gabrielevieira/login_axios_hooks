import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col, message } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useHistory } from 'react-router-dom';


export const Login = () => {
    const auth = useAuth()
    const history = useHistory()


    async function onFinish(values: { email: string, password: string }) {
        try {

          await  auth.authenticate(values.email, values.password)

            history.push('/profile')

        } catch (error) {
            message.error("Invalid email or password");

        }

    }

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                height: "100vh",
            }}
        >
            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )

}