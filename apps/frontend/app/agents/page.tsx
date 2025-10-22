import React from 'react'
import { xai } from '@ai-sdk/xai';
import { generateText } from 'ai';

const { text } = await generateText({
  model: xai('grok-3'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

function page() {
  return (
    <div>page {text}</div>
  )
}

export default page