"use client";

import { useState, useEffect } from "react";

type SpotifyTrack = {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
};

type SpotifyTopTracksResponse = {
  items: Array<SpotifyTrack>;
};

function MusicApp() {
  const [tracks, setTracks] = useState<Array<SpotifyTrack>>([]);

  useEffect(() => {
    fetch("/api/spotify?path=me/top/tracks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: SpotifyTopTracksResponse) => setTracks(data.items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-3xl">My Top Tracks</h1>
          <a
            href="/api/spotify/logout"
            className="text-white font-medium hover:underline"
          >
            Logout
          </a>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {tracks.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tracks.map((track) => (
              <li
                key={track.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={track.album.images[0].url}
                  alt={`${track.album.name} album cover`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{track.name}</h2>
                  <p className="text-gray-500 mt-2">
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </main>
    </div>
  );
}

export default MusicApp;
