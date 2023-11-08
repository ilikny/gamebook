import React from 'react'

const Chapter = ({ chapterData }) => {

  const originalString = chapterData?.text

  const strippedString = originalString?.replace(/(<([^>]+)>)/gi, "");

  if (chapterData?.is_end == 1){
    
  }

  return (
    <div>
      <h1>{chapterData?.id}</h1>
      <p>{strippedString}</p>
      {
        (chapterData?.is_end == 1) 
        ?
        <h1>END</h1>
        :
        ''

      }
    </div>
  )
}

export default Chapter