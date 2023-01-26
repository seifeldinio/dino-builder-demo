import React from 'react'

const NotConnectedBanner = () => {
  return (
    <div className="flex bg-red h-[30px] items-center justify-center content-center fade-down">
      <span className="text-white">
        You're not connected to Roboot.io, check your internet connection and
        try again
      </span>
    </div>
  );
}

export default NotConnectedBanner