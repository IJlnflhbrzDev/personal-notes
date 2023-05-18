import React from 'react'

export default function NotesList(props) {
    return (
        <>
                {/* <div className="note-item"> */}
                    <div className="note-item__content">
                        <h3 className="note-item__title">{props.title}</h3>
                        <p className="note-item__date">{props.createdAt}</p>
                        <p className="note-item__body">{props.body}</p>
                    </div>
                    <div className="note-item__action">
                        <button className="note-item__delete-button" onClick={props.onClickDelete}>Delete</button>
                        <button className="note-item__archive-button" onClick={props.onClickArchive}>{props.archive}</button>
                    </div>
                {/* </div> */}
        </>
    )
}
