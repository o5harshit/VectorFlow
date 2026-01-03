# VectorShift Pipeline Builder

A modern, interactive visual pipeline builder for data processing workflows. This project demonstrates advanced React development skills, graph theory implementation, and full-stack application architecture.

## 🚀 Features

### Core Functionality
- **Visual Pipeline Design**: Drag-and-drop interface for building data processing pipelines
- **Node-Based Architecture**: 8 different node types for various data operations
- **Real-time Validation**: Backend validation ensures pipeline integrity and DAG structure
- **Interactive UI**: Modern, responsive interface with dark/light theme support

### Node Types
- **Input Node** 🔵 - Data ingestion from various sources
- **Text Node** 📝 - Text processing and manipulation
- **LLM Node** 🤖 - Large Language Model integration for AI processing
- **Logger Node** 📊 - Logging and monitoring operations
- **Formatter Node** 🎨 - Data formatting and transformation
- **Merge Node** 🔗 - Data stream combination and aggregation
- **Delay Node** ⏱️ - Time-based operations and scheduling
- **Output Node** 🟢 - Data export and result delivery

### Advanced Features
- **Undo/Redo**: Full history management for pipeline editing
- **Auto-Layout**: Automatic graph layout using Dagre algorithm
- **Export/Import**: JSON-based pipeline serialization
- **Keyboard Shortcuts**: Enhanced productivity with hotkeys
- **Responsive Design**: Works seamlessly across devices
- **Theme Toggle**: Dark and light mode support

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **ReactFlow** - Powerful library for node-based interfaces
- **Zustand** - Lightweight state management with undo/redo
- **Tailwind CSS** - Utility-first CSS framework
- **Dagre** - Graph layout and positioning algorithm

### Backend
- **FastAPI** - High-performance Python web framework
- **NetworkX** - Graph analysis and DAG validation
- **Pydantic** - Data validation and serialization
- **Uvicorn** - ASGI server for production deployment

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd VectorShift
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv
# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
python main.py
```
The backend will start on `http://localhost:8000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```
The frontend will start on `http://localhost:3000`

## 📖 Usage

### Building a Pipeline

1. **Add Nodes**: Drag nodes from the toolbar onto the canvas
2. **Connect Nodes**: Click and drag from output handles to input handles
3. **Configure Nodes**: Click on nodes to edit their properties
4. **Validate Pipeline**: Click "Submit Pipeline" to check for errors
5. **Export/Import**: Use the toolbar buttons to save/load pipelines

### Node Configuration

Each node type has specific configuration options:
- **Input Node**: Define data source and format
- **Text Node**: Set text processing rules and variables
- **LLM Node**: Configure AI model parameters
- **Output Node**: Specify destination and format

### Keyboard Shortcuts

- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Y` / `Cmd+Y` - Redo
- `Ctrl+S` / `Cmd+S` - Export pipeline
- `Delete` / `Backspace` - Remove selected nodes

## 🏗️ Project Structure

```
VectorShift/
├── backend/
│   ├── main.py              # FastAPI server and pipeline validation
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js       # Main application component
│   │   │   ├── ui.js        # ReactFlow canvas component
│   │   │   ├── store.js     # Zustand state management
│   │   │   ├── toolbar.js   # Node palette component
│   │   │   ├── submit.js    # Pipeline submission logic
│   │   │   └── draggableNode.js # Draggable node buttons
│   │   ├── nodes/           # Individual node components
│   │   │   ├── BaseNode.js  # Abstract base node component
│   │   │   ├── inputNode.js
│   │   │   ├── textNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── loggerNode.js
│   │   │   ├── formatterNode.js
│   │   │   ├── mergeNode.js
│   │   │   └── delayNode.js
│   │   ├── index.js         # Application entry point
│   │   ├── index.css        # Global styles and utilities
│   │   └── utils/
│   │       └── layoutUtils.js # Graph layout utilities
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🔌 API Documentation

### Backend Endpoints

#### POST `/pipeline/validate`
Validates a pipeline configuration and checks for DAG validity.

**Request Body:**
```json
{
  "nodes": [
    {
      "id": "input-1",
      "type": "customInput",
      "data": {
        "nodeType": "customInput",
        "inputName": "Data Source",
        "inputType": "Text"
      }
    }
  ],
  "edges": [
    {
      "source": "input-1",
      "target": "text-1",
      "sourceHandle": "output",
      "targetHandle": "input"
    }
  ]
}
```

**Response:**
```json
{
  "is_dag": true,
  "num_nodes": 2,
  "num_edges": 1,
  "errors": []
}
```

## 🎨 UI/UX Features

- **Responsive Design**: Adapts to different screen sizes
- **Dark/Light Theme**: Toggle between themes for user preference
- **Smooth Animations**: CSS transitions and ReactFlow animations
- **Professional Styling**: Modern design with consistent spacing and typography
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Development

### Running Tests
```bash
# Backend tests
cd backend
python -m pytest

# Frontend tests
cd frontend
npm test
```

### Building for Production
```bash
# Frontend production build
cd frontend
npm run build

# Backend can be deployed using uvicorn or gunicorn
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Harshit Srivastava**
- Technical Assessment Submission for VectorShift
- Demonstrates full-stack development capabilities
- Focus on modern web technologies and user experience

---

*Built with ❤️ using React, FastAPI, and modern web technologies*