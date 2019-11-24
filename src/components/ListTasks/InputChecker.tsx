import React, {
  forwardRef,
  memo,
  RefForwardingComponent,
  useState,
} from 'react'

export type Props = {
  fullWord: string
  hiddenWord: string
  inputNumber: number
  handleSubmit: (params: {
    value: string
    isCorrect: boolean
    inputNumber: number
  }) => void
}

const InputChecker: RefForwardingComponent<HTMLInputElement, Props> = (
  { fullWord, hiddenWord, handleSubmit, inputNumber },
  ref,
) => {
  const firstStarPos = hiddenWord.indexOf('*')
  const lastStarPos = hiddenWord.lastIndexOf('*') + 1
  const validInputValue = fullWord.substring(firstStarPos, lastStarPos)
  const isWordEndingWithStar = fullWord.length === lastStarPos
  const visibleWord = fullWord.replace(validInputValue, '')
  const [input, setInput] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput(e.target.value)
    setIsCorrect(null)
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      const isInputCorrect = input === validInputValue
      handleSubmit({ value: input, isCorrect: isInputCorrect, inputNumber })
      setIsCorrect(isInputCorrect)
    }
  }

  function getBackgroundColor(): 'white' | 'red' | 'green' {
    if (isCorrect === null) {
      return 'white'
    }

    if (isCorrect) {
      return 'green'
    }
    return 'red'
  }

  const inputField = (
    <input
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      value={input}
      ref={ref}
      size={validInputValue.length}
      onKeyDown={handleEnter}
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

export default memo(forwardRef(InputChecker))
