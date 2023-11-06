import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading,news) => (
        <div className="widgets__article">
        <div className="widgets__newsleft"> 
        <FiberManualRecordIcon />   
        </div>
        <div className="widgets__newsright">
        <h4>{heading}</h4>
        <p>{news}</p>        
        </div>
    </div> 
    )
       


  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Babloo is Back baby","TopNews 19872 readers")}
        {newsArticle("React will make you wow","TopNews 1982 readers")}
        {newsArticle("Will there be another Covid?","TopNews 1989 readers")}
        {newsArticle("Cryptos are going down?","TopNews 1234 readers")}
        {newsArticle("Babloo learns React!!!","TopNews 1111 readers")}
        {newsArticle("BobbyAxe new position","TopNews 1289 readers")}
        {newsArticle("Layoffs in Bangalore?","TopNews 1989 readers")}
        {newsArticle("Is Chat GPT the new assistance??","TopNews 1283 readers")}
        {newsArticle("ChatGPT the terminator!!","TopNews 1459 readers")}
        {newsArticle("Bitcoins for free..","TopNews 1449 readers")}
        {newsArticle("Covids a scam?","TopNews 1489 readers")}

    
    
    
    </div>
  )
}

export default Widgets