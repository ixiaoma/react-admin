import React, { Component }  from 'react'
import { Form, Input, Button } from "antd";
import { LoginFn } from '../axios'
import md5 from 'js-md5';
class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            let params = {
                username: values.username,
                password: md5(values.password)
            }
            let res = await LoginFn(params)
            if(res){
                sessionStorage.setItem('access_token',res.headers.authorization)
                sessionStorage.setItem('user', values.username);
                this.props.history.push('/')
            }
          }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 18,
                offset: 6,
              },
            },
        }
        return (
            <div className='login-page'>
                <div className='login-box'>
                    <h3>信审系统</h3>
                    <Form onSubmit={this.handleSubmit} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                        <Form.Item label="用户名">
                        {getFieldDecorator('username', {
                            rules: [{
                            required: true,
                            message: '请输入用户名',
                            }],
                        })(
                            <Input placeholder="请输入用户名" />
                        )}
                        </Form.Item>
                        <Form.Item label="密码">
                            {getFieldDecorator('password', {
                                rules: [{
                                required: true,
                                message: '请输入密码',
                                }],
                            })(
                                <Input type="password" placeholder="请输入密码"/>
                            )}    
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create()(Login)