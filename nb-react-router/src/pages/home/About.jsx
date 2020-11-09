import { useEffect, useState } from "react";
import { useParams } from "react-router"

const data = [
    {_id : 1, nama : "noobee", desc: "Ini Halaman NooBeeCamp"},
    {_id : 2, nama : "me", desc: "Saya adalah seorang Software Developer"},
    {_id : 3, nama : "project", desc: "Project ini adalah bagian dari NooBeeCamp"},
    {_id : 4, nama : "default", desc: "Ini Halaman About"},
];

export default function About(){
    localStorage.setItem("login", false);
    const {nama} = useParams();
    const [show, setShow] = useState(data[3]);
    useEffect(()=>{
        let dataToShow = data.find((d)=>{
            return d.nama === nama
        });

        if(typeof dataToShow === "undefined") dataToShow = data[3];
        setShow(dataToShow);
    }, [nama])
      
    return <h1>{show.desc}</h1>
}