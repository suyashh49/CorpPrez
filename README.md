# CorpPrez

An AI-powered web application that automatically generates professional presentations from code repositories, using your company's Google Slides templates.

## Core Features

1. **Code Input**
   - Accept Git repository URLs or ZIP file uploads
   - Secure handling of corporate codebases
   - Support for private repositories

2. **Template Integration**
   - Google Slides template selection
   - Company branding preservation
   - Customizable slide layouts

3. **Intelligent Analysis**
   - Automatic sequence diagram generation
   - Code structure analysis
   - Feature and workflow detection

4. **Smart Content Generation**
   - Project title and overview
   - Technical architecture diagrams
   - Tech stack analysis
   - Problem statement generation
   - Workflow documentation
   - Use case identification
   - Customizable content selection

5. **Professional Output**
   - Template-based presentation generation
   - Google Slides integration
   - Downloadable presentation files

## Tech Stack

### Frontend
- React (Vite) - Modern, fast development
- Tailwind CSS - Responsive, beautiful UI
- React Router - Navigation
- Zustand - State management
- React Dropzone - File uploads
- Formik - Form handling
- React Flow - Diagram visualization

### Backend
- Node.js + Express - API server
- Tree-Sitter - Code analysis
- PlantUML - Sequence diagrams
- OpenAI API - Content generation
- Google Slides API - Template integration

### Security (POC Phase)
- Temporary file storage
- Secure API endpoints
- No persistent data storage
- HTTPS encryption

## Project Structure

CorpPrez/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── upload/ # File/Git URL upload components
│ │ │ ├── template/ # Google Slides template selection
│ │ │ ├── analysis/ # Code analysis visualization
│ │ │ ├── content/ # Content selection and preview
│ │ │ └── common/ # Shared UI components
│ │ ├── pages/
│ │ │ ├── Upload/ # Step 1: Code input
│ │ │ ├── Template/ # Step 2: Template selection
│ │ │ ├── Analysis/ # Step 3: Code analysis
│ │ │ ├── Content/ # Step 4: Content selection
│ │ │ └── Preview/ # Step 5: Final preview
│ │ ├── store/ # State management
│ │ ├── api/ # API integration
│ │ └── utils/ # Helper functions
│ └── public/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ ├── upload.js # File upload handling
│ │ │ ├── analysis.js # Code analysis
│ │ │ ├── diagrams.js # Sequence diagram generation
│ │ │ ├── content.js # Content generation
│ │ │ └── slides.js # Google Slides integration
│ │ ├── services/
│ │ │ ├── git.js # Git repository handling
│ │ │ ├── parser.js # Code parsing
│ │ │ ├── plantuml.js # Diagram generation
│ │ │ ├── openai.js # AI content generation
│ │ │ └── slides.js # Slides API integration
│ │ └── utils/
│ └── config/
│
└── README.md


## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git
- Google Cloud Platform account (for Slides API)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CorpPrez.git
cd CorpPrez
```

2. Frontend setup:
```bash
cd frontend
npm install
```

3. Backend setup:
```bash
cd ../backend
npm install
```

4. Environment setup:
   - Create `.env` files in both frontend and backend
   - Add required API keys and configuration

### Development

1. Start frontend:
```bash
cd frontend
npm run dev
```

2. Start backend:
```bash
cd backend
npm run dev
```

## Implementation Phases

### Phase 1: Basic Infrastructure
- Project setup
- Basic UI components
- File upload system
- Google Slides integration

### Phase 2: Code Analysis
- Git repository handling
- ZIP file processing
- Basic code parsing
- Sequence diagram generation

### Phase 3: AI Integration
- OpenAI integration
- Content generation
- Template filling
- Presentation generation

### Phase 4: Security & Polish
- Security improvements
- Error handling
- UI/UX refinement
- Performance optimization

## Security Considerations (POC Phase)

1. **Data Handling**
   - Temporary storage only
   - Automatic cleanup
   - No persistent logging

2. **API Security**
   - Rate limiting
   - Input validation
   - Error handling

3. **Future Enhancements**
   - User authentication
   - Encrypted storage
   - Audit logging
   - Compliance features

## License

MIT License