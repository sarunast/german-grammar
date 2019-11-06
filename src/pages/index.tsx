import React, { FC } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const speakExample = () => {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance('Das ist eine gute Frage !')
  const voices = synth.getVoices()

  // eslint-disable-next-line prefer-destructuring
  utterThis.voice = voices[47]
  synth.speak(utterThis)
}

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
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
