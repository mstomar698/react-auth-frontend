import styled from 'styled-components';

export const StyledInput =styled.input`
    width: 100%;
    outline: none;
    padiing: 8px 16px;
    border: 1px solid #e0e6e8;
    font-size: 1rem;
    color: #888888;
    transition: box-shadow 0.2s;
    &::placeholder {
        color: #dedede;
    }
    &: focus { 
        box-shadow: 0 0 0 2px rgb(19, 172, 255, 0.5);
    }
`;