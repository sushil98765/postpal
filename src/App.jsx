
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { AuthProvider } from './store/auth-context'; // Import AuthProvider
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <AuthProvider> {/* Wrap the entire component tree with AuthProvider */}
      <PostListProvider>
        <Router>
          <div className="app-container">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div className="content">
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<PostList />} />
                <Route path="/create-post" element={<CreatePost />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </PostListProvider>
    </AuthProvider>
  );
}

export default App;
