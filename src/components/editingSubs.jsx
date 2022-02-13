import React from 'react';
import { useEffect, useState } from 'react';
import { getSub } from '../api/network';
import { SubsContainer, ContentWrapper, TypeParagraph, Text} from './DisplaySubscription';

function EditingSubs(props) {
  const [subsList, setSubsList] = useState([]);
  const [editList, setEditList] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
      getSub(props.subId).then((result) => {
      console.log('getSubs', result.data.sub);
        setEditList(result.data.sub);
        setIsEdit(true);
    });
  }, []);
  console.log(editList);

  const editSubscription = (editList) => (
    <>    <form>
      <SubsContainer >
        <input defaultValue={editList.title}>
        </input>
            <ContentWrapper>
              <TypeParagraph>{editList.type}</TypeParagraph>
            </ContentWrapper>
            <ContentWrapper>

            </ContentWrapper>
            <ContentWrapper>
              <Text strong>$ {editList.price}</Text>
            </ContentWrapper>

          </SubsContainer>
      </form>
    </>
  );

  return (
    <div>
      {isEdit ?
      editSubscription(editList)
      :  <>  
        
      </>}
    </div>
  )
}

export default EditingSubs