import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Paper } from "@mui/material";
import axios from "axios";
import mammoth from "mammoth";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useAction";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Workspace = () => {
  const workspaceState = useTypedSelector((state: any) => state.workspace);
  const { updateDraft } = useActions();

  useEffect(() => {
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

  return (
    <Paper sx={{ p: "20px", width: "700px" }}>
      <ReactQuill
        theme="snow"
        value={workspaceState.draft.content}
        onChange={draftEditorOnChange}
        modules={{ toolbar: true }}
      />
    </Paper>
  );
};

export default Workspace;
