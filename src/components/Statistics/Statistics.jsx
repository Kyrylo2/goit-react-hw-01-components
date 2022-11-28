import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title !== undefined && title !== null && title !== '' ? (
        <StatisticsTitle>{title}</StatisticsTitle>
      ) : (
        ''
      )}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          );
        })}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
