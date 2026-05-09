import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import * as S from '../styles.js';
export default function Results(){
  const q=new URLSearchParams(window.location.search).get('q')||'';
  const [docs,setDocs]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    if(!q)return;setLoading(true);
    supabase.from('documents').select('id,title').ilike('title','%'+q+'%').limit(20)
      .then(({data})=>{setDocs(data||[]);setLoading(false);});
  },[q]);
  return React.createElement('div',{style:S.page},
    React.createElement('h1',{style:S.h1},'Results for "'+q+'"'),
    loading&&React.createElement('p',{style:S.muted},'Searching...'),
    React.createElement('h2',{style:{...S.h2,marginTop:'1rem'}},'Documents'),
    docs.length===0&&!loading&&React.createElement('p',{style:S.muted},'No documents found.'),
    ...docs.map(d=>React.createElement('div',{key:d.id,style:S.card},React.createElement('span',{style:{color:'#a78bfa'}},d.title)))
  );
}