import React, { FC, Fragment, useRef } from 'react'

import InputChecker from './InputChecker'

export type ExerciseSentencesProps = {
  string: string
  rightWords: string[]
}

const Task: FC<ExerciseSentencesProps> = ({ string, rightWords }) => {
  const itemsRef = useRef<HTMLInputElement[]>([])
  let inputFieldIndex = -1

  function handleCheck({
    isCorrect,
    inputNumber,
  }: {
    value: string
    isCorrect: boolean
    inputNumber: number
  }): void {
    if (isCorrect && inputNumber !== inputFieldIndex) {
      itemsRef.current[inputNumber + 1].focus()
    }
  }

  function handleReferences(input: HTMLInputElement): void {
    itemsRef.current.push(input)
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
    return <Fragment key={index}>{word}</Fragment>
  })

  return <span>{words}</span>
}

export default Task
