import React from 'react';
export default function Nav() {
  return React.createElement('nav',{style:{display:'flex',alignItems:'center',gap:'1.5rem',padding:'1rem 2rem',borderBottom:'1px solid #1e293b',background:'#0d1117'}},
    React.createElement('a',{href:'/',style:{fontWeight:700,fontSize:'1.1rem',color:'#7c3aed',textDecoration:'none'}},'IT-S Search'),
    React.createElement('a',{href:'/',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Home'),React.createElement('a',{href:'/results',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Results')
  );
}
