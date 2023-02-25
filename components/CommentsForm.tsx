// @ts-nocheck

import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services';

interface CommentsFormProps {
  slug: string;
}

const CommentsForm = ({slug}: CommentsFormProps) => {

  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef();
  const nameEl = useRef("");
  const emailEl = useRef("");
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name")
    emailEl.current.value = window.localStorage.getItem("email")
  }, [])

  function handleCommentSubmit() {
    setError(false)

    const { valuesection: comment }: any = commentEl.current
    const { value: name }: any = nameEl.current
    const { value: email }: any = emailEl.current
    const { checked: storeData }: any = storeDataEl.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    if(comment.trim() === "" || name.trim() === "" || email.trim() === "") {
      setError(true)
      return
    }

    if(storeData) {
      window.localStorage.setItem("name", name)
      window.localStorage.setItem("email", email)
    } else {
      window.localStorage.removeItem("name")
      window.localStorage.removeItem("email")
    }

    const commentObj = {
      name, email, comment, slug
    }

    submitComment(commentObj)
    .then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
        rows={4}
        placeholder="Comment"
        name="comment"
        ref={commentEl}
        className="resize-none p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
         required />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
        type="text" 
        ref={nameEl} 
        className="resize-none px-4 py-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Name" 
        name="name" required/>
        <input 
          type="email" 
          ref={emailEl} 
          className="resize-none px-4 py-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email" 
          name="email" required/>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className=" ml-2 text-gray-500 cursor-pointer" htmlFor="storeData">Save my email and name for the next time i comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}

      <div className="mt-8">
        <button 
        type="button" 
        onClick={handleCommentSubmit}
        className="transition cursor-pointer duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3">
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </section>
    )
}

export default CommentsForm



