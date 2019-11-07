import React, { FC } from 'react'

import Task, { ExerciseSentencesProps } from './Task'

type Props = {
  tasks: ExerciseSentencesProps[]
}

const ListTasks: FC<Props> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Task string={task.string} rightWords={task.rightWords} />
        </div>
      ))}
    </>
  )
}

export default ListTasks
