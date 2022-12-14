import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Typography,
    Col,
    Row,
    Button,
    Checkbox,
    Form,
    Input,
    InputNumber,
    Select,
    message,
} from "antd";
import { useNavigate } from "react-router-dom";
import Img2 from "../../assets/images/logo.png";
import Faceboook from "../../assets/images/icon-face.png";
import Google from "../../assets/images/icon-google.png";
import { signin } from "../../api/auth"
import { authenticate } from "../../utils/localStorage";

const { TextArea } = Input;
const { Option } = Select;

const SigninPage: React.FC = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        try {
            const { data: user } = await signin(values);
            message.success("Đăng nhập thành công");
            authenticate(user, () => navigate('/'))
        } catch (err) {
            message.error("Có lỗi xảy ra");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Container2>
                <Form
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Typography.Title level={2} style={{ margin: 0 }}>
                        Đăng nhập
                    </Typography.Title>
                    <Row>
                        <Col>
                            <Form.Item
                                name="email"
                                labelCol={{ span: 24 }}
                                label="Email"
                                rules={[{ required: true, type: 'email', message: "Email không được trống" }]}
                            >
                                <Input size="large" style={{ width: "400px" }} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                labelCol={{ span: 24 }}
                                label="Mật khẩu"
                                rules={[
                                    { required: true, message: "Mật khẩu không được trống" },
                                ]}
                            >
                                <Input.Password size="large" />
                            </Form.Item>
                            <Form.Item>
								<a href="/signup">Bạn chưa có tài khoản</a>
							</Form.Item>
                            <Form.Item>
                            <Button type="primary" danger htmlType="submit" style={{ width: "400px", height: "40px" }} >
									Đăng nhập
								</Button>
                            </Form.Item>
                            <ContainerT>
                                <span>Hoặc đăng nhập bằng</span>
                                <Facebook>
                                    <Items2>
                                        <Items src={Faceboook} style={{width: "40px"}}/>
                                    </Items2>
                                    <div>
                                        <Items src={Google} style={{width: "40px"}}/>
                                    </div>
                                </Facebook>
                            </ContainerT>
                        </Col>
                    </Row>
                </Form>
                <div>
                    <UploadWrapper>
                        <Img src={Img2} />
                    </UploadWrapper>
                </div>
            </Container2>
        </div>
    );
};

const ContainerT = styled.div`
  /* width: 980px;
  margin:  auto; */
  text-align: center;
`;
const Items2 = styled.div`
  margin-right: 20px;
`;

const Facebook = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 15px;
`;

const Items = styled.img``;
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;


const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 75px;
  background-color: #f8f8f8f8;
  margin-left: 75px;
`;
const Img = styled.img`
  padding-top: 70px;
  padding-bottom: 70px;
`;
const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 250px;
  height: 50%;
`;
export default SigninPage;