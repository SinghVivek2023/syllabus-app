import React, { useState } from 'react';
import { Box, Heading, VStack, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Topic = () => {
    const [topics, setTopics] = useState(['Topic 1', 'Topic 2', 'Topic 3']);
    const [newTopic, setNewTopic] = useState('');
    const history = useHistory();

    const handleAddTopic = () => {
        if (newTopic !== '') {
            setTopics([...topics, newTopic]);
            setNewTopic('');
        }
    };

    const handleEditTopic = (index, newValue) => {
        const newTopics = [...topics];
        newTopics[index] = newValue;
        setTopics(newTopics);
    };

    const handleDeleteTopic = (index) => {
        const newTopics = [...topics];
        newTopics.splice(index, 1);
        setTopics(newTopics);
    };

    const handleTopicChange = (event) => {
        setNewTopic(event.target.value);
    };

    const handleBackToChapters = () => {
        history.goBack();
    };

    return (
        <Box>
            <Button onClick={handleBackToChapters} colorScheme="teal" mb={6}>
                Back to Chapters
            </Button>
            <VStack>
                <Heading mb={6}>List of Topics</Heading>
                {topics.map((topic, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="md" p={3}>
                        <FormControl>
                            <FormLabel fontWeight="bold">Topic {index + 1}</FormLabel>
                            <Input defaultValue={topic} onChange={(event) => handleEditTopic(index, event.target.value)} />
                        </FormControl>
                        <Button colorScheme="red" onClick={() => handleDeleteTopic(index)} mt={4}>
                            Delete Topic
                        </Button>
                    </Box>
                ))}
                <FormControl mt={6}>
                    <FormLabel fontWeight="bold">Add New Topic</FormLabel>
                    <Input value={newTopic} onChange={handleTopicChange} />
                    <Button colorScheme="teal" onClick={handleAddTopic} mt={4}>
                        Add Topic
                    </Button>
                </FormControl>
            </VStack>
        </Box>
    );
};

export default Topic;
