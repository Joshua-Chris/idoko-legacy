import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt =
  'Idoko Legacy LLC — Healthcare Logistics & Medical Courier Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = readFileSync(
    join(process.cwd(), 'public/assets/icons/light-logo.png'),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#172554',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        width={160}
        height={40}
        alt=""
        style={{ objectFit: 'contain' }}
      />
      <div
        style={{
          fontSize: 20,
          textTransform: 'uppercase',
          letterSpacing: 4,
          color: '#D89A0A',
          marginTop: 32,
        }}
      >
        Houston, Texas &middot; Healthcare Logistics
      </div>
      <div
        style={{ fontSize: 64, marginTop: 24, lineHeight: 1.1, maxWidth: 900 }}
      >
        Reliable healthcare logistics you can trust.
      </div>
      <div
        style={{ fontSize: 24, marginTop: 32, color: 'rgba(255,255,255,0.7)' }}
      >
        Idoko Legacy LLC &mdash; Trust today. Legacy tomorrow.
      </div>
    </div>,
    { ...size },
  );
}
