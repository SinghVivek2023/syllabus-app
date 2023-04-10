import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react';

interface StandardProps { }

const Standard: React.FC<StandardProps> = () => {
    const history = useHistory();
    const [selectedStandard, setSelectedStandard] = useState('');
    const [error, setError] = useState('');

    const handleStandardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedStandard(selectedValue);
    };

    const handleNext = () => {
        if (!selectedStandard) {
            setError('Please select a standard');
        } else {
            history.push(`/subject/${selectedStandard}`);
        }
    };

    return (
        <Box p={4}>
            <FormControl isInvalid={!!error}>
                <Stack spacing={4}>
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
                    {error && <FormHelperText color="red.500">{error}</FormHelperText>}
                    {selectedStandard && (
                        <Text mt={2}>You selected: {selectedStandard}th Standard</Text>
                    )}
                    <Button mt={4} colorScheme="blue" disabled={!selectedStandard} onClick={handleNext}>
                        Next
                    </Button>
                </Stack>
            </FormControl>
        </Box>
    );
};

export default Standard;
