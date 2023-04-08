import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';

function Subject() {
    const history = useHistory();
    const { standard } = useParams();
    const [selectedSubject, setSelectedSubject] = useState('');
    const [outputSubject, setOutputSubject] = useState('');

    const handleSubjectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubject(selectedValue);
        setOutputSubject(selectedValue);
    };

    const handleNext = () => {
        history.push(`/chapter/${standard}/${selectedSubject}`);
    };

    return (
        <Box p={4}>
            <Text mb={2}>
                You selected: {standard}th Standard
            </Text>
            <FormControl>
                <FormLabel>Select Subject</FormLabel>
                <Select placeholder="Select" value={selectedSubject} onChange={handleSubjectChange}>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="maths">Maths</option>
                </Select>
                {outputSubject && (
                    <Text mt={2}>
                        You selected: {outputSubject}
                    </Text>
                )}
                <Button mt={4} colorScheme="blue" disabled={!selectedSubject} onClick={handleNext}>
                    Next
                </Button>
            </FormControl>
        </Box>
    );
}

export default Subject;
