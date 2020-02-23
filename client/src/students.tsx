import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Card, Text, Box, Flex, Heading, Button } from 'rebass'
import { Label, Input } from '@rebass/forms'

const STUDENTS = gql`
  {
    student {
      id
      name
      student_lessons {
				lessonByLesson {
          id
          subject
        }
      }
    }
  }
`

const ADD_LESSON = gql`

mutation studentMutation($student: Int!, $lesson: Int!) {
  insert_student_lesson(
    objects: [{
    	student: $student
      lesson: $lesson
    }]){
    returning {
      student
      lesson
    }
  }
}
`

function Students() {
  const { loading, error, data } = useQuery(STUDENTS)
  const [idInput, setIdInputs ] = useState([])
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error.</Text>

  return data.student.map(({ id, name, student_lessons }: { student_lessons: any, id: string, name: string }) => (
    <Card key={id}>
      <Heading>Student:{name}</Heading>
      <Flex>
        {student_lessons.map(({ lessonByLesson: l }: { lessonByLesson: any }) => (
          <Box width={1}>
            <Text>Lesson:</Text>
            <Text>ID:{l.id}</Text>
            <Text>Subject:{l.subject}</Text>
          </Box>
        ))}
      </Flex>
      <Flex margin='1em' justifyContent='center'>
        <Box margin='0 1em'><Label htmlFor='id'>ID:</Label></Box>
        <Box margin='0 1em'>
          <Input name='id' id='id' />
        </Box>
        <Button onClick={() => useMutation()}variant='primary'>Add Lesson</Button>
      </Flex>
    </Card >
  ))
}

export default Students