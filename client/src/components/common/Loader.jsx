import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="relative">
      <div className="w-16 h-16 border-t-4 border-b-4 border-yellow-400 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-yellow-400 text-sm font-bold">SKY</span>
      </div>
    </div>
  </div>
  )
}

export default Loader
