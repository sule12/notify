import { useState } from "react";
const NoteForm = () => {
    const [title, SetTitle] = useState('');
    return <form className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
                Title
            </label>
            <input type="text" className="w-full p-2 border rounded-lg" value={title} onChange={() => SetTitle()} />
        </div>
    </form>
};
 
export default NoteForm;