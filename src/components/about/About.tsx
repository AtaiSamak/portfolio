import React from 'react'
import { Trans } from 'react-i18next'

const About = () => {
  // eslint-disable-next-line react/jsx-key
  return <Trans i18nKey={'about.description'} components={[<p />]} />
}

export default About
