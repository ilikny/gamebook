import React from 'react'

const Image = ({image}) => {

  const ill = image?.map(()=>{
    return <div key={image[0].id}>
      <img src={`img/${image[0].filename}`} alt="" />
    </div>
  })

  return (
    <>
    {ill}
    </>
  )
}

export default Image

