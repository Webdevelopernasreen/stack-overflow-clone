import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'

import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {
  const location=useLocation()
  const user=1;
  const navigate=useNavigate();



  const questionsList=useSelector(state=>state.questionReducer)
  console.log(questionsList);
    // var questionsList=[
    //    {
    //     _id:1,
    //     upVotes:1,
    //     downVotes:0,
    //     noOfAnswers:2,
    //     questionTitle:"What is a function?",
        
    //     questionTags:["Javascript", "array"],
    //     questionBody:"it meant to be",
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answers:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn:"jan 2",
    //       userId:2,
    //     }]
    //    },
    //    {
    //     _id:2,
    //     upVotes:1,
    //     downVotes:0,
    //     noOfAnswers:2,
    //     questionTitle:"What is a function?",
        
    //     questionTags:["Javascript", "array"],
    //     questionBody:"it meant to be",
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answers:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn:"jan 2",
    //       userId:2,
    //     }]
    //    }
    //    ,{
    //     _id:3,
    //     upVotes:1,
    //     downVotes:0,
    //     noOfAnswers:2,
    //     questionTitle:"What is a function?",
        
    //     questionTags:["Javascript", "array"],
    //     questionBody:"it meant to be",
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answers:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn:"jan 2",
    //       userId:2,
    //     }]
    //    }
    // ]

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
        {
            location.pathname==='/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
        }
         <Link to="/AskQuestions" className='ask-btn'>AskQuestions</Link>
         </div>
         <div>
            {
                questionsList.data===null? <h1>Loading.....</h1>:
                <>
                <p>{questionsList.data.length} question</p>
              
                <QuestionList questionsList={questionsList.data}/>
                
                </>
                
            }
         </div>
    </div>
  )
}

export default HomeMainbar


