import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Upload, Github, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function ProjectUploadUI() {
  const navigate = useNavigate();
  const { setRepositoryUrl, setZipFile, setUploadType } = useStore();

  const [gitUrl, setGitUrl] = useState('');
  const [error, setError] = useState('');
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGitSubmit = () => {
    if (!gitUrl.trim()) {
      setError('Please enter a repository URL');
      return;
    }
    if (
      !gitUrl.includes('github.com') &&
      !gitUrl.includes('gitlab.com') &&
      !gitUrl.includes('bitbucket.org')
    ) {
      setError('Please enter a valid Git repository URL');
      return;
    }

    setIsSubmitting(true);
    // Simulate loading state for better UX
    setTimeout(() => {
      setError('');
      setRepositoryUrl(gitUrl);
      setUploadType('git');
      navigate('/projectanalysis');
    }, 800);
  };

  const handleContinueWithZip = () => {
    if (uploadedFile) {
      setIsSubmitting(true);
      // Simulate loading state for better UX
      setTimeout(() => {
        setZipFile(uploadedFile);
        setUploadType('zip');
        navigate('/projectanalysis');
      }, 800);
    }
  };

  const handleFiles = (files:any) => {
    if (files && files[0]) {
      const file = files[0];
      if (file.name.endsWith('.zip')) {
        setUploadedFile(file);
        setError(''); 
      } else {
        setError('Please upload a .zip file.'); 
        setUploadedFile(null); 
      }
    }
  };

  const getRootProps = () => ({
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDragOver: (e:any) => {
      e.preventDefault();
      setIsDragActive(true);
    },
    onDrop: (e:any) => {
      e.preventDefault();
      setIsDragActive(false);
      handleFiles(e.dataTransfer.files);
    },
    onClick: () => document.getElementById('file-upload')?.click(),
  });

  const getInputProps = () => ({
    id: 'file-upload',
    type: 'file',
    accept: '.zip',
    className: 'hidden',
    onChange: (e:any) => handleFiles(e.target.files),
  });

  // Custom styles based on CSS variables
  const customStyles = {
    container: {
      backgroundColor: 'var(--primary-color)',
      color: 'white'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    header: {
      backgroundColor: 'var(--secondary-color)',
      color: 'white'
    },
    primaryButton: {
      backgroundColor: 'var(--primary-color)',
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: 'var(--secondary-color)',
      color: 'white'
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-sky-50" >
      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden" style={customStyles.card}>
        <header className="px-6 py-8 border-b bg-sky-900 text-white">
          <h1 className="text-3xl font-bold">
            Upload Your Project
          </h1>
          <p className="mt-2 text-lg opacity-90">
            Provide your codebase by linking a Git repository or uploading a ZIP file.
          </p>
        </header>

        <div className="p-6 space-y-8 md:p-8 bg-white">
          {/* Git Repository Upload */}
          <section className="rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md">
            <div className="p-4 bg-gray-50 flex items-center border-b border-gray-200">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: 'rgba(0, 2, 46, 0.1)' }}>
                <Github className="h-6 w-6" style={{ color: 'var(--secondary-color)' }} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Git Repository</h2>
            </div>

            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <label htmlFor="gitUrl" className="block text-sm font-medium text-gray-700">
                  Repository URL
                </label>
                <input
                  type="text"
                  id="gitUrl"
                  value={gitUrl}
                  onChange={(e) => { setGitUrl(e.target.value); setError(''); }}
                  placeholder="e.g., https://github.com/yourname/project"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-blue-500 transition"
                  style={{ boxShadow: 'focus: 0 0 0 2px var(--primary-color), 0 0 0 4px white', color: 'black' }}
                />
                {error && !uploadedFile && gitUrl.length > 0 && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
              </div>
              <button 
                onClick={handleGitSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto md:ml-auto md:flex md:items-center font-medium py-2 px-6 rounded-lg 
                transition flex items-center justify-center space-x-2 disabled:opacity-70 
                btn-secondary !bg-sky-900 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Continue with Git</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </section>

          {/* ZIP File Upload */}
          <section className="rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md">
            <div className="p-4 bg-gray-50 flex items-center border-b border-gray-200">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: 'rgba(105, 150, 172, 0.1)' }}>
                <Upload className="h-6 w-6" style={{ color: 'var(--primary-color)' }} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">ZIP File</h2>
            </div>

            {!uploadedFile ? (
              <div 
                {...getRootProps()}
                className={`p-8 flex flex-col items-center justify-center text-center cursor-pointer border-2 border-dashed rounded-lg mx-5 my-5 transition-colors ${
                  isDragActive ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
                style={{ 
                  borderColor: isDragActive ? 'var(--primary-color)' : '#e5e7eb',
                  backgroundColor: isDragActive ? 'rgba(105, 150, 172, 0.05)' : 'white'
                }}
              >
                <input {...getInputProps()} />
                <div className="space-y-3">
                  <div className="p-3 rounded-full inline-flex" style={{ backgroundColor: 'rgba(105, 150, 172, 0.1)' }}>
                    <Upload className="h-8 w-8" style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    Drag & drop your .zip file here
                  </p>
                  <p className="text-gray-500">
                    or <span className="underline font-medium" style={{ color: 'var(--primary-color)' }}>click to browse</span>
                  </p>
                  {error && !gitUrl && <p className="text-sm text-red-600 mt-2">{error}</p>}
                </div>
              </div>
            ) : (
              <div className="p-5 space-y-4">
                <div className="flex items-center p-3 rounded-lg border" style={{ 
                  backgroundColor: 'rgba(105, 150, 172, 0.05)',
                  borderColor: 'rgba(105, 150, 172, 0.2)'
                }}>
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--primary-color)' }} />
                  <span 
                    className="font-medium text-sm truncate text-gray-800"
                    title={uploadedFile}
                  >
                    {uploadedFile}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => { setUploadedFile(null); setError('');}}
                    className="sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition"
                  >
                    Upload a different file
                  </button>
                  <button 
                    onClick={handleContinueWithZip}
                    disabled={isSubmitting}
                    className="sm:flex-1 px-4 py-2 rounded-lg font-medium transition flex items-center justify-center disabled:opacity-70 btn-primary"
                    style={customStyles.primaryButton}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue with ZIP</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        <footer className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm flex items-center justify-center">
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
            Your code is processed securely and is not stored after analysis.
          </p>
        </footer>
      </div>
    </div>
  );
}