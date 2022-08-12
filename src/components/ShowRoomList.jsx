import styled from 'styled-components';

export const ShowRoomList = ({ data }) => {
  console.log(data);
  return (
    <RoomList>
      <RoomListSpan>{data.name}</RoomListSpan>
      <RoomListSpan>{data.content}</RoomListSpan>
      <RoomListSpan>{data.maxPeople}명</RoomListSpan>
      <RoomListSpan>{data.minPeople}명</RoomListSpan>
      <RoomListSpan>{data.price}원</RoomListSpan>
    </RoomList>
  );
};

const RoomList = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
`;

const RoomListSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
