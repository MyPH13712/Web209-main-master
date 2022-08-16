import React from "react";
import styled from 'styled-components'
import logoImage from '../../assets/images/logo.png'
import ServiceBtn from "../Button/Service";
import AutoComplete from "../Input/AutoComplete";
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import deliveryImage from "../../assets/images/delivery.svg"
import vectorImage from "../../assets/images/vector.svg"
import cartImage from "../../assets/images/cart.svg"
import { Link, NavLink } from "react-router-dom";
type Props = {};
const Header = (props: Props) => {
    const a = JSON.parse(localStorage.getItem("user") as string);
    // console.log(a.user._id);
    const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
        // console.log(event.target.value);
        localStorage.removeItem("user");
        window.location.reload();
    };
    return (
        <Wrapper>
            <Container>
                <Link to="/">
                    <Logo src={logoImage} alt="" />
                </Link>
                <AutoComplete />
                <Sdt>
                    <div>Gói mua hàng</div>
                    <div>18002097</div>
                </Sdt>
                <Vitri>
                    <div>
                        <Image2 src={vectorImage} />
                    </div>
                    <div>
                        Cửa hàng <br />
                        gần bạn
                    </div>
                </Vitri>

                <Vitri>
                    <div>
                        <Image3 src={deliveryImage} />
                    </div>
                    <div>Tra cứu <br />đơn hàng</div>
                </Vitri>
                <Vitri>
                    <div>
                        <Image2 src={cartImage} />
                    </div>
                    <Link className="text-white" to="/cart">Giỏ hàng</Link>
                </Vitri>
                <div>
                    {a == null ? (<div>
                        <div className="dropdown">
                            <a className="dropdown-toggle text-sm text-white font-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tài khoản
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item text-sm font-normal" to={`/signin`}>Đăng nhập</Link></li>
                                <li><Link className="dropdown-item text-sm font-normal" to={`/signup`}>Đăng kí</Link></li>
                            </ul>
                        </div>
                    </div>) : (<div>
                        <div className="dropdown">
                            <a className="dropdown-toggle text-sm text-white font-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tài khoản
                            </a>
                            <ul className="dropdown-menu">
                                <li>{a.user.role == 1 ? (<div className="py-1">
                                    <NavLink to="/admin" tabIndex={1} className="dropdown-item text-sm font-normal" role="menuitem">DashBoard</NavLink>
                                </div>) : (<div></div>)}</li>
                                <li><button value="1" tabIndex={3} className="dropdown-item text-sm font-normal" role="menuitem" id="logout"
                                    onClick={(e) => handleClick(e, "clicked")}>Đăng xuất</button></li>
                            </ul>
                        </div>
                    </div>)}
                </div>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
     width: 1200px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`

const Logo = styled.img`
    width: 60px;
    height: auto;
    margin-right: 60px;
`
const Image = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 25px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Sdt = styled.div`
  font-size: 12px;
  color: white;
`;
const Vitri = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header