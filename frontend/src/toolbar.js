// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const nodeConfigs = [
        { type: 'customInput', label: 'Input', icon: '📥' },
        { type: 'llm', label: 'LLM', icon: '🤖' },
        { type: 'customOutput', label: 'Output', icon: '📤' },
        { type: 'text', label: 'Text', icon: '📝' },
        { type: 'logger', label: 'Logger', icon: '📊' },
        { type: 'formatter', label: 'Formatter', icon: '🔧' },
        { type: 'merge', label: 'Merge', icon: '🔗' },
        { type: 'delay', label: 'Delay', icon: '⏱️' },
    ];

    return (
        <div className="space-y-2">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {nodeConfigs.map((config) => (
                    <DraggableNode
                        key={config.type}
                        type={config.type}
                        label={config.label}
                        icon={config.icon}
                    />
                ))}
            </div>
            <div className="text-xs text-slate-400 text-center">
                💡 Tip: Select nodes/edges and press <kbd className="bg-slate-700 px-1 rounded">Delete</kbd> or <kbd className="bg-slate-700 px-1 rounded">Backspace</kbd> to remove them
            </div>
        </div>
    );
};
