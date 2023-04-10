import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    List,
    ListItem,
    Text,
    VStack
} from '@chakra-ui/react';

function Chapter() {
    const history = useHistory();
    const { standard, subject } = useParams();
    const [chapterList, setChapterList] = useState(['Chapter 1', 'Chapter 2', 'Chapter 3']);
    const [newChapter, setNewChapter] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleNewChapterChange = (event) => {
        const value = event.target.value;
        setNewChapter(value);
    };

    const handleAddChapter = () => {
        if (newChapter) {
            setChapterList([...chapterList, newChapter]);
            setNewChapter('');
        }
    };

    const handleSelectChapter = (chapter) => {
        setSelectedChapter(chapter);
        setIsEditing(false);
    };

    const handleEditChapter = () => {
        setIsEditing(true);
        setNewChapter(selectedChapter);
    };

    const handleSaveChapter = () => {
        if (!newChapter) {
            alert('Please enter a chapter name');
            return;
        }

        const index = chapterList.findIndex((chapter) => chapter === selectedChapter);
        if (index !== -1) {
            const updatedChapterList = [...chapterList];
            updatedChapterList[index] = newChapter;
            setChapterList(updatedChapterList);
            setSelectedChapter(newChapter);
            setIsEditing(false);
        }
    };

    const handleDeleteChapter = (chapter) => {
        const updatedChapterList = chapterList.filter((item) => item !== chapter);
        setChapterList(updatedChapterList);
        setSelectedChapter('');
        setIsEditing(false);
    };

    const handleNext = () => {
        if (!selectedChapter) {
            alert('Please select a chapter');
            return;
        }

        history.push(`/topic/${standard}/${subject}/${selectedChapter}`);
    };
    const handleBack = () => {
        history.push(`/subject/${standard}`);
    };

    return (
        <Box p={4}>
            <Text mb={2} fontSize="lg" fontWeight="bold">
                You selected: {standard}th Standard, {subject}
            </Text>
            <VStack align="flex-start" spacing={4}>
                <FormControl>
                    <FormLabel>Chapters</FormLabel>
                    <List>
                        {chapterList.map((chapter) => (
                            <ListItem
                                key={chapter}
                                onClick={() => handleSelectChapter(chapter)}
                                bg={selectedChapter === chapter ? 'blue.100' : ''}
                                cursor="pointer"
                            >
                                {chapter}
                            </ListItem>
                        ))}
                    </List>
                    <Box mt={4} display="flex" alignItems="center">
                        <Input placeholder="New Chapter" value={newChapter} onChange={handleNewChapterChange} />
                        <Button ml={4} colorScheme="blue" onClick={handleAddChapter}>
                            Add
                        </Button>
                    </Box>
                </FormControl>
                {selectedChapter ? (
                    <FormControl>
                        <FormLabel>Selected Chapter: {selectedChapter}</FormLabel>
                        {isEditing ? (
                            <Box display="flex" alignItems="center">
                                <Input value={newChapter} onChange={handleNewChapterChange} />
                                <Button ml={4} colorScheme="blue" onClick={handleSaveChapter}>
                                    Save
                                </Button>
                            </Box>
                        ) : (
                            <Box display="flex" alignItems="center">
                                <Text>{selectedChapter}</Text>
                                <Button ml={4} colorScheme="blue" onClick={handleEditChapter}>
                                    Edit
                                </Button>
                                <Button ml={4} colorScheme="red" onClick={() => handleDeleteChapter(selectedChapter)}>
                                    Delete
                                </Button>
                            </Box>
                        )}
                        <Button mt={4} colorScheme="blue" onClick={handleNext}>
                            Next
                        </Button>
                    </FormControl>
                ) : (
                    <Box>
                        <Text>Please select a chapter.</Text>
                    </Box>
                )}
                <Button mt={4} colorScheme="blue" onClick={handleBack}>
                    Back to Subject
                </Button>
            </VStack>
        </Box>
    );
}

export default Chapter;
