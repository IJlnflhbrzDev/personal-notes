import React, { useState } from 'react';
import { getInitialData } from '../utils';
import NotesInput from '../components/notes_input';
import Header from '../components/header';
import NotesList from '../components/notes_list';

const Home = () => {
  const [notes, setNotes] = useState(getInitialData);
  const [newNote, setNewNote] = useState({
    id: '',
    title: '',
    body: '',
    archived: false,
    createdAt: '',
  });
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleAddNote = () => {
    const timestamp = +new Date();
    const noteToAdd = {
      ...newNote,
      id: timestamp.toString(),
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, noteToAdd]);
    setNewNote({
      id: '',
      title: '',
      body: '',
      archived: false,
      createdAt: '',
    });
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleArchiveNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredNotes = searchKeyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : notes;

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <>
      <Header value={searchKeyword} onChange={handleSearch} />
      <div className="note-app__body">
        <div className="note-input">
          <form onSubmit={(event) => event.preventDefault()}>
            <NotesInput
              value={newNote.title}
              onChange={handleInputChange}
              valueBody={newNote.body}
              onChangeBody={handleInputChange}
              maxLength={50}
              handleAddNote={handleAddNote}
            />
          </form>
        </div>

        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {activeNotes.length > 0 ? (
            <>
              {activeNotes.map((note) => (
                <div className="note-item" key={note.id}>
                  <NotesList
                    title={note.title}
                    createdAt={note.createdAt}
                    body={note.body}
                    onClickDelete={() => handleDeleteNote(note.id)}
                    onClickArchive={() => handleArchiveNote(note.id)}
                    archive="Arsipkan"
                  />
                </div>
              ))}
            </>
          ) : (
            <p>Tidak ada catatan.</p>
          )}
        </div>

        <h2>Catatan Diarsipkan</h2>
        <div className="notes-list">
          {archivedNotes.length > 0 ? (
            <>
              {archivedNotes.map((note) => (
                <div className="note-item" key={note.id}>
                  <div className="note-item__content">
                    <h3 className="">{note.title}</h3>
                    <p>{note.body}</p>
                  </div>
                  <div className="note-item__action">
                    <button
                      className="note-item__delete-button"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      Hapus
                    </button>
                    <button
                      className="note-item__archive-button"
                      onClick={() => handleArchiveNote(note.id)}
                    >
                      Kembalikan
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Tidak ada catatan diarsipkan.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;