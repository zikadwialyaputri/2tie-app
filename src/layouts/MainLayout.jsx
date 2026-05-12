import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full overflow-hidden">
                
                {/* Header */}
                <div className="w-full p-4">
                    <Header />
                </div>

                {/* Page Content */}
                <main className="flex-1 w-full p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}