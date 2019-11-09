import React, { FC } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import ListTasks from '../components/ListTasks/ListTasks'

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const speakExample = () => {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance('Das ist eine gute Frage !')
  const germanVoices = synth.getVoices().filter(voice => voice.lang === 'de-DE')
  const googleDeutsch = germanVoices.find(
    ({ name }) => name === 'Google Deutsch',
  )

  if (germanVoices.length !== 0) {
    // eslint-disable-next-line prefer-destructuring
    utterThis.voice = googleDeutsch || germanVoices[0]
    synth.speak(utterThis)
  }
}

const tasks = [
  {
    string: 'My word t*** test te** **ge.',
    rightWords: ['test', 'tett', 'gege'],
  },
  {
    string: 'Other foo b** f**.',
    rightWords: ['bar', 'foo'],
  },
]

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <ListTasks tasks={tasks} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button type="button" onClick={speakExample}>
      Speak
    </button>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </Layout>
)

export default IndexPage
