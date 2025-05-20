// frontend/src/pages/Dashboard.tsx
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  console.log('user', user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-sky-700 mb-2">Welcome, {user?.fullName}!</h1>
          <p className="text-gray-600 mb-4">
            This is your CorpPrez dashboard. Here you can manage your projects, generate presentations, and update your profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-sky-700 mb-2">Your Email</span>
              <span className="text-gray-800">{user?.email}</span>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-sky-700 mb-2">Organization</span>
              <span className="text-gray-800">{user?.organization}</span>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-sky-700 mb-2">Phone Number</span>
              <span className="text-gray-800">{user?.phone}</span>
            </div>
            {/* Add more user/project info here as needed */}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-sky-700 mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/upload"
              className="flex-1 inline-block text-center px-6 py-3 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition"
            >
              Upload New Project
            </a>
            <a
              href="/templates"
              className="flex-1 inline-block text-center px-6 py-3 rounded-md bg-indigo-50 text-sky-700 font-semibold hover:bg-indigo-100 transition"
            >
              Manage Templates
            </a>
            {/* Add more actions as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}