function shallowClone(obj) {
  const newObj = {};
  for(let prop in obj) {
      if(obj.hasOwnProperty(prop)){
          newObj[prop] = obj[prop];
      }
  }
  return newObj;
}