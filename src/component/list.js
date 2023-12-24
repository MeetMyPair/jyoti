import React from 'react';
import style from "../css/list.module.css";

const List = ({ onClick, label, data }) => {

  return <>
    <div className={style.outer}>
     <div className={style.left}>
       <div className={style.top}><strong>Approved</strong>: {data.company.catchPhrase}</div> 
       <div className={style.bottom}>{data.address.street}</div> 
     </div>
     <div className={style.right}><div className={style.myButton} onClick={() => onClick(data.id)}>Delete</div></div>
    </div>
  </>
};

export default List;