import React from 'react'
import { Heading1 } from '../../atoms/Headings'
import { Text } from '../../atoms/Text'
import { ContentWrapper, TextContainer } from './index.styles'

interface Props {
  title: string;
  description: string;
}

const Hero: React.FC<Props> = ({ title, description }) => {
  return (
    <section>
      <ContentWrapper>
        <TextContainer>
          <Heading1 isLight>{title}</Heading1>
          <Text isLightGray>{description}</Text>
        </TextContainer>
      </ContentWrapper>
    </section>
  )
}

export default Hero