import { useState } from "react";

const NoteHeader = ({ notes, sortBy, onSort }) => {
 
  return (
    <div className="note-header">
      <p>My Notes ({notes.length})</p>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
