// import React, { useEffect, useRef } from "react";

// // const FloatingParticles = ({ isDark }) => {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");

// //     // Function to set canvas size
// //     const setCanvasSize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };

// //     setCanvasSize(); // Initial size setting

// //     const particles = Array.from({ length: 50 }, () => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       vx: (Math.random() - 0.5) * 0.5,
// //       vy: (Math.random() - 0.5) * 0.5,
// //       radius: Math.random() * 2 + 1,
// //     }));

// //     let animationFrameId;

// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       ctx.fillStyle = isDark
// //         ? "rgba(124, 58, 237, 0.5)"
// //         : "rgba(99, 102, 241, 0.3)";

// //       particles.forEach((p) => {
// //         p.x += p.vx;
// //         p.y += p.vy;

// //         // Wrap particles around the canvas edges
// //         if (p.x < 0) p.x = canvas.width;
// //         if (p.x > canvas.width) p.x = 0;
// //         if (p.y < 0) p.y = canvas.height;
// //         if (p.y > canvas.height) p.y = 0;

// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
// //         ctx.fill();
// //       });

// //       animationFrameId = requestAnimationFrame(animate);
// //     };

// //     animate();

// //     const handleResize = () => {
// //       setCanvasSize();
// //       // Optionally reset particle positions on resize to prevent flicker if they were off-screen
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       cancelAnimationFrame(animationFrameId);
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [isDark]);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="absolute inset-0 pointer-events-none opacity-30"
// //     />
// //   );
// // };

// // const FloatingParticles = ({ isDark }) => {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
    
// //     const ctx = canvas.getContext('2d');
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const particles = [];
// //     const particleCount = 50;

// //     for (let i = 0; i < particleCount; i++) {
// //       particles.push({
// //         x: Math.random() * canvas.width,
// //         y: Math.random() * canvas.height,
// //         radius: Math.random() * 3 + 1,
// //         vx: (Math.random() - 0.5) * 0.5,
// //         vy: (Math.random() - 0.5) * 0.5,
// //         opacity: Math.random() * 0.5 + 0.2
// //       });
// //     }

// //     function animate() {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// //       particles.forEach(particle => {
// //         particle.x += particle.vx;
// //         particle.y += particle.vy;

// //         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
// //         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
// //         ctx.fillStyle = isDark ? `rgba(252, 237, 218, ${particle.opacity})` : `rgba(238, 78, 52, ${particle.opacity})`;
// //         ctx.fill();
// //       });

// //       requestAnimationFrame(animate);
// //     }

// //     animate();

// //     const handleResize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, [isDark]);

// //   return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
// // };

// // export default FloatingParticles;

// const FloatingParticles = ({ isDark }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const particleCount = 50;
    
//     // Particle colors based on theme
//     const darkColor = "#93C5FD"; // Light Blue-300 (Subtle)
//     const lightColor = "#6366F1"; // Indigo-500 (Subtle)

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 3 + 1,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         opacity: Math.random() * 0.4 + 0.1 // Lower opacity for subtlety
//       });
//     }

//     let animationFrameId;

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         // Bouncing off edges (more visually interesting than wrapping)
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         // Using a dynamic color based on isDark prop
//         ctx.fillStyle = isDark 
//           ? `rgba(147, 197, 253, ${particle.opacity})` // Light Blue for dark mode
//           : `rgba(99, 102, 241, ${particle.opacity})`; // Indigo for light mode
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }
    
//     // Recalibrate and restart animation when theme changes
//     cancelAnimationFrame(animationFrameId);
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isDark]);

//   return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
// };

// export default FloatingParticles;

// import React, { useEffect, useRef } from "react";

// const FloatingParticles = ({ isDark }) => {
//   const canvasRef = useRef(null);

//   // --- New Clay & Beige Colors ---
//   const CLAY_BROWN = "#832B00";
//   const LIGHT_BEIGE = "#F7E5DA"; 

//   // Particle color choice:
//   // Dark Mode (isDark = true) -> Particles are LIGHT_BEIGE
//   // Light Mode (isDark = false) -> Particles are CLAY_BROWN

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
    
//     // Function to set canvas size
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     setCanvasSize();

//     const particles = [];
//     const particleCount = 50;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 3 + 1,
//         // Slower, subtle movement
//         vx: (Math.random() - 0.5) * 0.4, 
//         vy: (Math.random() - 0.5) * 0.4,
//         opacity: Math.random() * 0.4 + 0.1 // Low opacity for subtlety
//       });
//     }

//     let animationFrameId;

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       const particleBaseColor = isDark ? LIGHT_BEIGE : CLAY_BROWN;

//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         // Bouncing off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
//         // Use the selected color with the particle's individual opacity
//         // Note: CLAY_BROWN (#832B00) is converted to RGB for the rgba function
//         const r = parseInt(particleBaseColor.substring(1, 3), 16);
//         const g = parseInt(particleBaseColor.substring(3, 5), 16);
//         const b = parseInt(particleBaseColor.substring(5, 7), 16);
        
//         ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }
    
//     // Recalibrate and restart animation when theme changes (via isDark dependency)
//     cancelAnimationFrame(animationFrameId);
//     animate();

//     const handleResize = () => {
//       setCanvasSize();
//       // Note: Particles will continue their path after resize
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isDark]); // Re-run effect when isDark changes to change particle color

//   return (
//     <canvas 
//       ref={canvasRef} 
//       // Increased opacity for better visibility against the hero background, but still subtle
//       className="absolute inset-0 pointer-events-none opacity-50" 
//     />
//   );
// };

// export default FloatingParticles;

// import React, { useEffect, useRef } from "react";

// const FloatingParticles = ({ isDark }) => {
//   const canvasRef = useRef(null);

//   // --- New Tea Green & Moss Colors ---
//   const DARK_MOSS = "#333A2F";
//   const LIGHT_BEIGE = "#EBEDDF"; 

//   // Particle color choice:
//   // Dark Mode (isDark = true) -> Particles are LIGHT_BEIGE
//   // Light Mode (isDark = false) -> Particles are DARK_MOSS

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     
//     const ctx = canvas.getContext('2d');
//     
//     // Function to set canvas size
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     setCanvasSize();

//     const particles = [];
//     const particleCount = 50;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 3 + 1,
//         // Slower, subtle movement
//         vx: (Math.random() - 0.5) * 0.4, 
//         vy: (Math.random() - 0.5) * 0.4,
//         opacity: Math.random() * 0.4 + 0.1 // Low opacity for subtlety
//       });
//     }

//     let animationFrameId;

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       
//       const particleBaseColor = isDark ? LIGHT_BEIGE : DARK_MOSS;

//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         // Bouncing off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         
//         // Use the selected color with the particle's individual opacity
//         const r = parseInt(particleBaseColor.substring(1, 3), 16);
//         const g = parseInt(particleBaseColor.substring(3, 5), 16);
//         const b = parseInt(particleBaseColor.substring(5, 7), 16);
//         
//         ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
//         
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }
//     
//     // Recalibrate and restart animation when theme changes (via isDark dependency)
//     cancelAnimationFrame(animationFrameId);
//     animate();

//     const handleResize = () => {
//       setCanvasSize();
//       // Note: Particles will continue their path after resize
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isDark]); // Re-run effect when isDark changes to change particle color

//   return (
//     <canvas 
//       ref={canvasRef} 
//       // Increased opacity for better visibility against the hero background, but still subtle
//       className="absolute inset-0 pointer-events-none opacity-50" 
//     />
//   );
// };

// export default FloatingParticles;

import React, { useEffect, useRef } from "react";

const FloatingParticles = ({ isDark }) => {
  const canvasRef = useRef(null);

  // --- New Digital Colors ---
  const DEEP_MIDNIGHT_BLUE = "#19183B";
  const NEAR_WHITE = "#E7F2EF"; 

  // Particle color choice:
  // Dark Mode (isDark = true) -> Particles are NEAR_WHITE
  // Light Mode (isDark = false) -> Particles are DEEP_MIDNIGHT_BLUE

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Function to set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        // Slower, subtle movement
        vx: (Math.random() - 0.5) * 0.4, 
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1 // Low opacity for subtlety
      });
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particleBaseColor = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bouncing off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Use the selected color with the particle's individual opacity
        const r = parseInt(particleBaseColor.substring(1, 3), 16);
        const g = parseInt(particleBaseColor.substring(3, 5), 16);
        const b = parseInt(particleBaseColor.substring(5, 7), 16);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Recalibrate and restart animation when theme changes (via isDark dependency)
    cancelAnimationFrame(animationFrameId);
    animate();

    const handleResize = () => {
      setCanvasSize();
      // Note: Particles will continue their path after resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]); // Re-run effect when isDark changes to change particle color

  return (
    <canvas 
      ref={canvasRef} 
      // Increased opacity for better visibility against the hero background, but still subtle
      className="absolute inset-0 pointer-events-none opacity-50" 
    />
  );
};

export default FloatingParticles;