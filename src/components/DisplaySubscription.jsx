import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import greenCircle from '../img/greenCircle.png';
// import { getAllSubs } from '../data/mockData';
import { getAllSubs, getSub, deleteSub } from '../api/network';
import { formatDate } from '../api/networkUtils';
import {
  AiOutlinePlusSquare,
  AiOutlineDelete,
  AiOutlineEdit,
} from 'react-icons/ai';
import AddSubscription from './AddSubscription';
import { useForm } from 'react-hook-form';
import EditingSubs from './editingSubs';

export const SubsContainer = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  display: grid;
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: 3fr 1fr 1fr 0.5fr 0.5fr 0.5fr;
  margin: 40px 0px;
`;

export const ContentWrapper = styled.div`
  margin: auto 5px;
`;

export const HeadCont = styled.h1`
  display: flex;
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  color: ${(props) => (props.strong ? '#F3477A' : 'black')};
  margin: 0px 60px;
`;

export const TypeParagraph = styled.p`
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

  export const Text = styled.p`
  color: ${(props) => (props.strong ? '#F3477A' : 'black')};
  font-weight: ${(props) => (props.strong ? 'bold' : 'normal')};
  font-size: 12px;
`;

export const AddBtn = styled.button`
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
  const [subId, setSubId] = useState(false);
  const [subIdDel, setSubIdDel] = useState();
  const [editList, setEditList] = useState();

  useEffect(() => {
    getAllSubs(props.userId).then((result) => {
      // console.log('getAllSubs', result.data);
      setSubsList(result.data.subs);
    });
  }, [subsList]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
      deleteSub(subIdDel).then((result) => {
      console.log('delete', result.data);
    });
  }, [subIdDel]);


  const subscriptions = (
    <>
      {subsList.map((subsList, i) => {
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
                setSubId(subsList._id);
              }}
            />
            <AiOutlineDelete
            onClick={() => {
              setSubIdDel(subsList._id);
            }}
            />
          </SubsContainer>
        );
      })}
    </>
  );


  return (
    <>
         <div className='flex flex-center'>
          <HeadCont>
            You've got &nbsp;
            <span className="red">{subsList.length} subscriptions </span>
          </HeadCont>
          <AddBtn
            onClick={() => {
              setIsAdd(true);
            }}
          >
            <AiOutlinePlusSquare />
            Add New
          </AddBtn>
        </div>

      {isAdd && <AddSubscription user={props.userId} sendToRoles={setIsAdd} />}
      {isEdit ?
        <>  
          <EditingSubs subId={subId} sendToSub={setIsAdd}/>
        </>
        : subscriptions}
    </>
  );
}

export default DisplaySubscription;
