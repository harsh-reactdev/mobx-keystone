import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  CategoryDropDown,
  FilterDropDown,
  SearchIcon,
  StyledInputArea,
  StyledSearchBar,
  UserProfileIcon,
  FilterIcon,
  CartIcon,
} from '../StyledComponents/StyledComps';

function InputArea() {
  // const [showSearchBar, setShowSearchBar] = useState(false);
  // const [showFilter, setShowFilter] = useState(false);

  return (
    <StyledInputArea>
      <CategoryDropDown>
        <option value="" defaultChecked>
          --Select Category--
        </option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </CategoryDropDown>

      <StyledSearchBar placeholder="Search..." />

      <FilterDropDown>
        <option value="">--Filter By--</option>
        <option value="lowToHigh">price low to high</option>
      </FilterDropDown>

      <CartIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="20"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </CartIcon>

      {/* <UserProfileIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </UserProfileIcon> */}

      {/* 
      <FilterIcon onClick={() => setShowFilter(!showFilter)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="30"
          fill="currentColor"
          className="bi bi-funnel"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
        </svg> */}

      {/* </FilterIcon> */}
    </StyledInputArea>
  );
}

export default InputArea;
