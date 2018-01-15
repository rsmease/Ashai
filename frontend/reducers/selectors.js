import _ from 'lodash';

export const myTeamsArray = (teams, myTeamIds) => {
    return myTeamIds.map(id => teams[id]);
};

export const addUniqueToArray = (newItem, existingItemsArray, updatedEntity) => {
    const itemIds = existingItemsArray.map(item => item.id);

    //compare against appropriate array of items
    //function called to updated projects, teams and users
    if (itemIds.indexOf(newItem.id) === -1) {
        if (newItem.members_by_id !== undefined) {
            if (newItem.members_by_id.indexOf(updatedEntity.id) >= 0) {
                existingItemsArray.push(newItem);
            }
        } else if (newItem.assignee_id !== undefined) {
            if (newItem.assignee_id === updatedEntity.id) {
                existingItemsArray.push(newItem);
            }
        }
    } else {
        existingItemsArray = existingItemsArray.map(item => {
            if (item.id === newItem.id) {
                item = newItem;
            }
            return item;
        });
    }
    return existingItemsArray;
};

export const addUniqueToProjectTasks = (newItem, existingItemsArray, updatedEntity) => {
    const itemIds = existingItemsArray.map(item => item.id);

    if (itemIds.indexOf(newItem.id) === -1) {
        if (newItem.project_id === updatedEntity.id) {
            existingItemsArray.push(newItem);
        }

    } else {
        existingItemsArray = existingItemsArray.map(item => {
            if (item.id === newItem.id) {
                item = newItem;
            }
            return item;
        });
    }
    return existingItemsArray;
};

export const removeDeleted = (removedItemId, existingItemsArray) => {
    return existingItemsArray.filter(function(item) {
        return item.id !== removedItemId;
    });
};