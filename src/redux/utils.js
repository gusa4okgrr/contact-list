export const createRequestTypes = type => ({
  [type]: {
    SUCCESS: `${type}_SUCCESS`,
    FAIL: `${type}_FAIL`,
  }
});
