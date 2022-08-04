import React from "react";

function useTyper(){
  const [text,setText] = React.useState("");
  const [timeRemaining, setTimeRemaining] = React.useState(5);
  const [isTimeRunning,setIsTimeRunning] = React.useState(false);
  const [wordCount,setWordCount] = React.useState(0);
  const textAreaRef = React.useRef(null);


  function handleChange(e){
      const data = e.target.value;
      setText(data);
  }
  // console.log(text);

  function wordCounter(text){

    const wordArray = text.trim().split(" ");
    const finalWordArray = wordArray.filter(word => word !== " ");
    // console.log(finalWordArray);
    return finalWordArray.length;

  }

  //Start the game
  function startGame(){
    setIsTimeRunning(true);
    setTimeRemaining(5);
    setText("");
    textAreaRef.current.disabled = false; //Manually disabling the text area
    textAreaRef.current.focus(); //Focusing back to text area
  }

  //End game
  function endGame(){
    setIsTimeRunning(false); //Stopping timer
    setWordCount(wordCounter(text));
  }


  // Use effect for timecounter
  React.useEffect(()=>{
    if(isTimeRunning == true && timeRemaining > 0){
      setTimeout(()=>{
        setTimeRemaining(counter => counter-1);
      },1000);
    }
    else if(timeRemaining == 0){
      endGame();
    }
  },[timeRemaining,isTimeRunning]);

  return {handleChange,text,isTimeRunning,textAreaRef,timeRemaining,startGame, wordCount}

}
export default useTyper;
