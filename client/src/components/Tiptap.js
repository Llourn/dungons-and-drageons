import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ propertyName, propertyObj, updateCharacter }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: propertyObj[propertyName],

    onUpdate() {
      clearTimeout(this.timer);
      const html = this.getHTML();

      this.timer = setTimeout(() => {
        let updatedContent = Object.assign({}, propertyObj);
        updatedContent[propertyName] = html;
        updateCharacter(updatedContent);
      }, 500);
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
