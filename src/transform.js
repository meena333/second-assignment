module.exports = { groupAdultsByAgeRange };

function groupAdultsByAgeRange(groups) {
  const initialAccumulator = {};

  return groups.reduce((categories, currentPerson) => {
    if (currentPerson.age >= 51) {
      if (categories.hasOwnProperty("51 and older")) {
        categories["51 and older"].push(currentPerson);
      } else {
        categories["51 and older"] = [];
        categories["51 and older"].push(currentPerson);
      }
      return categories;
    }

    if (currentPerson.age >= 41) {
      if (categories.hasOwnProperty("41-50")) {
        categories["41-50"].push(currentPerson);
      } else {
        categories["41-50"] = [];
        categories["41-50"].push(currentPerson);
      }
      return categories;
    }

    if (currentPerson.age >= 31) {
      if (categories.hasOwnProperty("31-40")) {
        categories["31-40"].push(currentPerson);
      } else {
        categories["31-40"] = [];
        categories["31-40"].push(currentPerson);
      }
      return categories;
    }

    if (currentPerson.age >= 21) {
      if (categories.hasOwnProperty("21-30")) {
        categories["21-30"].push(currentPerson);
      } else {
        categories["21-30"] = [];
        categories["21-30"].push(currentPerson);
      }
      return categories;
    }

    if (currentPerson.age >= 18) {
      if (categories.hasOwnProperty("20 and younger")) {
        categories["20 and younger"].push(currentPerson);
      } else {
        categories["20 and younger"] = [];
        categories["20 and younger"].push(currentPerson);
      }
      return categories;
    }
    return categories;
  }, initialAccumulator);
}

/*
//Solution using .filter()
function groupAdultsByAgeRange(groupsOfPeople) {
  const groupedCategory = {};
  const array51 = groupsOfPeople.filter(
    currentPerson => currentPerson.age >= 51
  );
  const array41 = groupsOfPeople.filter(
    currentPerson => currentPerson.age >= 41 && currentPerson.age < 51
  );
  const array31 = groupsOfPeople.filter(
    currentPerson => currentPerson.age >= 31 && currentPerson.age < 41
  );
  const array21 = groupsOfPeople.filter(
    currentPerson => currentPerson.age >= 21 && currentPerson.age < 31
  );
  const array20 = groupsOfPeople.filter(
    currentPerson => currentPerson.age >= 18 && currentPerson.age < 21
  );

  if (array51.length != 0) {
    groupedCategory["51 and older"] = array51;
  }
  if (array41.length != 0) {
    groupedCategory["41-50"] = array41;
  }
  if (array31.length != 0) {
    groupedCategory["31-40"] = array31;
  }
  if (array21.length != 0) {
    groupedCategory["21-30"] = array21;
  }
  if (array20.length != 0) {
    groupedCategory["20 and younger"] = array20;
  }
  return groupedCategory;
}
*/
