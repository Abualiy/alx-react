import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import './CourseList.css';


const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0">
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
        listCourses.length == 0 ?
          <CourseListRow isHeader={false} textFirstCell='No course available yet'/>
        : null
        }
        {
          listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
        }
      </tbody>
    </table>
  );
};
CourseList.defaultProps = {
  listCourses: []
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};



export default CourseList;
