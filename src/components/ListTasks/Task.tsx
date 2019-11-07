import React, { FC, Fragment } from 'react'

import InputChecker from './InputChecker'

export type ExerciseSentencesProps = {
  string: string
  rightWords: string[]
}

const Task: FC<ExerciseSentencesProps> = ({ string, rightWords }) => {
  let rightWordCounter = 0

  const words = string.split(' ').map(word => {
    if (word.includes('*')) {
      const input = (
        <Fragment key={word}>
          <InputChecker
            fullWord={rightWords[rightWordCounter]}
            hiddenWord={word}
          />{' '}
        </Fragment>
      )

      // Keep track of used correct values
      rightWordCounter += 1
      return input
    }

    return <Fragment key={word}>{word} </Fragment>
  })

  return <span>{words}</span>
}

export default Task
