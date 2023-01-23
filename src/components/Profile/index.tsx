import React, { useState } from "react";
import { Row, Col, Form, Input, Checkbox, Button } from 'antd'


export const Profile = () => {
    const [item, setItem] = useState<string | any> ("Comprar leite");

     function onSubmit(ev :  React.FormEvent<HTMLInputElement> ) {
        ev.preventDefault()

        let eventTarget = ev.target as HTMLButtonElement;

        setItem((prev: string[], ) => [...prev, eventTarget.value]);   
     }     
    
    function onRemoved(itemRemoved: string){
        setItem((prev: string[]) =>  prev.filter((i: any) => i !== itemRemoved ))
    }

    

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                height: "100vh",
            }
            }
        >
            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        label="list"
                        name="list"
                        rules={[{ required: true, message: 'Please input list!' }]}
                    >
                        <Input name="newItem"/>
                    </Form.Item>
                    <Form.Item name="itemsList" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    {item.map((items: string) =>(
                        <Checkbox  key={items}>{items}                       
                        <Button onClick={onRemoved(items)}>X</Button>
                        </Checkbox>                        
                    ))}
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
