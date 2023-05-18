import React from 'react'

export default function Header(props) {
    return (
        <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari catatan ..." value={props.value} onChange={props.onChange} />
                </div>
            </div>
        </>
    )
}
