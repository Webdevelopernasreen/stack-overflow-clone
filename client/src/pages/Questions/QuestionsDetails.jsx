import React,{useState} from 'react'
import { useParams,useNavigate,useLocation } from 'react-router-dom'
import './Questions.css'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
import copy from "copy-to-clipboard";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";

// import DisplayAnswer from './DisplayAnswer'
import DisplayAnswer from './DisplayAnswer'
import { deleteQuestion, postAnswer,voteQuestion } from '../../actions/question'

const QuestionsDetails = () => {
    // const questionsList=[
    //     {
    //      _id:'1',
    //      upVotes:1,
    //      downVotes:0,
    //      noOfAnswers:2,
    //      questionTitle:"What is a function?",
         
    //      questionTags:["Javascript", "array"],
    //      questionBody:"it meant to be",
    //      userPosted:"mano",
    //      userId:1,
    //      askedOn:"jan 1",
    //      answer:[{
    //        answerBody:"Answer",
    //        userAnswered:'Kumar',
    //        answeredOn:"jan 2",
    //        userId:2,
    //      }]
    //     },
    //     {
    //      _id:'2',
    //      upVotes:1,
    //      downVotes:0,
    //      noOfAnswers:2,
    //      questionTitle:"What is a function?",
         
    //      questionTags:["Javascript", "array"],
    //      questionBody:"it meant to be",
    //      userPosted:"mano",
    //      userId:1,
    //      askedOn:"jan 1",
    //      answer:[{
    //        answerBody:"Answer",
    //        userAnswered:'Kumar',
    //        answeredOn:"jan 2",
    //        userId:2,
    //      }]
    //     }
    //     ,{
    //      _id:'3',
    //      upVotes:1,
    //      downVotes:0,
    //      noOfAnswers:2,
    //      questionTitle:"What is a function?",
         
    //      questionTags:["Javascript", "array"],
    //      questionBody:"it meant to be",
    //      userPosted:"mano",
    //      userId:1,
    //      askedOn:"jan 1",
    //      answer:[{
    //        answerBody:"Answer",
    //        userAnswered:'Kumar',
    //        answeredOn:"jan 2",
    //        userId:2,
    //      }]
    //     }
    //  ]


    const[Answer,setAnswer]=useState('')
    const Navigate=useNavigate()
    const dispatch=useDispatch();
    const location=useLocation();
    const url="http://localhost:3000"
  
    const User=useSelector((state)=>(state.currentUserReducer))
    const handlePosAns=(e,answerLength)=>{
      e.preventDefault();
      if(User===null){
        alert('login or signup to answer');
        Navigate('/Auth')
      }else{
        if(Answer===''){
             alert('Enter an answer before submitting')
        }else{
          dispatch(postAnswer({id,noOfAnswers: answerLength + 1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
          setAnswer(" ");
        }
      }
      
    }


    const handleshare=()=>{
       copy(url+location.pathname)   
       alert("copied to clipboard:"+url+location.pathname)
    }
    const handledelete=()=>
    {
      dispatch(deleteQuestion(id,Navigate))
    }


    const handleUpVote=()=>{
      dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownVote=()=>{
      dispatch(voteQuestion(id,'downVote',User.result._id))
    }

     const {id}=useParams();
     const questionsList=useSelector(state=>state.questionReducer)
     console.log(questionsList);
  return (
    <div>
    {
        <div className="question-details-page">
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
           
           {questionsList.data
           .filter((question) => question._id === id)
              .map((question) => (
                <div key={question._id}>
                  <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <img
                           src={upvote} 
                           alt="" 
                        width="18"
                          className="votes-icon"
                          onClick={handleUpVote}
                         /> 
                        <p>{question.upVote.length - question.downVote.length}</p> 
                       <img
                          src={downvote}
                          alt=""
                          width="18"
                          className="votes-icon"
                          onClick={handleDownVote}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className="question-body">{question.questionBody}</p>
                        <div className="question-details-tags">
                          {question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))}
                        </div>
                        <div className="question-actions-user">
                          <div>
                            <button type="button"  onClick={handleshare}>
                              Share
                           </button>
                             {
                              User?.result?._id === question?.userId &&(
                                <button type="button" onClick={handledelete} >
                                Delete
                              </button>
                              )
                             }
                          
                          </div>
                          <div>
                            <p>asked {moment(question.askedOn).fromNow()}</p>
                            {/* answered {moment(ans.answeredOn).fromNow()} */}
                            <Link
                              to={`/Users/${question.userId}`}
                              className="user-link"
                              style={{ color: "#0086d8" }}
                            >
                              <Avatar
                                backgroundColor="orange"
                                px="8px"
                                py="5px"
                                borderRadius="4px"
                              >
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div>{question.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {question.answer.length !== 0 && (
                  <section>
                    <h3>{question.answer.length} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleshare={handleshare}
                    />
                  </section>
                
                  )}
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form
                       onSubmit={(e)=>{handlePosAns(e,question.answer.length)}}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={e=>setAnswer(e.target.value)}
                     
                      ></textarea>
                      <br />
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p>
                      Browse other Question tagged
                      {question.questionTags.map((tag) => (
                        <Link to="/Tags" key={tag} className="ans-tags">
                          {" "}
                          {tag}{" "}
                        </Link>
                      ))}{" "}
                      or
                      <Link
                        to="/AskQuestions"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {" "}
                        ask your own question.
                      </Link>
                    </p>
                  </section>
                </div>
              ))}
          </>
        )}
      </div>
    }
      
    </div>
  )
}

export default QuestionsDetails
