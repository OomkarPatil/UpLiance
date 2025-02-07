import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Underline, List } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function RichTextEditor() {
  const { userData } = useSelector((state) => state.user)

  const editor = useEditor({
    extensions: [StarterKit],
    content: userData ? `
      <h2>User Profile</h2>
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Address:</strong> ${userData.address}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
    ` : '<p>No user data available</p>',
  })

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-md p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('bold') ? 'bg-gray-100' : ''
          }`}
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('italic') ? 'bg-gray-100' : ''
          }`}
        >
          <Italic size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('underline') ? 'bg-gray-100' : ''
          }`}
        >
          <Underline size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('bulletList') ? 'bg-gray-100' : ''
          }`}
        >
          <List size={16} />
        </button>
      </div>
      <div className="border rounded-md p-4 min-h-[200px] bg-white">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}