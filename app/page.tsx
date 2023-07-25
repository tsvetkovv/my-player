'use client'
import dynamic from 'next/dynamic';
import 'shaka-player/dist/controls.css';

// @ts-ignore
const ShakaPlayer = dynamic(() => import('shaka-player-react'), {ssr: false});

const videoSrc = "https://customer-if3agf4vopcgt7yg.cloudflarestream.com/b01cf3d4669745acca45624031d5d816/manifest/video.m3u8?betaCodecSuggestion=av1"

export default function Home() {
    // @ts-ignore
    return <ShakaPlayer autoPlay src={videoSrc}/>
}
