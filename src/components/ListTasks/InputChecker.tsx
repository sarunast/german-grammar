import styled from 'styled-components'
import React, { FC, useState } from 'react'

const CustomInput = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
`

type Props = {
  fullWord: string
  hiddenWord: string
}

const InputChecker: FC<Props> = ({ fullWord, hiddenWord }) => {
  const firstStarPos = hiddenWord.indexOf('*')
  const lastStarPos = hiddenWord.lastIndexOf('*') + 1
  const validInputValue = fullWord.substring(firstStarPos, lastStarPos)
  const isWordEndingWithStar = fullWord.length === lastStarPos
  const visibleWord = fullWord.replace(validInputValue, '')
  const [input, setInput] = useState('')

  function handleChange(event: any) {
    setInput(event.target.value)
  }

  if (input === validInputValue) console.log('true')

  const inputField = (
    <CustomInput
      value={input}
      size={validInputValue.length}
      onChange={handleChange}
    />
  )

  return (
    <span>
      {isWordEndingWithStar ? visibleWord : inputField}
      {isWordEndingWithStar ? inputField : visibleWord}
    </span>
  )
}

export default InputChecker
