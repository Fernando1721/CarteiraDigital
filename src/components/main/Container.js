import {useEffect,useState} from "react";
import Cards from "./Cards";
import Balance from "./Balance";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";


import {path} from "../../config/path";


export default function Container() {

    const[datacards,setDataCards] = useState([]);
    

    useEffect(()=>{
        fetch(`${path}/wallet/list/user/628fd387c78d5a1b9f7cffcb`,{
            method: "GET",
            headers: {
                accept:"application/json",
                "content-type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkM2MzYzc4ZDVhMWI5ZjdjZmZjZCIsInVzZXIiOiJyZW5hbiIsImVtYWlsIjoicnNAZ21haWwuY29tIiwiaWF0IjoxNjU0ODgxNTYxLCJleHAiOjE2NTUwNTQzNjF9.2RZd946iO1MDweQQCf87mZquXoo5k_Zf1FHkuBu4lyg"
            }
        })
        .then((result)=>result.json())
        .then((data) =>{
            console.log(data.payload);
            setDataCards(data.payload);
        }).catch((err) =>console.error(`Error at loading api -> ${err}`));
    },[]);


    const [balance, setBalance] = useState ([])

    const changeData = (content) => {
        setBalance(content);
    };

    return (
        <div className="container">
            <Cards data={datacards} action={changeData} />
            <Panel data={balance}/>
            <Waitlist />
            <Plans />
            <Balance data={balance}/>
        </div>
    );
}