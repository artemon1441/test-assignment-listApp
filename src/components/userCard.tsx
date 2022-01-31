import React, { MouseEventHandler } from 'react';

interface userCardProps {
    key: number
    name: string
    city: string
    company: string
    click: MouseEventHandler
}

export function UserCard(props:userCardProps) {
  return (
  <div className='userCard'>
      <ul>
        <li><span>ФИО:</span>{props.name}</li>
        <li><span>город:</span>{props.city}</li>
        <li><span>компания:</span>"{props.company}"</li>
      </ul>
      <button onClick={props.click} >Подробнее</button>
      
  </div>
  );
}
