"use client";

import { useEffect, useRef, useState } from "react";
import { video } from "@/content/media";
import { PlayIcon } from "./icons";
import { AttributionTag } from "./attribution-tag";

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const playRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => { if (playing) frameRef.current?.focus(); }, [playing]);

  return (
    <div className="video-player" data-owner="team">
      <div className="video-frame" aria-busy={playing && !loaded}>
        {playing ? (
          <>
            {!loaded && <p className="video-loading" role="status">{video.loadingLabel}</p>}
            <iframe ref={frameRef} src={`${video.embed}?autoplay=1&rel=0`} title={video.iframeTitle} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setLoaded(true)} />
          </>
        ) : (
          <button type="button" className="poster-button" ref={playRef} aria-label={`${video.playLabel} · ${video.duration}`} onClick={() => { setLoaded(false); setPlaying(true); }}>
            <img src={video.poster.src} width={video.poster.width} height={video.poster.height} alt={video.poster.alt} loading="lazy" decoding="async" />
            <span className="play-control"><PlayIcon /><span>{video.playLabel}<small>{video.duration}</small></span></span>
          </button>
        )}
      </div>
      {!playing && <p className="video-poster-credit small muted" data-owner={video.poster.attribution}>{video.posterLabel} <AttributionTag owner={video.poster.attribution} /> {video.poster.caption}</p>}
      <div className="video-controls">
        <a className="text-link" href={video.youtube} target="_blank" rel="noopener noreferrer">{playing ? video.fallbackLabel : video.directLabel}</a>
        {playing && <button type="button" className="text-button" onClick={() => {
          setPlaying(false);
          setLoaded(false);
          requestAnimationFrame(() => playRef.current?.focus());
        }}>{video.dismissLabel}</button>}
      </div>
    </div>
  );
}
