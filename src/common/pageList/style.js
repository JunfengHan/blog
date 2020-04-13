import styled from 'styled-components';

export const PageNumWrapper = styled.div`
  /* width: 100%; */
  height: 36px;
  padding: 3px 10px;
  background: #dddddd;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 4px;
  color: #ffffff;
  background: #f08775;
  border: none;
  cursor: pointer;
`;

export const PageNumList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 30px;
`;

export const PageNumItem = styled.li`
  list-style-type: none;
  width: 42px;
  margin: 0 4px;
  border-radius: 2px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background: #f08775;
  cursor: pointer;
  &.pageActive {
    background: #e54e34;
  }
`;