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
import standards from '../data/standards'; // import the standards array

const Standard = () => {
    const history = useHistory();
    const [selectedStandard, setSelectedStandard] = useState('');
    const [error, setError] = useState('');

    const handleStandardChange = (event) => {
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
                        {/* Generate the options dynamically */}
                        {standards.map((standard) => (
                            <option key={standard.id} value={standard.id}>
                                {standard.name}
                            </option>
                        ))}
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
