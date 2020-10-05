import React,{Component} from 'react';
import radium from 'radium';
import styled, { keyframes } from 'styled-components';

const bannerChange = keyframes`
  0% {
    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");
  }
  40% {
    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");
  }
  50% {
    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190524-AB6701-1920x820_v1.jpg");
  }
  90% {
    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190524-AB6701-1920x820_v1.jpg");
  }
  100% {
    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");
  }
  `;

const BannerChange = styled.div`
  width: 100%;
  height: 600px;
  padding: 0px;
  background-size: cover;
  background-position: top center;
  animation: ${bannerChange} 20s ease-in-out infinite;
  @media (max-width: 1440px) {
    height: 500px;
  }
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 930px) {
    height: 380px;
  }
  @media (max-width: 768px) {
    height: 340px;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
  @media (max-width: 375px) {
    height: 180px;
  }
  @media (max-width: 320px) {
    height: 150px;
  }   
`;

class Banner extends Component{ 
  render(){ 
    return (
      <BannerChange />
    )
  }
}

export default radium(Banner);