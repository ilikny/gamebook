import React, { useEffect, useState } from 'react'
import Chapter from './components/Chapter'
import Choice from './components/Choice'
import './style.scss'
import Image from './components/Image'



const App = () => {

  const [chapter, setChapter] = useState(1)
  const [chapterData, setChapterData] = useState(null)
  // const [choice, setChoice] = useState(null)
  const [choiceData, setChoiceData] = useState(null)
  const [image, setImage] = useState(null)


  const loadChapter = async () => {
    const responseChapter = await fetch(`/api/chapter/${chapter}`);
    const dataChapter = await responseChapter.json();

    const resposeChoice = await fetch(`/api/choice/${chapter}`)
    const dataChoice = await resposeChoice.json();

    try{
      const resposeImage = await fetch(`/api/image/${chapter}`)
      const dataImage = await resposeImage.json();
      console.log(dataImage);
      setImage(dataImage);
    } catch (error) {
            console.log(
                "no image for this chapter",
                error
            );
        }
    
    console.log(dataChapter);
    setChapterData(dataChapter);
    
    console.log(dataChoice);
    setChoiceData(dataChoice);
  }

  useEffect(()=>{
    loadChapter();
  },[chapter]);



  return (
    <div>
      <h1>Secret of pyramids</h1>
        <Image image={image}/>
        <Chapter  chapterData={chapterData} />
        <Choice choiceData={choiceData} setChapter={setChapter}/>
    </div>
  )
}

export default App