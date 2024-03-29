import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
  return (
    <div>
       {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" >Share</button>
                                <button type="button" >Delete</button>
                                {/* onClick={handleShare} */}
                                {/* {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers )}>Delete</button>
                                    )
                                } */}
                            </div>
                            <div>
                                <p>answered{ans.answeredOn}</p>
                                {/* <p>answered {moment(ans.answeredOn).fromNow()}</p> */}
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                    <Avatar backgroundColor="lightgreen" px='8px' py='5px' borderRadius='4px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default DisplayAnswer
