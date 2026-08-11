// ===== MODERN INTERACTIVE WEBSITE JAVASCRIPT =====

// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });
});

// ===== TYPING ANIMATION =====
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function() {
    const typeElement = document.getElementById('typing-roles');
    if (typeElement) {
        const words = [
            'ML Engineer',
            'Data Scientist', 
            'AI Researcher',
            'Sports Analytics Expert',
            'Problem Solver',
            'Digital Explorer'
        ];
        new TypeWriter(typeElement, words, 2000);
    }
});

// ===== NEURAL NETWORK BACKGROUND ANIMATION =====
class NeuralNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mousePosition = { x: 0, y: 0 };
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        canvas.addEventListener('mousemove', (e) => this.updateMouse(e));
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    createParticles() {
        const particleCount = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 10000));
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    updateMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mousePosition.x = e.clientX - rect.left;
        this.mousePosition.y = e.clientY - rect.top;
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mousePosition.x - particle.x;
            const dy = this.mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += dx * force * 0.0001;
                particle.vy += dy * force * 0.0001;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        this.particles.forEach((particle, i) => {
            this.particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (150 - distance) / 150 * 0.2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawConnections();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize neural network background
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('neural-network');
    if (canvas) {
        new NeuralNetwork(canvas);
    }
});

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== SCROLL INDICATOR =====
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > windowHeight * 0.3) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.masthead');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll('.skill-category, .travel-item, .stat-card');
    animateElements.forEach(el => observer.observe(el));
});

// ===== PARALLAX EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
});

// ===== SKILL TAGS HOVER EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== TRAVEL GALLERY INTERACTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const travelItems = document.querySelectorAll('.travel-item');
    
    travelItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.travel-overlay');
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// ===== LOADING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen if present
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// ===== EASTER EGG - KONAMI CODE =====
document.addEventListener('DOMContentLoaded', function() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];
    
    document.addEventListener('keydown', function(e) {
        userInput.push(e.keyCode);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.join(',') === konamiCode.join(',')) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 10000);
        }
    });
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== SCROLL PROGRESS BAR + BACK TO TOP =====
document.addEventListener('DOMContentLoaded', function() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    const toTop = document.createElement('button');
    toTop.className = 'back-to-top';
    toTop.setAttribute('aria-label', 'Back to top');
    toTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(toTop);
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const onScroll = () => {
        const scrollTop = window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = height > 0 ? (scrollTop / height) * 100 + '%' : '0%';
        toTop.classList.toggle('show', scrollTop > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

// ===== ANIMATED NUMBER COUNTERS =====
// Elements with [data-count] animate from 0 to target when scrolled into view.
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animateCount = (el) => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimals = (el.dataset.decimals !== undefined)
            ? parseInt(el.dataset.decimals, 10)
            : (target % 1 !== 0 ? 1 : 0);
        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(el => observer.observe(el));
});

// ===== INTERACTIVE 3D CAREER GLOBE (D3 orthographic sphere) =====
// Reads window.CAREER_LOCATIONS (injected by the portfolio page from _data/locations.yml).
// Renders a spherical, draggable SVG globe framed on the US. Renders everywhere
// (no WebGL required), so every visitor sees it.
document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('work-map');
    if (!el || typeof d3 === 'undefined' || typeof topojson === 'undefined' || !Array.isArray(window.CAREER_LOCATIONS)) return;

    const locations = window.CAREER_LOCATIONS;
    const colors = { edu: '#8b5cf6', work: '#3b82f6', research: '#06d6a0' };
    const colorFor = (d) => colors[d.category] || '#3b82f6';

    // Center of the continental US — the globe stays framed here.
    const US_CENTER = [-98.35, 39.5];

    let width = el.clientWidth;
    let height = el.clientHeight;

    // Curved 3D map zoomed to frame North America — corner points that keep the
    // continental US front-and-center while still showing Vancouver and Florida.
    // (MultiPoint avoids polygon-winding ambiguity that can zoom to the whole hemisphere.)
    const FOCUS = { type: 'MultiPoint', coordinates: [[-132, 16], [-60, 16], [-60, 55], [-132, 55]] };
    const ZOOM_FACTOR = 3.4;          // how far a marker click zooms into its city
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    // Major US cities for geographic reference (labels appear when zoomed in).
    const CITIES = [
        { name: 'New York', lat: 40.7128, lng: -74.0060 },
        { name: 'Washington', lat: 38.9072, lng: -77.0369 },
        { name: 'Boston', lat: 42.3601, lng: -71.0589 },
        { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
        { name: 'Atlanta', lat: 33.7490, lng: -84.3880 },
        { name: 'Miami', lat: 25.7617, lng: -80.1918 },
        { name: 'Houston', lat: 29.7604, lng: -95.3698 },
        { name: 'Dallas', lat: 32.7767, lng: -96.7970 },
        { name: 'Denver', lat: 39.7392, lng: -104.9903 },
        { name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
        { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
        { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
        { name: 'Seattle', lat: 47.6062, lng: -122.3321 },
        { name: 'Minneapolis', lat: 44.9778, lng: -93.2650 }
    ];

    const projection = d3.geoOrthographic().clipAngle(90);

    // Zoom + center the curved map on the US (a little padding keeps the Earth's
    // curvature visible while the US still fills the frame).
    function frameUS() {
        projection.rotate([-US_CENTER[0], -US_CENTER[1]]);
        projection.fitExtent([[58, 58], [width - 58, height - 58]], FOCUS);
    }
    frameUS();

    let baseScale = projection.scale();      // overview scale
    let focus = US_CENTER.slice();           // current center [lng, lat]
    let zoomed = false;

    const path = d3.geoPath(projection);

    const svg = d3.select(el).append('svg')
        .attr('class', 'globe-svg')
        .attr('width', width)
        .attr('height', height);

    // Ocean + atmosphere gradients
    const defs = svg.append('defs');
    const ocean = defs.append('radialGradient').attr('id', 'oceanGrad').attr('cx', '42%').attr('cy', '38%').attr('r', '68%');
    ocean.append('stop').attr('offset', '0%').attr('stop-color', '#1b2a4a');
    ocean.append('stop').attr('offset', '60%').attr('stop-color', '#0f1830');
    ocean.append('stop').attr('offset', '100%').attr('stop-color', '#070c18');

    const atmos = defs.append('radialGradient').attr('id', 'atmosGrad').attr('cx', '50%').attr('cy', '50%').attr('r', '50%');
    atmos.append('stop').attr('offset', '82%').attr('stop-color', 'rgba(59,130,246,0)');
    atmos.append('stop').attr('offset', '96%').attr('stop-color', 'rgba(59,130,246,0.28)');
    atmos.append('stop').attr('offset', '100%').attr('stop-color', 'rgba(59,130,246,0)');

    // Layers (back to front)
    const halo = svg.append('circle').attr('class', 'globe-atmos').attr('fill', 'url(#atmosGrad)');
    const sphere = svg.append('path').datum({ type: 'Sphere' }).attr('class', 'globe-sphere').attr('fill', 'url(#oceanGrad)');
    const grat = svg.append('path').datum(d3.geoGraticule10()).attr('class', 'globe-grat');
    const landPath = svg.append('path').attr('class', 'globe-land');
    const nationPath = svg.append('path').attr('class', 'globe-nation');
    const statesPath = svg.append('path').attr('class', 'globe-states');
    const cityG = svg.append('g').attr('class', 'globe-cities');
    const markerG = svg.append('g').attr('class', 'globe-markers');

    // Overlays: details panel + drag hint
    const wrap = el.closest('.map-wrap') || el;
    const panel = document.createElement('div');
    panel.className = 'globe-panel';
    wrap.appendChild(panel);

    const hint = document.createElement('div');
    hint.className = 'globe-hint';
    hint.innerHTML = '<i class="fas fa-hand-pointer"></i> Drag to look around &middot; click a marker to dive in';
    wrap.appendChild(hint);

    let tip;

    function updateHalo() {
        halo.attr('cx', projection.translate()[0])
            .attr('cy', projection.translate()[1])
            .attr('r', projection.scale() * 1.02);
    }

    function frontVisible(d) {
        const center = [-projection.rotate()[0], -projection.rotate()[1]];
        return d3.geoDistance([d.lng, d.lat], center) < Math.PI / 2;
    }

    function renderCities() {
        const groups = cityG.selectAll('g.city').data(CITIES, d => d.name);
        const enter = groups.enter().append('g').attr('class', 'city');
        enter.append('circle').attr('class', 'city-dot').attr('r', 1.7);
        enter.append('text').attr('class', 'city-label').attr('x', 5).attr('y', 3).text(d => d.name);

        cityG.selectAll('g.city').each(function(d) {
            const c = projection([d.lng, d.lat]);
            d3.select(this)
                .style('display', c && frontVisible(d) ? null : 'none')
                .attr('transform', c ? `translate(${c[0]},${c[1]})` : null);
        });
    }

    function renderMarkers() {
        const groups = markerG.selectAll('g.mk').data(locations, d => d.title);
        const enter = groups.enter().append('g')
            .attr('class', d => `mk cat-${d.category}`)
            .style('cursor', 'pointer')
            .on('mouseenter', function(event, d) { showTip(event, d); })
            .on('mousemove', function(event) { moveTip(event); })
            .on('mouseleave', hideTip)
            .on('click', function(event, d) { event.stopPropagation(); focusCity(d); showPanel(d); });
        enter.append('circle').attr('class', 'mk-pulse').attr('r', 6);
        enter.append('circle').attr('class', 'mk-dot').attr('r', 5);

        markerG.selectAll('g.mk').each(function(d) {
            const coords = projection([d.lng, d.lat]);
            d3.select(this)
                .style('display', coords && frontVisible(d) ? null : 'none')
                .attr('transform', coords ? `translate(${coords[0]},${coords[1]})` : null);
        });
    }

    function redraw() {
        sphere.attr('d', path);
        grat.attr('d', path);
        landPath.attr('d', path);
        nationPath.attr('d', path);
        statesPath.attr('d', path);
        updateHalo();
        renderCities();
        renderMarkers();
    }

    // Coalesce drag repaints to one per animation frame (avoids smearing under load).
    let rafPending = false;
    function scheduleRedraw() {
        if (rafPending) return;
        rafPending = true;
        requestAnimationFrame(() => { rafPending = false; redraw(); });
    }

    function showTip(event, d) {
        hideTip();
        tip = document.createElement('div');
        tip.className = 'globe-tip';
        tip.innerHTML = `<span class="gt-cat">${d.category}</span><strong>${d.title}</strong><span>${d.place} &middot; ${d.when}</span>`;
        wrap.appendChild(tip);
        moveTip(event);
    }
    function moveTip(event) {
        if (!tip) return;
        const rect = wrap.getBoundingClientRect();
        tip.style.left = (event.clientX - rect.left + 14) + 'px';
        tip.style.top = (event.clientY - rect.top + 14) + 'px';
    }
    function hideTip() { if (tip) { tip.remove(); tip = null; } }

    function showPanel(d) {
        panel.innerHTML = `
            <button class="gp-close" aria-label="Close">&times;</button>
            <span class="gp-cat">${d.category}</span>
            <h4>${d.title}</h4>
            <div class="gp-place"><i class="fas fa-location-dot"></i> ${d.place} &middot; ${d.when}</div>
            <p>${d.description}</p>`;
        panel.classList.add('show');
        panel.querySelector('.gp-close').addEventListener('click', resetView);
    }

    // Animate rotation + scale together (used for zoom-in and zoom-out).
    function animateView(targetRotate, targetScale) {
        const r0 = projection.rotate();
        const s0 = projection.scale();
        const ri = d3.interpolate(r0, targetRotate);
        const si = d3.interpolate(s0, targetScale);
        d3.transition().duration(850).tween('view', () => (t) => {
            projection.rotate(ri(t));
            projection.scale(si(t));
            redraw();
        });
    }

    // Detailed drill-in map (Leaflet tiles) revealed after the globe dive.
    let cityMap = null;
    let cityMarker = null;
    let cityTimer = null;

    // Back-to-globe control
    const backBtn = document.createElement('button');
    backBtn.className = 'map-back';
    backBtn.innerHTML = '<i class="fas fa-earth-americas"></i> Back to globe';
    backBtn.addEventListener('click', resetView);
    wrap.appendChild(backBtn);

    function ensureCityMap() {
        if (cityMap || typeof L === 'undefined') return cityMap;
        const cm = document.getElementById('city-map');
        if (!cm) return null;
        cityMap = L.map(cm, { zoomControl: false, attributionControl: true, scrollWheelZoom: true });
        L.control.zoom({ position: 'bottomleft' }).addTo(cityMap);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            subdomains: 'abcd',
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(cityMap);
        return cityMap;
    }

    function openCityMap(d) {
        const map = ensureCityMap();
        if (!map) return;
        wrap.classList.add('city-active');
        if (cityMarker) cityMarker.remove();
        cityMarker = L.circleMarker([d.lat, d.lng], {
            radius: 9, color: '#fff', weight: 2,
            fillColor: colorFor(d), fillOpacity: 1
        }).addTo(map).bindPopup(`<b>${d.title}</b><br>${d.place} &middot; ${d.when}`);
        // Let the container become visible, then size + frame the city.
        setTimeout(() => {
            map.invalidateSize();
            map.setView([d.lat, d.lng], 11, { animate: false });
            cityMarker.openPopup();
        }, 80);
    }

    // Zoom into a clicked location's city, then dive into the detailed map.
    function focusCity(d) {
        focus = [d.lng, d.lat];
        zoomed = true;
        svg.classed('zoomed', true);
        animateView([-d.lng, -d.lat], baseScale * ZOOM_FACTOR);
        clearTimeout(cityTimer);
        cityTimer = setTimeout(() => openCityMap(d), 700);
    }

    // Return to the US globe overview.
    function resetView() {
        clearTimeout(cityTimer);
        wrap.classList.remove('city-active');
        focus = US_CENTER.slice();
        zoomed = false;
        svg.classed('zoomed', false);
        panel.classList.remove('show');
        animateView([-US_CENTER[0], -US_CENTER[1]], baseScale);
    }

    // Drag to look around, clamped around the current focus (US overview, or the
    // zoomed-in city) so the view never spins off to another continent.
    const drag = d3.drag()
        .on('start', () => hideTip())
        .on('drag', (event) => {
            const k = zoomed ? 0.16 : 0.35;
            const lonR = zoomed ? 7 : 16;
            const latR = zoomed ? 5 : 11;
            const cx = -focus[0];
            const cy = -focus[1];
            const r = projection.rotate();
            projection.rotate([
                clamp(r[0] + event.dx * k, cx - lonR, cx + lonR),
                clamp(r[1] - event.dy * k, cy - latR, cy + latR)
            ]);
            scheduleRedraw();
        });
    svg.call(drag);
    svg.on('click', () => { if (zoomed || panel.classList.contains('show')) resetView(); });
    // Kill the browser's native drag "ghost image" anywhere inside the globe.
    document.addEventListener('dragstart', (e) => {
        if (e.target && e.target.closest && e.target.closest('.map-wrap')) e.preventDefault();
    }, true);
    svg.node().setAttribute('draggable', 'false');

    // Light world land (110m) for context + crisp 10m US (nation outline & state
    // borders). Keeping the heavy geometry limited to the US keeps dragging smooth.
    Promise.all([
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
        d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
    ]).then(([world, us]) => {
        landPath.datum(topojson.feature(world, world.objects.countries));
        nationPath.datum(topojson.feature(us, us.objects.nation));
        statesPath.datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b));
        redraw();
    }).catch(() => { redraw(); });

    // Initial paint before data loads
    redraw();

    const resize = debounce(() => {
        width = el.clientWidth;
        height = el.clientHeight;
        svg.attr('width', width).attr('height', height);
        frameUS();
        baseScale = projection.scale();
        if (zoomed) {
            projection.rotate([-focus[0], -focus[1]]).scale(baseScale * ZOOM_FACTOR);
        }
        redraw();
    }, 150);
    window.addEventListener('resize', resize);
});
