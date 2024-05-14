import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addChannel, addChannels, selectors } from '../slices/ChannelsSlice.js';

const ChatPage = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const channels = useSelector(selectors.selectAll);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const fetchChannelsAndMessages = async () => {
    const response = await axios.get('/api/v1/channels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data: loadedChannels } = response;

    if (loadedChannels.length > 1) {
      dispatch(addChannels(loadedChannels));
      return;
    }
    dispatch(addChannel(loadedChannels));
  };

  fetchChannelsAndMessages();

  return (
    <div id="chat">
      <div>
        <ul>
          {channels.map((channel) => <li key={channel.id}>{channel.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ChatPage;
