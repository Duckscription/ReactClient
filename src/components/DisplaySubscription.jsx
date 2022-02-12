import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import greenCircle from '../img/greenCircle.png'
import { getAllSubs, } from "../data/mockData"
import { AiOutlinePlusSquare, AiOutlineDelete,  AiOutlineEdit } from "react-icons/ai";
import AddSubscription from './AddSubscription';

const SubsContainer = styled.div`

  font-family: Montserrat;
  font-size: 24px;
  display: grid;
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: 3fr 1fr 1fr 0.5fr 0.5fr 0.5fr;
  margin: 40px 0px;

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
  border: none;
  background-color: rgb(242, 153, 74, 0.2);
  border-radius: 15px;
  width: 132px;
  text-align: center;
  font-size:20px;
  padding: 5px 0px;
  color: #F2994A;
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
  height: 40px;
  margin: auto 0px;
`

function DisplaySubscription(props) {

  const [subsList, setSubsList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

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
        {subsList.title}
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
        <AiOutlineEdit />
        <AiOutlineDelete />
      </SubsContainer>
    })}
  </>
  )


  return (
    <>
      <HeadCont>
        You've got<span className="red">{subsList.length} subscriptions</span>
        <AddBtn onClick={() => {
            setIsAdd(true);
          }}
        >
          <AiOutlinePlusSquare/>
          Add New
        </AddBtn>
      </HeadCont>

      {isAdd && (
        <AddSubscription user={props.user} sendToRoles={setIsAdd} />
      )}
        {subscriptions}
    </>
  )
}

export default DisplaySubscription