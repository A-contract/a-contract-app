import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Paper } from "@mui/material";
import axios from "axios";
import mammoth from "mammoth";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useAction";

const ReactQuill = dynamic(() => import("react-quill-with-table"), {
  ssr: false,
});

const Workspace = () => {
  const workspaceState = useTypedSelector((state: any) => state.workspace);
  const { updateDraft } = useActions();

  useEffect(() => {
    console.log("kek");
    axios
      .get("http://localhost:8000/contracts/contractInProcess", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === 202) {
          console.log(response.data);
          if (!workspaceState.draft.edited) {
            console.log(response.data.content);
            updateDraft({
              content: response.data.content,
              edited: true,
            });
          }
        }
      });
  }, []);

  const draftEditorOnChange = (content: any) => {
    console.log(content);
    updateDraft({ content: content, edited: true });
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // Основные стили текста
    ["blockquote"], // Цитата и блок кода
    [{ color: [] }, { background: [] }], // Выделение текста цветом
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // Заголовки
    [{ list: "ordered" }, { list: "bullet" }], // Нумерованный и маркированный списки
    ["link", "image"], // Вставка ссылок и изображений
    [
      "table",
      "column-left",
      "column-right",
      "row-above",
      "row-below",
      "row-remove",
      "column-remove",
    ], // Таблицы
    ["comment"], // Комментарии
    ["clean"], // Удаление форматирования
  ];

  const modules = {
    toolbar: toolbarOptions,
    table: {
      tableClassName: "my-table",
      cellClassName: "my-cell",
    },
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "indent",
    "indent-",
    "table",
    "row-above",
    "row-below",
    "column-left",
    "column-right",
    "row-remove",
    "column-remove",
  ];

  return (
    <Paper sx={{ p: "20px", width: "1000px", borderCollapse: "collapse" }}>
      <ReactQuill
        theme="snow"
        value={workspaceState.draft.content}
        onChange={draftEditorOnChange}
        formats={formats}
        modules={modules}
      />
    </Paper>
  );
};

export default Workspace;
