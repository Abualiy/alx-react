import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create ({
  th: {
    borderBottom: '1px solid gray',
    margin: '0',
    padding: '0',
    textAlign: 'left',
  },

  firstChild: {
    ':first-child': {
      textAlign: 'center',
    }
  },
  td: {
    paddingLeft: '3px'
  }
});


function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  const headerBg = {backgroundColor: '#deb5b545'};
  const rowBg = {backgroundColor: '#f5f5f5ab'};
  const selectedStyle = isHeader ? headerBg : rowBg;

  return (
    <tr style={selectedStyle}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2">{textFirstCell}</th>
        :
          <>
            <th className={css(style.th)}>{textFirstCell}</th>
            <th className={css(style.th)}>{textSecondCell}</th>
          </>
      :
        <>
          <td className={css(style.td)}>{textFirstCell}</td>
          <td className={css(style.td)}>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};


export default CourseListRow;
