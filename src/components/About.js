import React from 'react'

export default function About(props) {
  return (
    <div className="container my-3" style={props.mode}>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button style={props.mode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How To Use Word Editor
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.mode}>
          <strong>Word Editor version 5.0 includes a number of improvements</strong>  and one of the improvements is better support for the vast number of Word Editor available. In this tutorial we show you how to configure Word Editor, the ScribeFire Word Editor, and Microsoft Live Writer for use with the Word CMS/editor plugin. 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button style={props.mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Using  Word Editor as a Blog Editor
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.mode}>
          <strong>With Word Editor Created by Hp-Groups</strong> you can configure programs such as the most popular Microsoft Word to become a blog editor with just some easy steps and having a blog account setup with the FuguHub server.

         There are many types of blog editors, but what most people want is for blog editing to be more convenient. Most people usually have Microsoft office on their laptops or desktops. Bloggers would really like to know how to use Microsoft Office, specifically the Microsoft Word, as a blog editing tool and fortunately, it can be done by just following some easy steps:
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button style={props.mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Using the ScribeFire Word Editor
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.mode}>
          <strong>About Word Editor for text editing</strong> ScribeFire is a perfect solution for those who are facing difficulties in editing their blogs. ScribeFire is a quick and easy browser plug-in that is both convenient and powerful. People can post their articles directly to their blogs while surfing the internet. This article explains how to use the ScribeFire Blog Editor to run a blog. Follow these simple tips and you will be well on your way to publishing!
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
