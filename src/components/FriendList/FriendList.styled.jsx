import styled from 'styled-components';

export const FriendListContainer = styled.ul`
   padding: 0;
   margin: 50px 0px;
`;

export const Item = styled.li`
    border: 1px solid gray;
    border-radius: 4px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 290px;
    margin: 20px;
    box-shadow: 10px 8px 6px rgb(0 0 0 / 12%),
   0 1px 1px rgb(0 0 0 / 14%), 
   18px 10px 10px rgb(0 0 0 / 20%);
`;

export const Status = styled.span`
    /* background-color: red; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 20px;
    
    background-color: ${props => {
    switch (props.isOnline) {
        case true:
            return "#f00";    
        default:
            return "#0F0"
    }
   }} ;
`;

export const Avatar = styled.img`
    margin-left: 20px;
    width: 48px;
`;

export const FriendName = styled.p`
    margin-left: 20px;
    font-size: 25px;
`;