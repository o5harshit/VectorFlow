// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setShowResult(false);

    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes: nodes.map(node => ({
            id: node.id,
            type: node.type,
            data: node.data,
          })),
          edges: edges.map(edge => ({
            id: edge.id,
            source: edge.source,
            target: edge.target,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit pipeline');
      }

      const resultData = await response.json();
      setResult(resultData);
      setShowResult(true);
    } catch (error) {
      setError(error.message);
      setShowResult(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowResult(false);
    setResult(null);
    setError(null);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className={`font-bold py-2 px-4 rounded-lg transition-colors ${
            isLoading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? '⏳ Wait analyzing...' : 'Submit'}
        </button>
      </div>

      {/* Result Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                {error ? '❌ Error' : '✅ Pipeline Analysis'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>

            {error ? (
              <div className="text-red-400 mb-4">
                <p>{error}</p>
              </div>
            ) : (
              <div className="space-y-3 text-white">
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                  <span className="font-medium">Number of Nodes:</span>
                  <span className="text-blue-400 font-bold text-lg">{result.num_nodes}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                  <span className="font-medium">Number of Edges:</span>
                  <span className="text-green-400 font-bold text-lg">{result.num_edges}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                  <span className="font-medium">Is DAG:</span>
                  <span className={`font-bold text-lg ${result.is_dag ? 'text-emerald-400' : 'text-red-400'}`}>
                    {result.is_dag ? '✅ Yes' : '❌ No'}
                  </span>
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
