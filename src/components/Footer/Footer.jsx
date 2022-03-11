import {
  AddLocationAltOutlined,
  AlternateEmailOutlined,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocalPhoneOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SkyShop</Logo>
        <Desc>
          SkyShopper is an Emirates NBD e-commerce venture specially designed
          and initiated to give all its customers a friendly and exclusive
          platform to get the smartest and best transaction in town! These Terms
          and Conditions of use and any additional terms posted on this site
          together constitute the entire agreement between Company and you with
          respect to your use of this site.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AddLocationAltOutlined style={{ marginRight: "10px" }} />
          622 Dixie Path, South Carolina, United States
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlined style={{ marginRight: "10px" }} />
          +254 711 427 489
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlined style={{ marginRight: "10px" }} />
          Contact@skyShop.net
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtX3IMq6MGVhb7bkdtpJLmrjuk4S7FXXux2Lix5thALiOiT26Qkxs2W1u_tdWQ5Uqm2A&usqp=CAU" />
      </Right>
    </Container>
  );
};

export default Footer;
