import { createSelector } from 'reselect'

/**
 * Very simple selectors used in mapStateToProps in container component
 */
const getXYData = (state) => {
  return state.xy
}
export const makeXYDataSelector = createSelector(
  getXYData,
  (value) => {
    return value
  }
)
