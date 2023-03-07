import React from 'react';
import Text from "../Text";
import getDayPeriod from '../../utils/getDayPeriod';
import moment from 'moment';

const Greetings = () => {
  const greeting = getDayPeriod(moment().hour());

  return (
    <Text twStyles = "text-2xl font-bold text-black dark:text-white">
      { greeting }
    </Text>
  )
}

export default Greetings;