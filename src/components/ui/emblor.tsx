import { type Tag, TagInput } from 'emblor'
import * as React from 'react'
import { useController, useForm } from 'react-hook-form'

const [tags, setTags] = React.useState<Tag[]>([])
const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(null)

const { setValue } = useForm()
const { field } = useController({ name: 'topics' })
;<TagInput
  {...field}
  placeholder="Enter a topic"
  tags={tags}
  setTags={(newTags) => {
    setTags(newTags)
    setValue('topics', newTags as [Tag, ...Tag[]])
  }}
  activeTagIndex={activeTagIndex}
  setActiveTagIndex={setActiveTagIndex}
/>
