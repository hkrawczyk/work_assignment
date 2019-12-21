import {ActionEx, BookmarkActionTypes} from './bookmark.actions';


export const initialState = [
  {
    groupName: 'Private',
    items:
      [
        {
          uuid: '1fecf8dd-37f7-4b21-d43a-47a86c62b1dd',
          name: 'Gmail',
          url: 'https://gmail.com',
          group: 'Private'
        },
      ]
  },
  {
    groupName: 'Work',
    items:
      [
        {
          uuid: '1fecf8d3-32f7-4b21-d43a-47a86c62b1dd',
          name: 'Sketch',
          url: 'https://www.sketch.com/',
          group: 'Work'
        },
        {
          uuid: '1fghf8dd-37f7-4b21-d43a-47a86c62b1dd',
          name: 'Jira',
          url: 'https://www.atlassian.com/pl/software/jira',
          group: 'Work'
        }
      ]}
];


export function BookmarkReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case BookmarkActionTypes.Add: {
      const doesGroupExist = state.find(item => item.groupName == action.payload.group);
      if (doesGroupExist) {
        doesGroupExist.items.push(action.payload);
      } else {
        state.push({
          groupName: action.payload.group,
          items: [action.payload]
        });
      }
      return [...state];
    }
    case BookmarkActionTypes.Remove: {
      const group = state.find(item => item.groupName == action.payload.group);

      const index = group.items.findIndex(item => item.uuid === action.payload.uuid);

      group.items.splice(index, 1);

      // verify is the group does not contains items
      let newState = state;
      if (group.items.length === 0) {
        newState = state.filter(item => item.groupName !== group.groupName);
      }
      return [...newState];
    }
    default:
      return state;
  }

}


