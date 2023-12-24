import COLORS from "@/styles/COLORS";
import { IoIosCheckmark } from "react-icons/io";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

import {
  StyledSelectContainer,
  StyledSelect,
  StyledSelectHeader,
} from "./Dropdown";
import { EMBEDED_MARKETS } from "@/constants/constants";

const EmbededDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Fx-Market");

  return (
    <StyledSelectEmbededContainer>
      <StyledSelectHeader>
        <span>{selectedItem}</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </StyledSelectHeader>

      {isOpen && (
        <StyledSelectEmbeded>
          {EMBEDED_MARKETS.map(({ listName, list }) => {
            return (
              <>
                <li>{listName}</li>
                {list.map((item, index) => (
                  <li
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(false);
                    }}
                    key={index}
                  >
                    <span> {item}</span>
                    {selectedItem === item && (
                      <button>
                        <IoIosCheckmark />
                      </button>
                    )}
                  </li>
                ))}
              </>
            );
          })}
        </StyledSelectEmbeded>
      )}
    </StyledSelectEmbededContainer>
  );
};

export default EmbededDropdown;

const StyledSelectEmbededContainer = styled(StyledSelectContainer)`
  min-width: 170px;
`;
const StyledSelectEmbeded = styled(StyledSelect)`
  min-width: 170px;
  li:first-child,
  li:nth-child(5) {
    font-weight: 700;
    padding-left: 0.8rem;
  }

  li:first-child:hover,
  li:nth-child(5):hover {
    background-color: transparent;
    cursor: default;
  }

  li {
    padding-left: 2rem;
  }
`;
