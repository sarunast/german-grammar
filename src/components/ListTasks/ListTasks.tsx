import React, { FC } from 'react'

import Task, { ExerciseSentencesProps } from './Task'

type Props = {
  tasks: ExerciseSentencesProps[]
}

type taskFunction = () => void
const ListTasks: FC<Props> = ({ tasks }) => {
  const taskFocusFunctions: taskFunction[] = []

  function onTaskFinished(taskNumber: number): void {
    if (tasks.length - 1 !== taskNumber) {
      taskFocusFunctions[taskNumber + 1]() // focus next line(task)
    }
  }

  function setFocusFirstInputInLine(focusFirst: taskFunction): void {
    taskFocusFunctions.push(focusFirst)
  }

  return (
    <>
      {tasks.map((task, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Task
            taskNumber={index}
            string={task.string}
            onTaskFinished={onTaskFinished}
            rightWords={task.rightWords}
            passFocusFirstFunction={setFocusFirstInputInLine}
          />
        </div>
      ))}
    </>
  )
}

export default ListTasks
