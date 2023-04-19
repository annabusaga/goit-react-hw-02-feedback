import css from './Section.module.css';
import React from 'react';
// import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
// import Statistics from 'components/Statistics/Statistics';

export default function Section({ title, children }) {
  return (
    <>
      <p>{title}</p>
      {children}
    </>
  );
}
