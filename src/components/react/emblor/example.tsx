import { TagInput } from 'emblor'
import React, { useState } from 'react'

interface Tag {
  id: string
  text: string
}

const Example = () => {
  const tags = [
    {
      id: '887156527',
      text: 'Sports'
    },
    {
      id: '3798609264',
      text: 'Programming'
    },
    {
      id: '3431941510',
      text: 'Travel'
    }
  ]
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags)
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null)

  return (
    <TagInput
      tags={exampleTags}
      setTags={(newTags) => {
        setExampleTags(newTags)
      }}
      placeholder="Add a tag"
      styleClasses={{
        input: 'w-full sm:max-w-[350px]'
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
    />
  )
}
