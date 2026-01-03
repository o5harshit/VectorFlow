import { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  edges: state.edges,
  onEdgesChange: state.onEdgesChange,
  updateNodeField: state.updateNodeField,
});

export const TextNode = ({ data }) => {
  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState(data?.variables || []);
  const textareaRef = useRef(null);
  const { edges, onEdgesChange, updateNodeField } = useStore(selector, shallow);
  const nodeId = data?.id;

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // Update node data when text changes
  useEffect(() => {
    if (nodeId) {
      updateNodeField(nodeId, 'text', text);
    }
  }, [text, nodeId, updateNodeField]);

  // Update node data when variables change
  useEffect(() => {
    if (nodeId) {
      updateNodeField(nodeId, 'variables', variables);
    }
  }, [variables, nodeId, updateNodeField]);

  // Extract {{variables}} and handle edge removal
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }

    const newVariables = [...found];
    const oldVariables = variables;

    // Find removed variables
    const removedVariables = oldVariables.filter(v => !newVariables.includes(v));

    // Remove edges connected to removed handles
    if (removedVariables.length > 0 && nodeId) {
      const edgesToRemove = edges.filter(edge => 
        edge.target === nodeId && removedVariables.includes(edge.targetHandle)
      );
      
      if (edgesToRemove.length > 0) {
        onEdgesChange(edgesToRemove.map(edge => ({ type: 'remove', id: edge.id })));
      }
    }

    setVariables(newVariables);
  }, [text, variables, edges, onEdgesChange, nodeId]);

  return (
    <BaseNode title="Text" inputs={variables} outputs={["output"]} className="w-80">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        className="
          w-full
          bg-slate-700
          text-white
          rounded-md
          p-2
          text-sm
          resize-none
          overflow-hidden
          focus:outline-none
          focus:ring-2
          focus:ring-sky-400
        "
      />
    </BaseNode>
  );
}
