import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: fixed;
  overflow-y: hidden;
  height: 80px;
  width: 100%;
  background-color: black;
  color: crimson;
  text-align: center;
  line-height: 76px;
  font-family: 'Russo One', sans-serif;
  font-size: 42px;
  z-index: 10;
`;

export const StyledInputArea = styled.div`
  position: fixed;
  overflow-y: hidden;
  /* display: grid;
  grid-template-columns: auto auto auto auto auto; */
  background-color: #2196f3;
  top: 82px;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: white;
  margin-bottom: 100px;
  z-index: 10;
`;

export const CategoryDropDown = styled.select`
  /* margin-top: 10px; */
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
  /* margin-top: 10px; */
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
  /* margin-top: 8px; */
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
  /* margin-top: 10px; */
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
  z-index: 99;
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
  z-index: 10;
`;

// --------------------------------------------------------------------------------------------------------------------------------

export const StyledItemCard = styled.div`
  position: relative;
  height: 500px;
  width: 422px;
  background-color: lightCyan;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
  float: left;
  top: 130px;
  /* bottom: 40px; */
  border-radius: 10px;
  /* z-index: 100; */
`;

export const StyledCartBar = styled.div`
  height: 91.5%;
  width: 140px;
  position: fixed;
  z-index: 10;
  top: 80px;
  right: 0;
  background-color: skyblue;
  overflow-x: hidden;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCartCard = styled.div`
  height: 100px;
  width: 80px;
  /* margin: 21px; */
  margin-top: 20px;
  margin-left: 43px;
  background-color: lightgrey;
  border-radius: 10px;
  /* cursor: pointer; */
`;

export const CartBarLabelWrapper = styled.button`
  height: 34px;
  width: 100%;
  background-color: lightseagreen;
  font-weight: bolder;
  text-align: center;
  border: none;
  position: relative;
  bottom: 7px;
`;

export const ProductImage = styled.div`
  width: 380px;
  height: 350px;
  /* background-color: black; */
  margin: 0px 15px 0 21px;
  border-radius: 10px;
`;

export const StyledItemImg = styled.img`
  width: 380px;
  height: 370px;
  scale: 0.9;
  /* position: fixed; */
  margin: 5px 5px;
`;

export const ProductTitle = styled.div`
  height: 60px;
  width: 380px;
  padding: 10px;
  background-color: #eeeeee;
  margin: 15px 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  height: 35px;
  width: 100px;
  background-color: cyan;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  float: right;
  position: relative;
  bottom: 3px;
  line-height: 14px;
`;

export const AddToCartBtn = styled.button`
  height: 50px;
  width: 380px;
  padding: 10px;
  background-color: #eeeeee;
  margin: 0px 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: lightcoral;
  }
`;

export const CartBarImg = styled.img`
  width: 112px;
  height: 110px;
  scale: 0.9;
  position: relative;
  right: 32px;
  margin: 5px 5px;
  bottom: 10px;
  border-radius: 10px;
`;
