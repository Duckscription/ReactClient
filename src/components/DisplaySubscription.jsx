import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import greenCircle from '../img/greenCircle.png';
// import { getAllSubs } from '../data/mockData';
import { getAllSubs, updateSub } from '../api/network';
import { formatDate } from '../api/networkUtils';
import {
  AiOutlinePlusSquare,
  AiOutlineDelete,
  AiOutlineEdit,
} from 'react-icons/ai';
import AddSubscription from './AddSubscription';
import { useForm } from 'react-hook-form';

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
  margin: auto 5px;
`;

const HeadCont = styled.h1`
  display: flex;
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  color: ${(props) => (props.strong ? '#F3477A' : 'black')};
  margin: 0px 60px;
`;

const TypeParagraph = styled.p`
  margin: auto;
  border: none;
  background-color: rgb(242, 153, 74, 0.2);
  border-radius: 15px;
  width: 132px;
  text-align: center;
  font-size: 20px;
  padding: 5px 0px;
  color: #f2994a;
`;

const Text = styled.p`
  color: ${(props) => (props.strong ? '#F3477A' : 'black')};
  font-weight: ${(props) => (props.strong ? 'bold' : 'normal')};
  font-size: 12px;
`;

const AddBtn = styled.button`
  font-size: 15px;
  font-family: Poppins;
  background-color: #71a894;
  width: 132px;
  padding: 5px 0px;
  border: none;
  border-radius: 15px;
  width: 169px;
  color: white;
  height: 40px;
  margin: auto 0px;
`;

function DisplaySubscription(props) {
  const [subsList, setSubsList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getAllSubs(props.userId).then((result) => {
      console.log('getAllSubs', result.data);
      setSubsList(result.data.subs);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const editingSubs = (subId) => (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      </form>
    </>
  );

  const subscriptions = (
    <>
      {subsList.map((subsList, i) => {
       const subId = subsList._id
        return (
          <SubsContainer key={i}>
            {subsList.title}
            <ContentWrapper>
              <TypeParagraph>{subsList.type}</TypeParagraph>
            </ContentWrapper>
            <ContentWrapper>
              <Text>
                <img src={greenCircle} />
                {formatDate(subsList.dateStart, 'd.m.yy')}~
                {formatDate(subsList.dateEnd, 'd.m.yy')}
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <Text strong>$ {subsList.price}</Text>
              
            </ContentWrapper>
            <AiOutlineEdit
              onClick={() => {
                setIsEdit(true);
                editingSubs(subId);
              }}
            />
            <AiOutlineDelete />
          </SubsContainer>
        );
      })}
    </>
  );

  return (
    <>
      <HeadCont>
        You've got &nbsp;
        <span className="red">{subsList.length} subscriptions </span>
        <AddBtn
          onClick={() => {
            setIsAdd(true);
          }}
        >
          <AiOutlinePlusSquare />
          Add New
        </AddBtn>
      </HeadCont>

      {isAdd && <AddSubscription user={props.userId} sendToRoles={setIsAdd} />}

      {isEdit ? <editingSubs /> : subscriptions}
    </>
  );
}

export default DisplaySubscription;
