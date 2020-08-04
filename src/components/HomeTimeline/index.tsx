import React, { useEffect } from 'react';

import TimelineTweet from '../TimelineTweet';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeTweetslist } from '../../store/HomeTweetsList/actions';

const HomeTimeline: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('oi')
    dispatch(fetchHomeTweetslist(1));
  }, []);

  return <TimelineTweet />;
};

export default HomeTimeline;
