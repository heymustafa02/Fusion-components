// 'use client'

// import { SplineScene } from "@/components/ui/splite";
// import { Card } from "@/components/ui/card";
// import { Spotlight } from "@/components/ui/spotlight"
// import { SplashCursor } from "@/components/ui/splash-cursor";
 
// export function SplineSceneBasic() {
//   return (
    
//     <Card className="w-screen h-screen bg-white/[0.96] fixed inset-0 overflow-hidden">
    
//     {/* <Spotlight
//       className="-top-40 left-0 md:left-60 md:-top-20"
      
//     /> */}
//     <SplashCursor/>
      
//       <div className="flex h-full">
//         {/* Left content */}
//         <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//             Interactive 3D
//           </h1>
//           <p className="mt-4 text-neutral-300 max-w-lg">
//             Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
//             that capture attention and enhance your design.
//           </p>
//         </div>

//         {/* Right content */}
//         <div className="flex-1 relative">
//           <SplineScene 
//             scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </Card>
    
//   )
// }
// 'use client'

// import { useState } from 'react';
// import { SplineScene } from "@/components/ui/splite";
// import { Card } from "@/components/ui/cards";
// import { Spotlight } from "@/components/ui/spotlight"
// import { SplashCursor } from "@/components/ui/splash-cursor";
// import SparkleButton from '@/components/ui/sparkle-button';

// export function SplineSceneBasic() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleDoubleClick = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <Card className={`w-screen h-screen ${isDarkMode ? 'bg-black/[0.96]' : 'bg-white/[0.96]'} fixed inset-0 overflow-hidden`}>
//       {/* <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//       /> */}
//       <SplashCursor />
      
//       <div className="flex h-full">
//         {/* Left content */}
//         <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
//         <div className="flex flex-col mx-auto justify-center text-center items-center align-center py-20">
//            <SparkleButton text="Sparkle Button" size="lg" />    
//          </div>
//           <p className={`mt-4 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-300'} max-w-lg`}>
//             Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
//             that capture attention and enhance your design.
//           </p>
//         </div>

//         {/* Right content */}
//         <div className="flex-1 relative" onDoubleClick={handleDoubleClick}>
//           <SplineScene 
//             scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </Card>
//   );
// }
'use client'

import { useState, useRef, MouseEvent } from 'react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/cards";
import { SplashCursor } from "@/components/ui/splash-cursor";
import MyComponent from './mybutton';
import MyButton from './mybutton';

export function SplineSceneBasic() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
  
    const handleDoubleClick = (): void => {
      setIsDarkMode(prevMode => !prevMode);
    };
  
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const cursorX = e.clientX;
        const cursorY = e.clientY;
  
        const isNearButton =
          cursorX >= buttonRect.left - 20 &&
          cursorX <= buttonRect.right + 20 &&
          cursorY >= buttonRect.top - 20 &&
          cursorY <= buttonRect.bottom + 20;
  
        setIsButtonHighlighted(isNearButton);
      }
    };
  

  return (
//     <Card className={`w-screen h-screen ${isDarkMode ? 'bg-black/[0.96]' : 'bg-white/[0.96]'} fixed inset-0 overflow-hidden`}>
//       {/* <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//       /> */}
//       <SplashCursor className="z-0" /> {/* Ensure SplashCursor is behind other elements */}
      
//       <div className="flex h-full" onMouseMove={handleMouseMove}>
//         {/* Left content */}
//         <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
//           <div className="flex flex-col mx-auto justify-center text-center items-center align-center py-20">
            
//           <MyButton
//               ref={buttonRef}
//               text="Sparkle Button"
//               size="lg"
//               href="https://example.com" // Your desired link
//               className={`z-20 transition-all duration-300 ${
//                 isButtonHighlighted ? 'scale-110 brightness-125' : ''
//               }`}
//             />
//           </div>
//           {/* <p className={`mt-4 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-300'} max-w-lg`}>
//             Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
//             that capture attention and enhance your design.
//           </p> */}
//         </div>

//         {/* Right content */}
//         <div className="flex-1 relative" onDoubleClick={handleDoubleClick}>
//           <SplineScene 
//             scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </Card>
//   );
// }


    <Card className={`w-screen h-screen ${isDarkMode ? 'bg-black/[0.96]' : 'bg-white/[0.96]'} fixed inset-0 overflow-hidden`}>
      <SplashCursor className="z-0" />
  
      {/* Change flex-row to flex-col on mobile */}
      <div className="flex flex-col md:flex-row h-full" onMouseMove={handleMouseMove}>
        {/* Left content - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 p-4 md:p-8 relative z-10 flex flex-col justify-start md:justify-center">
          <div className="flex flex-col mx-auto justify-center text-center items-center py-10 md:py-20">
            <MyButton
              ref={buttonRef}
              text="Sparkle Button"
              size="lg"
              href="https://example.com"
              className={`z-20 transition-all duration-300 ${
                isButtonHighlighted ? 'scale-110 brightness-125' : ''
              }`}
            />
          </div>
        </div>
  
        {/* Right content - Full height and width on mobile and desktop */}
        <div className="w-full md:w-1/2 h-screen md:h-full relative" onDoubleClick={handleDoubleClick}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}