import React, { FC } from 'react'

import Task from './Task'

type Props = {
  tasks: { string: string; rightWords: string[] }[]
}

type emptyFuncType = () => void
const ListTasks: FC<Props> = ({ tasks }) => {
  const focusTaskFirstInput: emptyFuncType[] = []

  function onTaskFinished(taskNumber: number): void {
    if (tasks.length - 1 !== taskNumber) {
      focusTaskFirstInput[taskNumber + 1]() // focus next line(task)
    }
  }

  function setFocusFirstInputFunction(focusFirst: emptyFuncType): void {
    focusTaskFirstInput.push(focusFirst)
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
            passFocusFirstInputFunction={setFocusFirstInputFunction}
          />
        </div>
      ))}
    </>
  )
}

export default ListTasks
