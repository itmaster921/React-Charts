import { createSelector } from 'reselect'

/**
 * Very simple selectors used in mapStateToProps in container component
 */

const getCategories = (state) => {
  return state.bar.categories
};

const getBarData = (state) => {
  return state.bar
};

export const makeCategoriesSelector = createSelector(
  getCategories,
  (value) => {
    return value
  }
);

export const makeBarDataSelector = createSelector(
  getBarData,
  (value) => {
    return value
  }
);
