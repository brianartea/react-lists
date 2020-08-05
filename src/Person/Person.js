import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
    width: 40%;
    margin: 22px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 900px) {
        width: 700px;
    }
  `;

const Person = props => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  )
};

export default Person;