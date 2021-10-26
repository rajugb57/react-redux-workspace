import React from 'react';
const ServiceItem =(props)=>{
    console.log("props",props)
    return (
        <li key={props.id} className={props.selectedItem == props.name ?'selected':''} onClick={() => props.ServiceClickHandler(props.name)}>{props.name}</li>
    )
}
export default ServiceItem;