import React from 'react'
import { Trans } from 'react-i18next'

const About = () => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-key */}
      <Trans i18nKey={'about.description'} components={[<p />]} />
    </div>
  )
}

export default About
