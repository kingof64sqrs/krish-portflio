# Desktop PC 3D Model - Complete Import Flow Documentation

## Overview
This document details the complete import chain and integration of the `desktop_pc` 3D model into the 3D React Portfolio application. The model is a Gaming Desktop PC that renders in the Hero section using React Three Fiber.

---

## 📁 Asset Structure

### Location: `/public/desktop_pc/`

```
public/desktop_pc/
├── scene.gltf          # Main 3D model file (GL Transmission Format)
├── scene.bin           # Binary data for the model (geometry, animations)
├── license.txt         # CC-BY-4.0 license information
└── textures/           # Texture files directory (50 texture files)
    ├── Material.002_baseColor.png
    ├── Material.023_baseColor.jpeg
    ├── Material.074_*_baseColor.png/jpeg
    ├── Material.074_*_emissive.png
    └── ... (50 total texture files)
```

### Model Information
- **Title**: Gaming Desktop PC
- **Author**: Yolala1232
- **Source**: Sketchfab
- **License**: CC-BY-4.0 (Commercial use allowed with attribution)
- **Format**: GLTF (GL Transmission Format)

---

## 🔄 Complete Import Flow

### Step 1: Model Loading in Component
**File**: [`src/components/canvas/Computers.jsx`](src/components/canvas/Computers.jsx#L8)

```jsx
import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  // Load the 3D model from public directory
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.10} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      {/* Render the 3D model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.7}
        position={isMobile ? [0, -4.5, -2.2] : [0, -4.5, -3.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
```

**Key Points**:
- `useGLTF()` hook from `@react-three/drei` loads the GLTF model
- Path is relative to the `public` directory
- Model is rendered using `<primitive>` component with the loaded scene
- Responsive scaling based on mobile/desktop viewport
- Custom lighting setup (hemisphere, spot, and point lights)

---

### Step 2: Canvas Wrapper
**File**: [`src/components/canvas/Computers.jsx`](src/components/canvas/Computers.jsx#L32-L75)

```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Responsive breakpoint at 640px
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
```

**Key Features**:
- Wraps the 3D model in a React Three Fiber `<Canvas>`
- Implements responsive design with mobile detection
- `<Suspense>` with custom loader for async model loading
- `<OrbitControls>` for limited user interaction (no zoom, fixed polar angle)
- `<Preload all />` to preload all assets
- Optimized rendering with `frameloop='demand'`

---

### Step 3: Canvas Module Export
**File**: [`src/components/canvas/index.js`](src/components/canvas/index.js)

```javascript
import EarthCanvas from "./Earth";
import BallCanvas from "./Ball";
import ComputersCanvas from "./Computers";
import StarsCanvas from "./Stars";

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
```

**Purpose**: Centralizes all canvas component exports for easier importing.

---

### Step 4: Components Module Re-export
**File**: [`src/components/index.js`](src/components/index.js)

```javascript
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import Navbar from './Navbar';
// ... other imports

export {
  Hero,
  Navbar,
  Content,
  Tech,
  Experience,
  Project,
  Education,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas,  // ← Desktop PC Canvas exported here
  StarsCanvas,
  Profile,
  Footer,
  Achievement,
}
```

**Purpose**: Main component barrel export for the entire app.

---

### Step 5: Integration in Hero Component
**File**: [`src/components/Hero.jsx`](src/components/Hero.jsx)

```jsx
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Hero content - name, title, social links */}
      <div className="flex">
        {/* ... header content ... */}
      </div>

      {/* 3D Desktop PC Model Rendered Here */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-2 bottom-6 w-10 flex justify-end items-center'>
        {/* ... scroll animation ... */}
      </div>
    </section>
  );
};

export default Hero;
```

**Context**: The `ComputersCanvas` (desktop_pc model) is rendered as the background 3D element in the Hero section.

---

### Step 6: Hero in Main App
**File**: [`src/App.jsx`](src/App.jsx)

```jsx
import { Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />  {/* ← Desktop PC renders here */}
        </div>
        {/* ... other sections ... */}
      </div>
    </BrowserRouter>
  )
}

export default App;
```

---

### Step 7: Application Entry Point
**File**: [`src/main.jsx`](src/main.jsx)

```jsx
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

**Final**: App is mounted to the DOM, rendering the entire component tree including the desktop_pc model.

---

## 🔧 Technical Dependencies

From [`package.json`](package.json):

### Core 3D Rendering Libraries
```json
{
  "@react-three/fiber": "^8.15.10",  // React renderer for Three.js
  "@react-three/drei": "^9.88.13",    // Helpers for R3F (useGLTF, OrbitControls, etc.)
  "three": "^0.150.1"                  // Three.js core library
}
```

### Supporting Libraries
- **framer-motion**: Animations for scroll indicator
- **react**: Core React library
- **react-dom**: React DOM rendering

---

## 📊 Import Chain Visualization

```
public/desktop_pc/scene.gltf (3D Model Asset)
            ↓
    useGLTF("./desktop_pc/scene.gltf")
            ↓
    Computers.jsx (Component)
            ↓
    ComputersCanvas (Wrapped in Canvas)
            ↓
    canvas/index.js (Export)
            ↓
    components/index.js (Re-export)
            ↓
    Hero.jsx (Import & Render)
            ↓
    App.jsx (Component Composition)
            ↓
    main.jsx (DOM Rendering)
            ↓
    index.html (Root Element #root)
```

---

## 🎨 Rendering Configuration

### Camera Settings
- **Position**: `[20, 3, 5]`
- **FOV**: `25`

### Model Transforms
- **Desktop Scale**: `0.7`
- **Mobile Scale**: `0.6`
- **Desktop Position**: `[0, -4.5, -3.5]`
- **Mobile Position**: `[0, -4.5, -2.2]`
- **Rotation**: `[-0.01, -0.2, -0.1]`

### Lighting
1. **Hemisphere Light**: `intensity: 0.10`, `groundColor: black`
2. **Spot Light**: `position: [-20, 50, 10]`, `angle: 0.12`, `intensity: 1`, shadows enabled
3. **Point Light**: `intensity: 1`

---

## 🔍 How GLTF Loading Works
1. **`useGLTF` Hook**: 
   - Provided by `@react-three/drei`
   - Loads GLTF/GLB files asynchronously
   - Parses JSON scene structure from `scene.gltf`
   - Loads binary data from `scene.bin`
   - Loads and applies textures from `textures/` directory
   - Returns an object with `scene`, `nodes`, `materials`

2. **File Resolution**:
   - Path `"./desktop_pc/scene.gltf"` resolves relative to `public/` directory
   - Vite serves static assets from `public/` at the root URL
   - GLTF loader automatically resolves references to `.bin` and texture files

3. **Automatic Texture Loading**:
   - GLTF file contains references to texture paths
   - Three.js TextureLoader automatically fetches textures
   - 50 texture files provide material properties (baseColor, emissive, metallic, roughness)

---

## 🚀 Performance Optimizations

1. **Lazy Loading**: `<Suspense>` with `CanvasLoader` fallback
2. **Demand Rendering**: `frameloop='demand'` - renders only when needed
3. **Preloading**: `<Preload all />` ensures smooth initial render
4. **Responsive Scaling**: Different scales/positions for mobile to optimize viewport
5. **Device Pixel Ratio**: `dpr={[1, 2]}` for retina display support

---

## 📝 Usage Notes

### To Use This Model
1. Ensure model files exist in `public/desktop_pc/`
2. Import `ComputersCanvas` from `"./components"`
3. Render within a container with defined dimensions
4. Model auto-adapts to mobile/desktop viewport

### To Replace This Model
Replace the following in [`Computers.jsx`](src/components/canvas/Computers.jsx#L8):
```jsx
const computer = useGLTF("./your-model-path/scene.gltf");
```
Adjust scale, position, and rotation as needed.

---

## 📜 License Attribution

This work uses "Gaming Desktop PC" by Yolala1232, licensed under CC-BY-4.0.  
Source: https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66

---

## 🎯 Summary

The `desktop_pc` folder is fully integrated into the React application through:
1. **Asset Storage**: Files in `public/desktop_pc/`
2. **Loading**: `useGLTF` hook in `Computers.jsx`
3. **Rendering**: React Three Fiber `<Canvas>` and `<primitive>`
4. **Export Chain**: `canvas/index.js` → `components/index.js`
5. **Integration**: Used in `Hero.jsx`
6. **Composition**: Rendered via `App.jsx`
7. **Mounting**: Displayed through `main.jsx` to DOM

The model serves as an interactive 3D background element in the portfolio's hero section, enhancing the visual appeal with professional 3D graphics.
