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
    axios
      .get("http://localhost:8000/contracts/contractInProcess", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === 200) {
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
    updateDraft({ content: content, edited: true });
  };

  // const toolbarOptions = [
  //   ["bold", "italic", "underline", "strike"], // Основные стили текста
  //   ["blockquote"], // Цитата и блок кода
  //   [{ color: [] }, { background: [] }], // Выделение текста цветом
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }], // Заголовки
  //   [{ list: "ordered" }, { list: "bullet" }], // Нумерованный и маркированный списки
  //   ["link", "image"], // Вставка ссылок и изображений
  //   [
  //     "table",
  //     "column-left",
  //     "column-right",
  //     "row-above",
  //     "row-below",
  //     "row-remove",
  //     "column-remove",
  //   ], // Таблицы
  //   ["comment"], // Комментарии
  //   ["clean"], // Удаление форматирования
  // ];

  // const modules = {
  //   toolbar: toolbarOptions,
  //   table: {
  //     tableClassName: "my-table",
  //     cellClassName: "my-cell",
  //   },
  //   clipboard: {
  //     matchVisual: false,
  //   },
  // };

  return (
    <Paper sx={{ p: "20px", width: "1000px", borderCollapse: "collapse" }}>
      {/* <ReactQuill
        theme="snow"
        //value={workspaceState.draft.content}
        onChange={draftEditorOnChange}
        //modules={modules}
      /> */}
    </Paper>
  );
};

export default Workspace;
