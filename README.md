# PDF Combiner

## Overview

**PDF Combiner** is a simple, free web app for merging multiple PDF files.  
I built this because I was tired of searching for easy PDF combiners online, only to find most were behind paywalls or filled with ads. This project lets you combine PDFs quickly, securely, and without any hidden costs.

## Features

- Upload multiple PDF files from your computer
- Merge PDFs with a single click
- Download the combined PDF instantly
- No file size limits (browser and server memory permitting)
- No ads, no paywall, no registration

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Flask, PyPDF2
- **File Handling:** All merging is done server-side for reliability and performance

## How It Works

1. Select or drag-and-drop your PDF files into the app.
2. Click "Combine & Download" to merge them.
3. The merged PDF is sent back to your browser for instant download.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Python 3](https://www.python.org/)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pdf-combiner.git
cd pdf-combiner
```

#### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

#### 3. Install backend dependencies

```bash
cd ../backend
pip install flask flask-cors PyPDF2
```

#### 4. Run the backend server

```bash
python combine.py
```

#### 5. Run the frontend

```bash
cd ../frontend
npm run dev
```

#### 6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Security & Privacy

- Your PDFs are never stored or shared.
- Files are processed in memory and deleted after merging.

