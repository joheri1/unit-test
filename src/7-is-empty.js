export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  // Empty string
  if (type === 'string' && stringArrayOrObject === "") {
    return true
  }
    
  // Check for an empty array
  if (Array.isArray(stringArrayOrObject) && stringArrayOrObject.length === 0) {
    return true;
  }

  // Check for an empty object
  if (type === 'object' && stringArrayOrObject !== null && Object.keys(stringArrayOrObject).length === 0) {
    return true;
  }

  return false
}


