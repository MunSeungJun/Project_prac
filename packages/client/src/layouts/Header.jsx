import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import LogoutButton from '../features/auth/components/LogoutButton';
import '../styles/header.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 
  return (
    <header>
      <div className="top_bar">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
      </div>
      <Container>
        <div className="gnb_wrap d-flex justify-content-between align-items-center">
          <div className="gnb_title">
            <h2>exclusive</h2>
          </div>
          <div className="gnb_content d-flex gap-3 align-items-center">
            <nav className="gnb_content_link_wrap d-flex gap-3">
              <NavLink to="">Home</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="signup">Sign Up</NavLink>
              {isAuthenticated ? <LogoutButton/> : <NavLink to="signin">Sign In</NavLink> }
            </nav>
            <div className="gnb_content_search_box">
              <Form>
                <label htmlFor="search"></label>
                <input type="text" id='search' name='search' placeholder='찾고싶은 상품을 검색하세요!' />
                <button type="submit" className='gnb_content_search_box_button d-flex'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </Form>
            </div>
            <div className="gnb_content_button_wrap d-flex gap-3">
              <Link to={isAuthenticated ? 'user' : 'signin'} className="gnb_content_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <p>마이쇼핑</p>
              </Link>
              <Link to={isAuthenticated ? 'cart' : 'signin'} className="gnb_content_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <p>장바구니</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </header>
  );
};

export default Header;
