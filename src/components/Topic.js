import React, { useState } from 'react';
import {
    Box,
    Heading,
    VStack,
    Button,
    Input,
    FormControl,
    FormLabel,
    Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Topic = () => {
    const [topics, setTopics] = useState(['Topic 1', 'Topic 2', 'Topic 3']);
    const [newTopic, setNewTopic] = useState('');
    const [isEditing, setIsEditing] = useState([]);
    const history = useHistory();

    const handleAddTopic = () => {
        if (newTopic !== '') {
            setTopics([...topics, newTopic]);
            setNewTopic('');
        }
    };

    const handleEditTopic = (index) => {
        setIsEditing([...isEditing, index]);
        setNewTopic(topics[index]);
    };

    const handleSaveTopic = (index, newValue) => {
        const newTopics = [...topics];
        newTopics[index] = newValue;
        setTopics(newTopics);
        setIsEditing(isEditing.filter((i) => i !== index));
    };

    const handleDeleteTopic = (index) => {
        const newTopics = [...topics];
        newTopics.splice(index, 1);
        setTopics(newTopics);
        setIsEditing(isEditing.filter((i) => i !== index));
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
                        {isEditing.includes(index) ? (
                            <FormControl>
                                <FormLabel fontWeight="bold">Topic {index + 1}</FormLabel>
                                <Input
                                    value={newTopic}
                                    onChange={(event) => setNewTopic(event.target.value)}
                                />
                                <Button
                                    colorScheme="teal"
                                    onClick={() => handleSaveTopic(index, newTopic)}
                                    mt={4}
                                >
                                    Save Topic
                                </Button>
                            </FormControl>
                        ) : (
                            <Box>
                                <Text fontWeight="bold">Topic {index + 1}</Text>
                                <Text>{topic}</Text>
                            </Box>
                        )}
                        <Button
                            colorScheme="teal"
                            onClick={() => handleEditTopic(index)}
                            mt={4}
                        >
                            Edit Topic
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => handleDeleteTopic(index)}
                            mt={4}
                            ml={4}
                        >
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
