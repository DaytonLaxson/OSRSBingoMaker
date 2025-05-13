import React, { use, useState } from 'react';
import '../css/HomePage.css'; // We'll create this file for styling
import { useNavigate } from 'react-router-dom';

function HomePage() {
  // State for toggling the join form
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [boardCode, setBoardCode] = useState('');
  const navigate = useNavigate();

  // Handle create board button click
  const handleCreateBoard = () => {
    navigate('/create-board');
  };

  // Handle form submission
  const handleJoinBoard = (e) => {
    e.preventDefault();
    if (!boardCode.trim()) {
      alert('Please enter a valid board code.');
      return;
    }
    alert(`Joining board with code: ${boardCode}`);
  };

  return (
    <div className="homepage">
      <div className="container">
        <h1>RuneScape Bingo Maker</h1>
        
        <div className="description">
          <p>Create custom bingo boards for your clan, friends, or just because.</p>
        </div>
        
        <div className="button-container">
          {/* Create Board Button */}
          <button 
            className="main-button" 
            onClick={handleCreateBoard}
          >
            Create New Board
          </button>
          
          {/* Join Board Button */}
          <button 
            className="main-button" 
            onClick={() => setShowJoinForm(!showJoinForm)}
          >
            Join Existing Board
          </button>
          
          {/* Conditional Join Form */}
          {showJoinForm && (
            <form className="join-form" onSubmit={handleJoinBoard}>
              <input
                type="text"
                value={boardCode}
                onChange={(e) => setBoardCode(e.target.value)}
                placeholder="Enter Board Code"
              />
              <button type="submit">Join Board</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="footer">
        &copy; RuneScape Bingo Maker
      </div>
    </div>
  );
}

export default HomePage;