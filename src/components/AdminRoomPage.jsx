/* eslint-disable */
import styled from 'styled-components';
import { ShowRoomList } from './ShowRoomList';
// import { useState } from 'react';

export const AdminRoomPage = ({ roomData }) => {
  return (
    <RoomWrap>
      <RoomBar>
        <RoomBarSpan>객실명</RoomBarSpan>
        <RoomBarSpan>객실 정보</RoomBarSpan>
        <RoomBarSpan>최대 인원</RoomBarSpan>
        <RoomBarSpan>최소 인원</RoomBarSpan>
        <RoomBarSpan>가격</RoomBarSpan>
      </RoomBar>
      <BookLists>
        {roomData.map((data) => {
          return <ShowRoomList data={data} />;
        })}
      </BookLists>
    </RoomWrap>
  );
};

const RoomWrap = styled.div`
  width: 850px;
  height: 33px;
  margin: auto;
  margin-top: 50px;
`;

const RoomBar = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const RoomBarSpan = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  margin: auto;
  padding: 10px 0;
`;

const BookLists = styled.div`
  height: 400px;
`;
