import React,{useState} from 'react';
import * as S from '../styles.js';
export default function Home(){
  const [q,setQ]=useState('');
  const go=()=>window.location.href='/results?q='+encodeURIComponent(q);
  return React.createElement('div',{style:{...S.page,textAlign:'center',paddingTop:'5rem'}},
    React.createElement('h1',{style:{...S.h1,fontSize:'2.5rem'}},'IT-S Search'),
    React.createElement('p',{style:{...S.muted,marginBottom:'2rem'}},'Search across the IT-S Universe'),
    React.createElement('div',{style:{display:'flex',gap:'0.5rem',maxWidth:'600px',margin:'0 auto'}},
      React.createElement('input',{style:S.input,placeholder:'Search users, documents, services...',value:q,onChange:e=>setQ(e.target.value),onKeyDown:e=>e.key==='Enter'&&go()}),
      React.createElement('button',{style:S.btn,onClick:go},'Search')
    )
  );
}