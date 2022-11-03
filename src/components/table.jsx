import { useEffect, useState } from "react"
import axios from "axios";
import { DataTable } from "./dataTable";

export const TableComponent = ()=>{
    const [data,setData] = useState([]);
    const [order,setOrder] = useState("dsc");
    const [dataGold,setDataGold] = useState([]);
    const [total,setTotal] = useState(0);
    const[medal,setMedal] = useState("gold");
   

    

    const getData = async ()=>{
       let datam =  await axios.get("https://run.mocky.io/v3/1e86d317-a5ae-4e68-8511-acbe9164535b");
      let datamm = await datam.data;
    //   console.log(datamm);
    datamm.forEach((value,index)=>{
        let obj = {
            "code": "FRA",
     "gold": 4,
      "silver": 4,
      "bronze": 7,
      "total" : 10
}
        obj.code = value.code;
        obj.gold = value.gold;
        obj.silver = value.silver;
        obj.bronze = value.bronze;
        obj.total = value.gold + value.silver + value.bronze;
        datamm[index] = obj;

    })
      setData(datamm);
      sortByGold(datamm);
      console.log(datamm)
       }

     const sortByGold = (datamm) =>{
       
        if(order === "dsc"){
       let dataGoldm =  datamm?.sort((a,b)=>{
            if(b.gold === a.gold){
                return b.silver - a.silver
            }else{
                return b.gold - a.gold
            }
        })
        setDataGold(dataGoldm)
        setData(dataGoldm);
        setOrder("asc");
    } else {
        let dataGoldm =  data.sort((a,b)=>{
            return a.gold - b.gold;
        })
        setDataGold(dataGoldm)
        setData(dataGoldm);
        setOrder("dsc");
    }
       
    }


    const sortByMedal = (medals) =>{
        console.log(medals)
        setMedal(medals)
        if(order === "dsc"){
       let dataGoldm =  data.sort((a,b)=>{
            if(b[medals] === a[medals]){
                return b.gold - a.gold
            }
            else{
                return b[medals] - a[medals]
            }
        })
        setDataGold(dataGoldm)
        setData(dataGoldm);
        setOrder("asc");
    } else {
        let dataGoldm =  data.sort((a,b)=>{
            return a[medals] - b[medals];
        })
        setDataGold(dataGoldm)
        setData(dataGoldm);
        setOrder("dsc");
    }
       
    }
    useEffect(()=>{
        getData()
        
        
    },[])
    



    return (<div>
        <DataTable data = {data}
        sortByGold = {sortByGold}
        sortByMedal = {sortByMedal}
        key={medal}
        />

    </div>)
}