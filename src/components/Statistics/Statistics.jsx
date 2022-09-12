import PropTypes from 'prop-types';
import { StatisticSection, Title, StatList, Item, Label, Percentage, } from './Statistics.styled';

export const Statistics = ({stats}) => {
  return (
  <StatisticSection>
  <Title>Upload stats</Title>
  <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage} %</Percentage>
        </Item>))}
  </StatList>
  </StatisticSection>  
  );
};

Statistics.protoType = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
    "label": PropTypes.string.isRequired,
    "percentage": PropTypes.number.isRequired,
    "id": PropTypes.string.isRequired,
  }),    
  ),
};