const checkLimit = (array, count) => {
  // console.log(array, count);
  if (array && array.length >= count) return true;
  else return false;
};

export default checkLimit;
