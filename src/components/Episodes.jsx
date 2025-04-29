import React, { useState } from "react";

const Episodes = () => {
  const episodes = [
    {
      title: "Еп.011 | Димитър Шиков",
      url: "https://www.youtube.com/watch?v=vxR4ogyyRuQ&t=1s",
    },
    {
      title: "Еп.010 | Петко Меродийски",
      url: "https://www.youtube.com/watch?v=hCgyKgWUmhQ&t=1364s",
    },
    {
      title: "Еп.009 | Християн Стоилков",
      url: "https://www.youtube.com/watch?v=znZWYrLxCek",
    },
  ];

  const [selectedVideoId, setSelectedVideoId] = useState(null);

  // Функция за извличане на YouTube video ID от URL
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
    return match ? match[1] : null;
  };

  return (
    <section id="episodes" className="container mx-auto p-6">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
        Последните епизоди
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode, idx) => (
          <div key={idx} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{episode.title}</h3>
              <div className="card-actions justify-end">
                <button
                  onClick={() =>
                    setSelectedVideoId(getYouTubeVideoId(episode.url))
                  }
                  className="btn btn-primary btn-sm"
                >
                  Гледай сега
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideoId && (
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-6xl aspect-video mt-10">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Episodes;
