'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../studio/sanity.config';

export const dynamic = 'force-dynamic'; // потрібне для роботи студії в App Router

export default function AdminPage() {
  return <NextStudio config={config as any} />;
}
