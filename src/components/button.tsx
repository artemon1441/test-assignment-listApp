import React, { MouseEventHandler } from 'react';

interface customButton{
    name: string
    click: MouseEventHandler
    color: string
    disable: boolean
}

export function Button(props: customButton) {
  return <div className='customButton'>
      <button onClick={props.click} style={{backgroundColor: props.color}} disabled={props.disable} >{props.name}</button>
  </div>;
}
