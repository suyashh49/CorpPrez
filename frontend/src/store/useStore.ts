import { create } from 'zustand'

interface ProjectState {
  // Upload state
  repositoryUrl: string | null
  zipFile: File | null
  uploadType: 'git' | 'zip' | null
  
  // Template state
  selectedTemplate: string | null,
  
  // Analysis state
  sequenceDiagrams: any[]
  analysisComplete: boolean
  
  // Content state
  selectedSections: string[]
  generatedContent: any
  
  // Actions
  setRepositoryUrl: (url: string) => void
  setZipFile: (file: File) => void
  setUploadType: (type: 'git' | 'zip') => void
  setSelectedTemplate: (templateId: string) => void
  setSequenceDiagrams: (diagrams: any[]) => void
  setAnalysisComplete: (complete: boolean) => void
  setSelectedSections: (sections: string[]) => void
  setGeneratedContent: (content: any) => void
  reset: () => void
}

const initialState = {
  repositoryUrl: null,
  zipFile: null,
  uploadType: null,
  selectedTemplate: null,
  sequenceDiagrams: [],
  analysisComplete: false,
  selectedSections: [],
  generatedContent: null,
}

export const useStore = create<ProjectState>((set) => ({
  ...initialState,
  
  setRepositoryUrl: (url) => set({ repositoryUrl: url }),
  setZipFile: (file) => set({ zipFile: file }),
  setUploadType: (type) => set({ uploadType: type }),
  setSelectedTemplate: (templateId) => set({ selectedTemplate: templateId }),
  setSequenceDiagrams: (diagrams) => set({ sequenceDiagrams: diagrams }),
  setAnalysisComplete: (complete) => set({ analysisComplete: complete }),
  setSelectedSections: (sections) => set({ selectedSections: sections }),
  setGeneratedContent: (content) => set({ generatedContent: content }),
  reset: () => set(initialState),
}))