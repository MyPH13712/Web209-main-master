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
  Image,
} from "antd";
import { parsePath, useNavigate, useParams } from "react-router-dom";

import { upload } from "../../../api/images";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CategoryType } from "../../../types/category";
import { read, update } from "../../../api/product";
import { getAllCate } from "../../../api/category";


const { TextArea } = Input;
const { Option } = Select;
const ProductEdit: React.FC = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");
  // categories
  const [cate, setCate] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCate = async () => {
      const { data } = await getAllCate();
      setCate(data);
    };
    getCate();
  }, []);
  // console.log(cate);
  // Products
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      form.setFieldsValue(data);
      // console.log(data);
    };
    getProduct();
  }, []);
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result as string);
    };
  };

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      // console.log(data);
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinish = async (values: any) => {
    const product = {
      id: id,
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      feature: values.feature,
      description: values.description,
      shortDesc: values.shortDesc,
      image: values.image,
      categories: values.categories
    }
    if (values.img) {
      product.image = uploadedImage
    }
    // console.log("Success:", values);
    try {
      const data = await update(product);
      message.success("C???p nh???t th??nh c??ng");
      navigate(-1);

    } catch (err) {
      message.error("C?? l???i x???y ra");
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        // name="product"
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelCol={{ span: 24 }}
      >
        <Breadcrumb>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Ch???nh s???a
          </Typography.Title>
        </Breadcrumb>
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item valuePropName="src" name="image">
              <Image />
            </Form.Item>
            <Container>
              <Form.Item name="img">
                <UploadWrapper>
                  {uploadedImage ? (
                    <ImagePreview style={{}} src={uploadedImage} alt="Image" />
                  ) : (
                    <UploadIcon>
                      <PlusCircleOutlined style={{ fontSize: 30 }} />
                      <input
                        style={{ display: "none" }}
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        name="image"
                        onChange={handleChangeImage}
                      />
                    </UploadIcon>
                  )}
                </UploadWrapper>
              </Form.Item>
              <Form.Item
                name="shortDesc"
                labelCol={{ span: 24 }}
                label="M?? t??? ng???n"
                rules={[{ required: true, message: "M?? t??? ng???n" }]}
              >
                <TextArea name="shortDesc" />
              </Form.Item>
            </Container>
          </Col>
          <Col span={14}>
            <Typography.Title level={5}>Th??ng tin s???n ph???m</Typography.Title>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="T??n s???n ph???m"
              rules={[
                { required: true, message: "T??n s???n ph???m kh??ng ???????c tr???ng" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Gi?? g???c"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Gi?? s???n ph???m kh??ng ???????c tr???ng",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Gi?? khuy???n m??i"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Gi?? s???n ph???m kh??ng ???????c tr???ng",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Ph??n lo???i"
                  name="categories"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    size="large"
                  >
                    <option>Chon danh m???c</option>
                    {cate &&
                      cate.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="?????c ??i???m n???i b???t"
              rules={[
                {
                  required: true,
                  message: "?????c ??i???m s???n ph???m kh??ng ???????c b??? tr???ng",
                },
              ]}
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="M?? t??? s???n ph???m"
              rules={[
                {
                  required: true,
                  message: "M?? t??? s???n ph???m kh??ng ???????c b??? tr???ng",
                },
              ]}
            >
              <TextArea name="description" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
               C???p nh???t s???n ph???m
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 13px;
`;
const Container = styled.div``;

const Label2 = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;
export default ProductEdit;