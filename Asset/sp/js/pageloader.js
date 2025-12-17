// colony-core-loader.js
// Page Loader for Colony Core Website

(function() {
    'use strict';
    
    // Prevent multiple initializations
    if (window.colonyCoreLoaderInitialized) return;
    window.colonyCoreLoaderInitialized = true;
    
    // Inject Loader CSS
    const loaderStyles = `
        /* Page Loader Styles */
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0A0A0A;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .page-loader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
        
        .loader-container {
            text-align: center;
            position: relative;
        }
        
        .loader-logo {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #FFD700 0%, #FFA000 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 40px;
            position: relative;
            animation: zoomInOut 2s ease-in-out infinite;
            box-shadow: 
                0 0 0 0 rgba(255, 215, 0, 0.7),
                0 0 0 0 rgba(255, 215, 0, 0.5),
                0 0 0 0 rgba(255, 215, 0, 0.3);
        }
        
        .loader-logo::after {
            content: '';
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 30px;
            background: transparent;
            border: 2px solid rgba(255, 215, 0, 0.1);
            top: -10px;
            left: -10px;
            animation: pulseBorder 2s ease-in-out infinite;
        }
        
        .loader-logo i {
            color: #0A0A0A;
            font-size: 2.5rem;
        }
        
        .loader-text {
            color: #FFD700;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
            position: relative;
        }
        
        .loader-subtext {
            color: #AAAAAA;
            font-size: 0.9rem;
            letter-spacing: 1px;
            opacity: 0.8;
        }
        
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            margin: 30px auto;
            overflow: hidden;
            position: relative;
        }
        
        .loader-progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background: linear-gradient(135deg, #FFD700 0%, #FFA000 100%);
            border-radius: 2px;
            animation: progressLoad 1.5s ease-in-out forwards;
        }
        
        .loader-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        
        .loader-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #FFD700;
            opacity: 0.3;
            animation: dotPulse 1.5s ease-in-out infinite;
        }
        
        .loader-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .loader-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        /* Loader Animations */
        @keyframes zoomInOut {
            0%, 100% {
                transform: scale(1);
                box-shadow: 
                    0 0 0 0 rgba(255, 215, 0, 0),
                    0 0 0 0 rgba(255, 215, 0, 0),
                    0 0 0 0 rgba(255, 215, 0, 0);
            }
            25% {
                transform: scale(1.1);
                box-shadow: 
                    0 0 20px 10px rgba(255, 215, 0, 0.2),
                    0 0 40px 20px rgba(255, 215, 0, 0.1),
                    0 0 60px 30px rgba(255, 215, 0, 0.05);
            }
            50% {
                transform: scale(1);
                box-shadow: 
                    0 0 0 0 rgba(255, 215, 0, 0),
                    0 0 0 0 rgba(255, 215, 0, 0),
                    0 0 0 0 rgba(255, 215, 0, 0);
            }
            75% {
                transform: scale(0.9);
                box-shadow: 
                    0 0 15px 5px rgba(255, 215, 0, 0.15),
                    0 0 30px 10px rgba(255, 215, 0, 0.08),
                    0 0 45px 15px rgba(255, 215, 0, 0.03);
            }
        }
        
        @keyframes pulseBorder {
            0%, 100% {
                transform: scale(1);
                opacity: 0.3;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.6;
            }
        }
        
        @keyframes progressLoad {
            0% {
                width: 0%;
            }
            20% {
                width: 25%;
            }
            40% {
                width: 50%;
            }
            60% {
                width: 75%;
            }
            80% {
                width: 90%;
            }
            100% {
                width: 100%;
            }
        }
        
        @keyframes dotPulse {
            0%, 100% {
                opacity: 0.3;
                transform: translateY(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-5px);
            }
        }
    `;
    
    // Create and inject style element
    const styleElement = document.createElement('style');
    styleElement.textContent = loaderStyles;
    document.head.appendChild(styleElement);
    
    // Create Loader HTML
    const loaderHTML = `
        <div class="page-loader" id="colonyCorePageLoader">
            <div class="loader-container">
                <div class="loader-logo">
                    <i class="fas fa-cube"></i>
                </div>
                <div class="loader-text">COLONY CORE</div>
                <div class="loader-subtext">Digital Solutions Loading</div>
                <div class="loader-progress">
                    <div class="loader-progress-bar"></div>
                </div>
                <div class="loader-dots">
                    <div class="loader-dot"></div>
                    <div class="loader-dot"></div>
                    <div class="loader-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    // Wait for DOM to be ready
    function initLoader() {
        // Inject loader HTML at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
        
        // Get loader elements
        const pageLoader = document.getElementById('colonyCorePageLoader');
        const progressBar = document.querySelector('.loader-progress-bar');
        
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';
        
        // Check if Font Awesome is loaded
        function checkFontAwesomeLoaded(callback) {
            const testElement = document.createElement('i');
            testElement.className = 'fas fa-cube';
            testElement.style.position = 'absolute';
            testElement.style.left = '-9999px';
            document.body.appendChild(testElement);
            
            const checkInterval = setInterval(() => {
                const computedStyle = window.getComputedStyle(testElement, ':before');
                const content = computedStyle.content;
                if (content && content !== 'none') {
                    clearInterval(checkInterval);
                    document.body.removeChild(testElement);
                    callback();
                }
            }, 100);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkInterval);
                document.body.removeChild(testElement);
                callback();
            }, 5000);
        }
        
        // Simulate loading progress
        function simulateLoading() {
            let progress = 0;
            const minIncrement = 5;
            const maxIncrement = 15;
            const maxTime = 3000; // 3 seconds max
            
            const progressInterval = setInterval(() => {
                const increment = Math.random() * (maxIncrement - minIncrement) + minIncrement;
                progress += increment;
                
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(progressInterval);
                    progressBar.style.width = '100%';
                    
                    // Complete loading
                    setTimeout(completeLoading, 300);
                } else {
                    progressBar.style.width = progress + '%';
                }
            }, 100);
            
            // Force completion if it takes too long
            setTimeout(() => {
                clearInterval(progressInterval);
                progressBar.style.width = '100%';
                setTimeout(completeLoading, 300);
            }, maxTime);
        }
        
        // Complete loading and remove loader
        function completeLoading() {
            pageLoader.classList.add('fade-out');
            
            // Remove loader after fade out
            setTimeout(() => {
                pageLoader.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Dispatch custom event for other scripts to listen to
                document.dispatchEvent(new CustomEvent('colonyCoreLoaderComplete'));
            }, 500);
        }
        
        // Check if page is already loaded
        if (document.readyState === 'complete') {
            // Wait a bit to show the loader
            setTimeout(() => {
                simulateLoading();
            }, 100);
        } else {
            // Wait for window load
            window.addEventListener('load', () => {
                setTimeout(() => {
                    simulateLoading();
                }, 100);
            });
            
            // Fallback in case load event never fires
            setTimeout(() => {
                if (pageLoader.style.display !== 'none') {
                    simulateLoading();
                }
            }, 5000);
        }
        
        // Optional: Add method to manually hide loader
        window.hideColonyCoreLoader = function() {
            completeLoading();
        };
        
        // Optional: Add method to show loader again (for SPA navigation)
        window.showColonyCoreLoader = function(duration = 2000) {
            pageLoader.classList.remove('fade-out');
            pageLoader.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Reset progress
            progressBar.style.width = '0%';
            progressBar.style.animation = 'none';
            
            // Force reflow
            void progressBar.offsetWidth;
            
            // Restart animation
            progressBar.style.animation = 'progressLoad 1.5s ease-in-out forwards';
            
            // Auto-hide after specified duration
            setTimeout(() => {
                progressBar.style.width = '100%';
                setTimeout(completeLoading, 300);
            }, duration);
        };
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoader);
    } else {
        initLoader();
    }
    
    // Export loader API
    window.ColonyCoreLoader = {
        show: function(duration) {
            if (typeof window.showColonyCoreLoader === 'function') {
                window.showColonyCoreLoader(duration);
            }
        },
        hide: function() {
            if (typeof window.hideColonyCoreLoader === 'function') {
                window.hideColonyCoreLoader();
            }
        },
        isVisible: function() {
            const loader = document.getElementById('colonyCorePageLoader');
            return loader && loader.style.display !== 'none' && !loader.classList.contains('fade-out');
        }
    };
})();