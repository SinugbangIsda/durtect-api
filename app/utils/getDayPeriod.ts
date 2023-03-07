import React, { useState, useEffect } from "react";

const getDayPeriod = ( data: Number ) => {
  const [ hour , setHour ] = useState<Number>(data);
  
  useEffect(() => {
    setHour(data);
  }, [hour])

  return (hour < 12) ? "Good morning" : (hour < 18) ? "Good afternoon": "Good evening"

}

export default getDayPeriod;
