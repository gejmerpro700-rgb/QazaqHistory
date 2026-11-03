interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  return (
    <div className={`video-frame relative rounded-xl overflow-hidden ${className}`} style={{ backgroundColor: '#000' }}>
      <video
        controls
        poster={poster}
        className="w-full h-full"
        style={{ maxHeight: '480px', display: 'block' }}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
        Браузер бейнені қолдамайды.
      </video>
    </div>
  );
}
