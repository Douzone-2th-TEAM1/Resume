const checkLimit = (array, count) => {
  if (array && array.length >= count) return true;
  else return false;
};

export default checkLimit;
