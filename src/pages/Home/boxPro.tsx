import Image1 from "../../assets/images/docquyen.png"
import Image2 from "../../assets/images/pkapple.png"
import Image3 from "../../assets/images/danmh.png"
import Image4 from "../../assets/images/op-lung.png"
import Image5 from "../../assets/images/capsac.png"
import Image6 from "../../assets/images/pin.png"
import Image7 from "../../assets/images/tbmang.png"
import Image8 from "../../assets/images/camera.png"
import Image9 from "../../assets/images/chuot.png"
import Image10 from "../../assets/images/usb.png"
import Image11 from "../../assets/images/care.png"
import Image12 from "../../assets/images/airtag.png"
import Image13 from "../../assets/images/gaming.png"
import Image14 from "../../assets/images/chupanh.png"

import styled from 'styled-components';
import { Content } from "antd/lib/layout/layout"
import { Col, Divider, Row } from 'antd';
const BoxPro = () => {
    return (
        <>
            <Content>
                <Row style={{ padding: '20px 100px', justifyContent: 'space-between' }}>
                    <h2>PHỤ KIỆN</h2>
                    <p style={{ paddingTop: '10px', paddingRight: '40px' }}>Xem tất cả</p>
                </Row>
                <Row style={{ padding: '0 100px' }} gutter={[16, 16]}>
                    <Col span={3} style={{ backgroundColor: '#FFA3A3', borderRadius: '10px', marginLeft: '20px' }}>
                        <Name1>
                            <p>Nổi bật</p>
                        </Name1>
                        <Img1 src={Image1} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#FFB8B8', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Phụ kiện Apple</p>
                        </Name1>
                        <Img1 src={Image2} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#FF94EB', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Dán màn hình</p>
                        </Name1>
                        <Img1 src={Image3} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#E0B3FF', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Ốp lưng - Bao da</p>
                        </Name1>
                        <Img1 src={Image4} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#C6D8FB', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Cáp, sạc</p>
                        </Name1>
                        <Img1 src={Image5} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#4D91FF', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Pin dự phòng</p>
                        </Name1>
                        <Img1 src={Image6} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#85FFB1', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Thiết bị mạng</p>
                        </Name1>
                        <Img1 src={Image7} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#F5D63D', borderRadius: '10px', marginLeft: '20px' }}>
                        <Name1>
                            <p>Camera</p>
                        </Name1>
                        <Img1 src={Image8} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#FDA363', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Chuột bàn phím</p>
                        </Name1>
                        <Img1 src={Image9} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#FF6666', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Thẻ nhớ, USB</p>
                        </Name1>
                        <Img1 src={Image10} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#D6D6D6', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Apple care</p>
                        </Name1>
                        <Img1 src={Image11} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#6BCEFF', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Dây đeo Airtag</p>
                        </Name1>
                        <Img1 src={Image12} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#EFC2FF', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Gaming Gear</p>
                        </Name1>
                        <Img1 src={Image13} alt="" />
                    </Col>
                </Row>
                <Row style={{ padding: '25px 100px', justifyContent: 'space-between' }}>
                    <h2>LINH KIỆN MÁY TÍNH</h2>
                    <p style={{ paddingTop: '10px', paddingRight: '40px' }}>Xem tất cả</p>
                </Row>
                <Row style={{ padding: '0 100px' }}>
                    <Col span={3} style={{ backgroundColor: '#FFA3A3', borderRadius: '10px', marginLeft: '20px' }}>
                        <Name1>
                            <p>PC ráp sẵn CellphoneS</p>
                        </Name1>
                        <Img1 src={Image14} style={{paddingTop:'10px'}} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#FDA4AF', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>CPU</p>
                        </Name1>
                        <Img1 src={Image13} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#F9A8D4', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Mainboard</p>
                        </Name1>
                        <Img1 src={Image12} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#C4B5FD', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>RAM</p>
                        </Name1>
                        <Img1 src={Image11} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#A5B4FC', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Ổ cứng</p>
                        </Name1>
                        <Img1 src={Image10} alt="" />
                    </Col>
                    <Col span={3} style={{ backgroundColor: '#93C5FD', borderRadius: '10px', marginLeft: '15px' }}>
                        <Name1>
                            <p>Card màn hình</p>
                        </Name1>
                        <Img1 src={Image9} alt="" />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

const Name1 = styled.p`
  color: #fff;
  padding-top: 5px;
  
`
const Img1 = styled.img`
  
`


export default BoxPro