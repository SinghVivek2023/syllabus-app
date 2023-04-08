import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';

function Standard() {
    const history = useHistory();
    const [selectedStandard, setSelectedStandard] = useState('');
    const [outputStandard, setOutputStandard] = useState('');

    const handleStandardChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedStandard(selectedValue);
        setOutputStandard(selectedValue);
    };

    const handleNext = () => {
        history.push(`/subject/${selectedStandard}`);
    };

    return (
        <Box p={4}>
            <FormControl>
                <FormLabel>Select Standard</FormLabel>
                <Select placeholder="Select" value={selectedStandard} onChange={handleStandardChange}>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                </Select>
                {outputStandard && (
                    <Text mt={2}>
                        You selected: {outputStandard}th Standard
                    </Text>
                )}
                <Button mt={4} colorScheme="blue" disabled={!selectedStandard} onClick={handleNext}>
                    Next
                </Button>
            </FormControl>
        </Box>
    );
}

export default Standard;
