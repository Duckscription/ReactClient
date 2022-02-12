import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import greenCircle from '../img/greenCircle.png'
import { getAllSubs, } from "../data/mockData"
import { AiOutlinePlusSquare } from "react-icons/ai";

const SubsContainer = styled.div`
  display: flex;
  font-family: Montserrat;
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  margin:auto 5px;
`;

const HeadCont = styled.h1`
  display: flex;
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  color: ${props => props.strong ? "#F3477A" : "black"};
`;

const TypeParagraph = styled.p`
  margin: auto;
  border: 1px solid;
  border-radius: 15px;
  width: 132px;
  text-align: center;
  font-size:20px;
  padding: 5px 0px;
`;

const Text = styled.p`
  color: ${props => props.strong ? "#F3477A" : "black"};
  font-weight: ${props => props.strong ? "bold" : "normal"};
  font-size: 12px;
  
`;

const AddBtn = styled.button`
  font-size: 15px;
  font-family:Poppins;
  background-color:#71A894;
  width : 132px;
  padding: 5px 0px;
  border: none;
  border-radius: 15px;
  width: 169px;
  color: white;
`

function DisplaySubscription(props) {

  const [subsList, setSubsList] = useState([]);

  useEffect(() => {
      getAllSubs(props.user).then((result) => {
      console.log('Sources', result.subs);
        setSubsList(result.subs);
      });

  }, []);

  console.log(subsList)

  const subscriptions = (
    <>
    {subsList.map((subsList, i) => {
      return  <SubsContainer key={i}>
        <p>{subsList.title}</p>
        <ContentWrapper>
          <TypeParagraph>{subsList.type}</TypeParagraph>
        </ContentWrapper>
        <ContentWrapper>
          <Text>
            <img src={greenCircle} />
            {subsList.dateStart}~{subsList.dateEnd}
          </Text>
        </ContentWrapper>
        <ContentWrapper>
          <Text strong>$ {subsList.price}</Text>
        </ContentWrapper>
      </SubsContainer>
    })}
  </>
  )


  return (
    <>
      <HeadCont>
        You've got<span className="red">2 subscriptions</span>
      </HeadCont>
      <AddBtn>
        <AiOutlinePlusSquare/>
        Add New
      </AddBtn>
        {subscriptions}
    </>
  )
}

export default DisplaySubscription