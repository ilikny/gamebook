import React from 'react'

const Choice = ({setChapter, choiceData}) => {

  const handleClick = (id) => {
    setChapter(id)
  }

  const choice = choiceData?.map((item)=>{
    return <div key={item.id}>
    <button 
      onClick={() => handleClick(item.goto_id)}>
      {item.text}
    </button>
    </div>
  })
  return (
    <div>{choice}</div>
  )
}

export default Choice