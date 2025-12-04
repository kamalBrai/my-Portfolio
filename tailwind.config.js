tailwind.config = {
    // REQUIRED FOR DARK MODE TOGGLE
    darkMode: 'class', 

    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            }, 
            fontFamily:{
                Outfit:["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            }, 
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                // Custom colors for light/dark theme transition
                lightHover: '#fcf4ff', // Light theme hover (soft white/pink)
                darkHover: '#2a004a', // Dark theme hover (deep purple)
                darkTheme: '#11001F'  // Dark theme main background (almost black)
            },
            boxShadow:{
                // Defined sharp shadows
                'black':'4px 4px 0 #000', 
                'white':'4px 4px 0 #fff', 
            }
        }
    }
}