import styled from 'styled-components';

export const StatisticSection = styled.section`
margin-top: 50px;
    background-color: #80808021;
    border-radius: 4px;
    margin: 50px 0px;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: normal;
`;

export const StatList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #808080;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    padding: 17.5px;
`;

export const Label = styled.span`
    font-size: 20px;
    color: #fff;
    
`;

export const Percentage = styled.span`
    font-size: 30px;
    padding-top: 10px;
`;
