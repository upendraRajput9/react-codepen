import React,{useState,useEffect} from 'react'

let prefix = "code-pen-"
export default function useLocalstorage(key,initialvalue) {
 
    const prefixKey = prefix+key
    const [value,setValue]= useState(()=>{
const jsonValue = localStorage.getItem(prefixKey);

if(jsonValue != null) return JSON.parse(jsonValue)
if(typeof initialvalue === 'function'){
    return initialvalue()
}else{
  return  initialvalue
}
    })
    useEffect(()=>{
        localStorage.setItem(prefixKey,JSON.stringify(value))
        },[value,prefixKey])
  return [value,setValue]
}
