import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    border: 1px solid #808080;
    margin: 50px 0px;
    border-radius: 4px;
    box-shadow: 10px 8px 6px rgb(0 0 0 / 12%),
   0 1px 1px rgb(0 0 0 / 14%), 
   18px 10px 10px rgb(0 0 0 / 20%);
`;

export const Description = styled.div`
    text-align: center;
`;
export const Avatar = styled.img`
    padding-top: 40px;
    border-radius: 50%;
    height: 250px;
`;

export const Name = styled.p`
    font-weight: bold;
`;

export const Tag = styled.p`
    color: #808080;
    font-size: 30px;
`;

export const Location = styled.p`
    color: #808080;
    font-size: 30px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    background-color: #d3d3d34f;
`;
export const StatsContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border: 1px solid #00000054;
`;

export const Label = styled.span`
    font-size: 22px;
    color: #808080;
`;
export const Quantity = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
