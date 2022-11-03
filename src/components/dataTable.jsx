import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
export const DataTable = (props)=>{
    const [medal,setMedal] = useState("gold");


    useEffect(()=>{
        setMedal(props?.medal)
       
    },[props.medal])


    return(<div>
        <h3>Medal Count</h3>
        <table className="table">
            <thead className="thead">
                <th></th>
                <th></th>
                <th onClick={()=>{props?.sortByMedal("gold")}}>Gold</th>
                <th onClick={()=>{props?.sortByMedal("silver")}}>Silver</th>
                <th onClick={()=>{props?.sortByMedal("bronze")}}>Bronze</th>
                <th onClick={()=>{props?.sortByMedal("total")}}>Total</th>
            </thead>
            <tbody>
                {props?.data?.map((e,index)=>{
                    return (index <=9 &&
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><ReactCountryFlag countryCode={e.code.toUpperCase().slice(0, -1)} svg/></td>
                    <td>{e.gold}</td>
                    <td>{e.silver}</td>
                    <td>{e.bronze}</td>
                    <td>{e.total}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>)
}