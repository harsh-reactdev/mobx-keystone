import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  background-color: black;
  color: crimson;
  text-align: center;
  line-height: 76px;
  font-family: 'Russo One', sans-serif;
  font-size: 42px;
`;

export const StyledInputArea = styled.div`
  /* display: grid;
  grid-template-columns: auto auto auto auto auto; */
  background-color: #2196f3;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: white;
`;

export const CategoryDropDown = styled.select`
  margin-top: 10px;
  height: 30px;
  width: 200px;
  border: white;
  box-shadow: 2px 2px 2px 2px #eeeeee;
  float: left;
  margin-left: 5px;
`;

export const SearchIcon = styled.button`
  height: 30px;
  width: 30px;
  color: white;
  background-color: black;
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  border: white;
  border-radius: 20px;
  font-weight: bolder;
`;

export const FilterIcon = styled.button`
  height: 30px;
  width: 30px;
  color: white;
  background-color: black;
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  border: white;
  border-radius: 20px;
  font-weight: bolder;
`;

export const UserProfileIcon = styled.div`
  height: 33px;
  width: 33px;
  color: white;
  background-color: black;
  float: right;
  margin-top: 8px;
  /* margin-right: 100px; */
  border: white;
  border-radius: 20px;
  font-weight: bolder;
`;

export const StyledSearchBar = styled.input`
  margin-top: 8px;
  margin-left: 15px;
  height: 35px;
  width: 70%;
  align-items: center;
  backface-visibility: hidden;
  background-color: #eeeeee;
  border: white;
  border-radius: 10px;
  padding: 0 10px;
`;
export const FilterDropDown = styled.select`
  margin-top: 10px;
  height: 30px;
  width: 200px;
  border: white;
  box-shadow: 2px 2px 2px 2px #eeeeee;
  float: left;
  /* margin-left: 5px; */
  right: 30px;
`;

export const CartIcon = styled.div`
  height: 33px;
  width: 33px;
  color: white;
  background-color: black;
  float: right;
  margin-top: 8px;
  margin-right: 80px;
  /* margin-left: 5px; */
  border: white;
  border-radius: 20px;
  font-weight: bolder;
`;

export const StyledFooter = styled.div`
  height: 40px;
  width: 100%;
  background-color: lightcoral;
  text-align: center;
  font-size: x-large;
  margin: auto 0;
  position: fixed;
  bottom: 0;
`;
