import COLORS from "@/styles/COLORS";
import { IoIosCheckmark } from "react-icons/io";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
const Dropdown = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Fx-Market");
  const dorpdownList = ["Fx-Market", "MMK", "FRWD"];

  return (
    <StyledSelectContainer>
      <StyledSelectHeader>
        <span>{selectedItem}</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </StyledSelectHeader>

      {isOpen && (
        <StyledSelect>
          {dorpdownList.map((item, index) => (
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
        </StyledSelect>
      )}
    </StyledSelectContainer>
  );
};

export default Dropdown;

// ******************** SELECT *******************************
export const StyledSelect = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 65px;
  left: 0px;
  min-height: 118px;
  width: 130px;
  font-size: 18px;
  background-color: white;
  border-radius: 6px;
  color: ${COLORS.dropdown};

  li {
    padding: 0.5rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0;
      color: ${COLORS.dropdown};
      font-size: 24px;
    }
  }

  li:hover {
    background-color: ${COLORS.underline};
  }
  li:first-child:hover {
    border-radius: 6px 6px 0 0;
  }
  li:last-child:hover {
    border-radius: 0 0 6px 6px;
  }
`;

export const StyledSelectContainer = styled.div`
  position: relative;
  z-index: 1;
  min-width: 130px;
  border-radius: 6px;
  color: ${COLORS.dropdown};
  background-color: white;
`;

export const StyledSelectHeader = styled.header`
  display: flex;
  padding: 0.8rem 0.3rem;
  gap: 0.5rem;
  justify-content: space-between;

  span {
    flex: 2;
    font-size: 18px;
    text-align: left;
    padding-left: 0.5rem;
    white-space: nowrap;
  }

  button {
    flex: 1;
    color: ${COLORS.dropdown};
    font-size: 20px;
  }
`;
