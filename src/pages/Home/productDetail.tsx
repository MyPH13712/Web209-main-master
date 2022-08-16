import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAllCate } from "../../api/category";
import { read } from "../../api/product";
import Pro1 from "../../../assets/images/Pro1.png";
import { ProductType } from "../../types/product";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<any>([]);
  const { id } = useParams();
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);
  const dispatch = useDispatch();
  const addToCart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
    message.success("Thêm vào giỏ hàng thành công!");
  };
  return (
    <Container>
      <NamePro>

        <h1>{product.name}</h1>
      </NamePro>
      <Main>

        <div>
          <div>
            <ImgPro src={product.image} />
          </div>
        </div>

        <div>
          <Price>
            <SaleOff>{product.saleOffPrice} đ</SaleOff>
            <OriginalPrice>{product.originalPrice} đ</OriginalPrice>
          </Price>
          <div>
            {product.description}
          </div>
          <Items2>
            <div>
              <Button type="primary" shape="round" onClick={() => addToCart(product)} danger style={{ width: "230px", height: '35px' }}>Mua Hàng</Button>
            </div>
            <CartItems>
              <div>
                <ShoppingCartOutlined style={{ width: "50px" }} />
              </div>
              <button >Thêm vào giỏ hàng</button>
            </CartItems>
          </Items2>
        </div>
      </Main>
      {/* Sản phẩm cùng loại */}
      {/* <div>
        <div>Sản phẩm cùng loại</div>

        <Coll>
          <div>

            <img src="" alt="" />
            <h3>name</h3>
            <div>
              <span>giá</span>
              <span>giá</span>
            </div>
          </div>
          <div>sp2</div>
          <div>sp3</div>
          <div>sp4</div>
          <div>sp5</div>
        </Coll>

      </div> */}


      {/* đặc điểm nổi bật */}
      <div>
        <Items3>
          <NameDD>Đặc điểm nổi bật</NameDD>
          <div>
            <SpanN>
              {product.feature}
            </SpanN>{" "}
            <br />
            <SpanN>
              {product.shortDesc}
            </SpanN>{" "}
            <br />
            <SpanN>
              {product.description}
            </SpanN>{" "}
            <br />
          </div>
        </Items3>
      </div>

      <div>
        <InButton>Xem Thêm</InButton>
      </div>

    </Container>
  );
};
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const NamePro = styled.div`
float: left;
margin: 15px 0;
`
const Main = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  margin-top: 20px;
`;
const ImgPro = styled.img`
  width: 350px;
  height: 350px;
`;
const Coll1 = styled.div`
  display: flex;
  /* padding-right: 15px; */
`;
const Price = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const OriginalPrice = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;
const SaleOff = styled.div`
color: red;
  font-size: 16px;
  
`;
const Items2 = styled.div`
  display: flex;
  margin-top: 200px;
`;
const Coll = styled.div`
  display: flex;
  justify-content: space-between;
`
const CartItems = styled.div`
  display: flex;
`;

const Items3 = styled.div`
  background-color: #f2f2f2;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 0;
`;
const NameDD = styled.div`
  text-align: center;
  color: red;
  font-size: 18px;
`;
const SpanN = styled.p`
  padding-left: 20px;
  font-size: 14px;
 
`;
const InButton = styled.button`
  border: 1px solid #000000;
  padding: 2px 60px;
  box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.1);
  border-radius: 10px;
`;
export default ProductDetail;