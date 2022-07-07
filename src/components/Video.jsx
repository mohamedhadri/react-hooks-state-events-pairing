import React from 'react'


export default function Video({vid}) {
  return (
    <div>
    <iframe
    width="919"
    height="525"
    src={vid.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
  />
  <h1>{vid.title}</h1>
  <h3>{`${vid.views} Views | Uploaded ${vid.createdAt}`}</h3>

</div>
  )
}
