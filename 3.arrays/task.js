function compareArrays(arr1, arr2) {
  return arr1.every((element) => arr1[element] === arr2[element]) && arr1.length === arr2.length;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).reduce((acc, user, index, array) => acc + user.age / array.length, 0)
  return result
}
