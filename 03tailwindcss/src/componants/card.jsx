import React from 'react'

function Card(props) {
    console.log("props", props);
    return (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <img
        src="https://tecdn.b-cdn.net/img/new/slides/041.jpg" // Replace with your image URL
        alt="Profile"
        className="w-64 h-64 object-cover rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
      />
    </div>
    )
}

export default Card
