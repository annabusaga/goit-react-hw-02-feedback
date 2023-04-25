// import css from './FeedbackOptions.module.css';
import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.container}>
        <button
          className={css.btn}
          type="button"
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={css.btn}
          type="button"
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={css.btn}
          type="button"
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </>
  );
}
