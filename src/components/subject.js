import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Select,
    Text,
    useToast,
} from '@chakra-ui/react';
import subjects from '../data/subjects';

function Subject() {
    const history = useHistory();
    const { standard } = useParams();
    const [selectedSubject, setSelectedSubject] = useState('');
    const [outputSubject, setOutputSubject] = useState('');
    const toast = useToast();

    const handleSubjectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubject(selectedValue);
        setOutputSubject(selectedValue);
    };

    const handleNext = () => {
        if (selectedSubject) {
            history.push(`/chapter/${standard}/${selectedSubject}`);
        } else {
            toast({
                title: 'No subject selected',
                description: 'Please select a subject before proceeding.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleBack = () => {
        history.goBack();
    };

    // Validate standard URL parameter value
    const isStandardValid = (standard) => {
        const standardNumber = Number(standard);
        return !isNaN(standardNumber) && standardNumber >= 1 && standardNumber <= 10;
    };

    // Show error toast for invalid standard URL parameter value
    if (!isStandardValid(standard)) {
        toast({
            title: 'Invalid URL parameter',
            description: 'The standard value in the URL is invalid.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
        return null;
    }

    return (
        <Box p={4}>
            <Text mb={2} fontSize="lg" fontWeight="bold">
                You selected: {standard}th Standard
            </Text>
            <FormControl>
                <FormLabel>Select Subject</FormLabel>
                <Select
                    placeholder="Select"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                >
                    {subjects
                        .filter((subject) => subject.standardId === Number(standard))
                        .map((subject) => (
                            <option key={subject.id} value={subject.name}>
                                {subject.name}
                            </option>
                        ))}
                </Select>
                {!selectedSubject && (
                    <Text mt={2} color="red">
                        Please select a subject
                    </Text>
                )}
                {outputSubject && (
                    <Text mt={2} fontWeight="semibold">
                        You selected: {outputSubject}
                    </Text>
                )}
                <Button
                    mt={4}
                    colorScheme="blue"
                    disabled={!selectedSubject}
                    onClick={handleNext}
                >
                    Next
                </Button>
                <Button
                    mt={4}
                    ml={2}
                    onClick={handleBack}
                    colorScheme="gray"
                    variant="outline"
                >
                    Back to standard
                </Button>
            </FormControl>
        </Box>
    );
}

export default Subject;
