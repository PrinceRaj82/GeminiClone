import { createContext,useState } from "react";
import runChat from "../config/gemini";

export const Context=createContext();

const ContextProvider=(props)=>{

    const[input,setInput]=useState("");
    const[recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setprevPrompts]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultData,setResultData]=useState("");

    const delaypara=(index,nextWord)=>{
        setTimeout(()=>{
            setRecentPrompt((prev)=>prev+nextWord)
        },index*50)
    }

    const newChat=()=>{
        setloading(false);
        setShowResult(false);
    }
    const onSent=async(prompt)=>{
        setResultData("")
        setloading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setprevPrompts((prev)=>[...prev,input]);
        const response=await runChat(input);
        let responseArrary=response.split("**");
        let newResponse="";
        for(let i=0; i<=responseArrary.length;i++){
           if(i===0 || 1%2 !==1){
            newResponse+=responseArrary[i]
           }else{
            newResponse+="<b>"+responseArrary[i]+"</b>"
           }
        }

        let newResponse2nd=newResponse.split('*')
        let newResponseArrary=newResponse2nd.split(" ")

        for(let i=0;i<newResponseArrary.length;i++){
            const newxtWord=newResponseArrary[i];
            delaypara(i,newxtWord+" ")
        }
        setloading(false);
        setInput("");
    }
    const contextValue={
        prevPrompts,
        setprevPrompts,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        onSent,
        showResult,
        loading,
        resultData,
        newChat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;