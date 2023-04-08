import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const TopicContent = () => {
    const location = useLocation();

    const handleClickTopic = (topicIndex) => {
        const searchParams = new URLSearchParams(location.search);
        const subject = searchParams.get('subject');
        const chapter = searchParams.get('chapter');
        const topic = `topic${topicIndex + 1}`;
        const url = `/topic?subject=${subject}&chapter=${chapter}&topic=${topic}`;
        window.location.href = url;
    };

    return (
        <Box>
            <Link to="/chapter">
                <Button colorScheme="teal" mb={6}>
                    Back to Chapters
                </Button>
            </Link>
            <VStack>
                <Heading mb={6}>List of Topics</Heading>
                <Box borderWidth="1px" borderRadius="md" p={3} onClick={() => handleClickTopic(0)}>
                    <Text fontWeight="bold">Topic 1</Text>
                </Box>
                <Box borderWidth="1px" borderRadius="md" p={3} onClick={() => handleClickTopic(1)}>
                    <Text fontWeight="bold">Topic 2</Text>
                </Box>
                <Box borderWidth="1px" borderRadius="md" p={3} onClick={() => handleClickTopic(2)}>
                    <Text fontWeight="bold">Topic 3</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default TopicContent;
