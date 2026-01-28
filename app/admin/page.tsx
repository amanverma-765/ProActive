export default function AdminPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen py-12 px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto">
                <h1 className="text-3xl font-bold text-text-main-light dark:text-white mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Appointments */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">calendar_month</span>
                            Recent Appointments
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-4 rounded-lg text-sm mb-4">
                            This is a mock admin view. In a real app, this would fetch from the database.
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="py-4 flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-text-main-light dark:text-white">John Doe</p>
                                        <p className="text-sm text-text-sec-light dark:text-gray-400">Manual Therapy • Oct 24, 2024</p>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Confirmed</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">mail</span>
                            Recent Messages
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-4 rounded-lg text-sm mb-4">
                            Mock messages view.
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="py-4">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-bold text-text-main-light dark:text-white">Jane Smith</p>
                                        <span className="text-xs text-text-sec-light dark:text-gray-500">2h ago</span>
                                    </div>
                                    <p className="text-sm text-text-sec-light dark:text-gray-400 line-clamp-2">
                                        Hi, I was wondering if you accept Blue Cross insurance? I tried calling but...
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
