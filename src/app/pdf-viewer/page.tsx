// app/pdf-viewer/page.tsx
'use client';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../components/PDFViewer'), {
  ssr: false
});

export default function PDFViewerPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">PDF Viewer</h1>
      <PDFViewer pdfUrl="/sample.pdf" />
    </main>
  );
}