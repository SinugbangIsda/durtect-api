import React from 'react'
import Card from '../Card'
import Text from "../Text";

const ResultsEmpty = () => {
  return (
    <Card twStyles = "flex-1 my-4 justify-center items-center w-full">
        <Card twStyles = "flex-1">
        <Text twStyles = "text-black dark:text-white">
            No detections.
        </Text>
        </Card>
    </Card>
  )
}

export default ResultsEmpty