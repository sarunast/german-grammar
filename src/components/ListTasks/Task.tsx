import React, { FC, Fragment, memo } from 'react'

import InputChecker, { Props } from './InputChecker'

export type ExerciseSentencesProps = {
  string: string
  rightWords: string[]
  onTaskFinished: (taskNumber: number) => void
  taskNumber: number
  passFocusFirstInputFunction: (focusFirstInput: () => void) => void
}

const Task: FC<ExerciseSentencesProps> = ({
  string,
  rightWords,
  onTaskFinished,
  taskNumber,
  passFocusFirstInputFunction,
}) => {
  const itemsRef: HTMLInputElement[] = []
  let inputFieldIndex = -1

  const handleCheck: Props['handleSubmit'] = ({ isCorrect, inputNumber }) => {
    if (isCorrect && inputNumber !== inputFieldIndex) {
      itemsRef[inputNumber + 1].focus()
    }

    // Execute once the last input are completed
    if (isCorrect && inputNumber === inputFieldIndex) {
      onTaskFinished(taskNumber)
    }
  }

  function handleReferences(input: HTMLInputElement): void {
    itemsRef.push(input)
  }

  function focusFirstInput(): void {
    itemsRef[0].focus()
  }

  const words = string.split(' ').map((word, index) => {
    if (word.includes('*')) {
      // Keep track of used correct values
      inputFieldIndex += 1

      const renderInput = (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>
          <InputChecker
            fullWord={rightWords[inputFieldIndex]}
            hiddenWord={word}
            inputNumber={inputFieldIndex}
            handleSubmit={handleCheck}
            ref={handleReferences}
          />{' '}
        </Fragment>
      )
      return renderInput
    }

    // eslint-disable-next-line react/no-array-index-key
    return <Fragment key={index}>{word} </Fragment>
  })

  return (
    <span>
      {passFocusFirstInputFunction(focusFirstInput)}
      {words}
    </span>
  )
}

export default memo(Task)
