import React from 'react';
// import  '../styles/style.css';

export default function NotesInput(props) {
    return (
        <>
            <div className="note-input">
                <h2>Buat catatan</h2>
                    <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                    <input className="note-input__title" type="text" name='title' placeholder="Ini adalah judul ..."  value={props.value} onChange={props.onChange} maxLength={props.maxLength} />
                    <textarea className="note-input__body" type="text" name='body' placeholder="Tuliskan catatanmu di sini ..." value={props.valueBody} onChange={props.onChangeBody}   required></textarea>
                    <button type="submit" onClick={props.handleAddNote}>Buat</button>
            </div>
        </>
    )
}
