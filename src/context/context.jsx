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


    const onSent=async(prompt)=>{
        setResultData("")
        setloading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response=await runChat(input);
        setResultData(response);
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
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;