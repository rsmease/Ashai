import _ from 'lodash';

export const myTeamsArray = (teams, myTeamIds) => {
  return myTeamIds.map(id => teams[id]);
};

export const addUniqueToArray = (newItem, existingItems) => {
  const itemIds = existingItems.map(item => item.id);
  if (itemIds.indexOf(newItem.id) === -1) {
    existingItems.push(newItem);
  } else {
    existingItems = existingItems.map(item => {
      if (item.id === newItem.id) {
        item = newItem;
      }
      return item;
    });
  }
  return existingItems;
};

export const removeDeleted = (removedItemId, existingItems) => {
  return existingItems.filter(function(item) {
    return item.id !== removedItemId;
  });
};
// 
// export const updateMember = (updatedMember, existingGroups) => {
//   const newGroups = {};
//   for (const group in existingGroups) {
//     const members = group.members;
//     members = members.map(function(member) {
//       if (member.id === updateMember.id) {
//         member = updatedMember;
//       }
//       return member;
//     });
//     newGroups[group.id] = group;
//   }
//   return newGroups;
// };
