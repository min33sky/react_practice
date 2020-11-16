import React from 'react';
import { Provider } from 'react-redux';
import store from './common/store';
import FriendMain from './friend/container/FriendMain';
import TimelineMain from './timeline/container/TimelineMain';

function App() {
  return (
    <Provider store={store}>
      <TimelineMain />
    </Provider>
  );
}

export default App;
