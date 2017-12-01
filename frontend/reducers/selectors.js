import _ from 'lodash';

export const myTeamsArray = (teams, myTeamIds) => {
  return myTeamIds.map(id => teams[id]);
};

export const addUniqueToArray = (newItem, existingItems) => {
  const itemIds = existingItems.map(item => item.id);
  if (itemIds.indexOf(newItem.id) === -1) {
    existingItems.push(newItem);
  }
  return existingItems;
};

export const removeDeleted = (removedItemId, existingItems) => {
  return existingItems.filter(function(item) {
    return item.id !== removedItemId;
  });
};
