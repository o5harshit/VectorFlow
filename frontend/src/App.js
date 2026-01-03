import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-4 shadow-lg flex-shrink-0 flex items-center justify-between">
        <h1 className="text-2xl font-bold">VectorShift Pipeline Builder</h1>
        <PipelineToolbar />
      </header>
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 bg-gray-900 flex flex-col">
          <div className="flex-1">
            <PipelineUI />
          </div>
          <footer className="bg-gray-800 p-4 border-t border-gray-700 flex-shrink-0">
            <SubmitButton />
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
