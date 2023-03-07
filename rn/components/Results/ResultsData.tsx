import { ResultsComponentsProps } from '../../interfaces/Interfaces';
import Card from '../Card';
import Text from '../Text';

const ResultsData = ({ data }: ResultsComponentsProps) => {
    
  return (
    <Card twStyles = "flex-1 my-4">
        <Text twStyles = "text-2xl font-bold text-black dark:text-white">
            Detections
        </Text>
        { data.map((value: any, index: any) => (
            <Card 
                twStyles = "flex-row" 
                key = { index }
            >
                <Card twStyles = "flex-row">
                <Text 
                    twStyles = "text-lg text-black dark:text-white"
                >
                    { value.name }
                </Text>
                <Text twStyles = "text-lg text-black dark:text-white">
                    :
                </Text>
                </Card>
                <Text> </Text>
                <Text twStyles = "text-lg text-black dark:text-white">
                    { value.confidence }
                </Text>
            </Card>
        ))} 
        <Text twStyles = "text-2xl font-bold text-black dark:text-white">
            Related Info
        </Text>
  </Card>
  )
}

export default ResultsData;