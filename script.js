document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Login Modal
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Class Filtering
    const classCategories = document.querySelectorAll('.category-btn');
    const classesGrid = document.querySelector('.classes-grid');
    
    // Sample class data
    const classes = [
        {
            id: 1,
            title: 'Powerlifting',
            category: 'strength',
            time: '60 min',
            level: 'Advanced',
            description: 'Build raw strength with compound lifts and progressive overload techniques.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 2,
            title: 'Spin Cycling',
            category: 'cardio',
            time: '45 min',
            level: 'All Levels',
            description: 'High-energy indoor cycling class with motivating music and varied intensity.',
            image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 3,
            title: 'HIIT Burn',
            category: 'hiit',
            time: '30 min',
            level: 'Intermediate',
            description: 'Short bursts of intense exercise followed by brief recovery periods.',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 4,
            title: 'Vinyasa Yoga',
            category: 'mind-body',
            time: '60 min',
            level: 'All Levels',
            description: 'Flow through poses with breath for strength, flexibility, and relaxation.',
            image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 5,
            title: 'Boxing Fitness',
            category: 'hiit',
            time: '45 min',
            level: 'Intermediate',
            description: 'Learn boxing techniques while getting a full-body cardio workout.',
            image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 6,
            title: 'Body Sculpt',
            category: 'strength',
            time: '45 min',
            level: 'All Levels',
            description: 'Tone and strengthen all major muscle groups using weights and body resistance.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
    ];
    
    // Display all classes initially
    displayClasses(classes);
    
    // Filter classes by category
    classCategories.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            classCategories.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            let filteredClasses = classes;
            
            if (category !== 'all') {
                filteredClasses = classes.filter(cls => cls.category === category);
            }
            
            displayClasses(filteredClasses);
        });
    });
    
    function displayClasses(classesToDisplay) {
        classesGrid.innerHTML = '';
        
        if (classesToDisplay.length === 0) {
            classesGrid.innerHTML = '<p class="no-classes">No classes found in this category.</p>';
            return;
        }
        
        classesToDisplay.forEach(cls => {
            const classCard = document.createElement('div');
            classCard.className = 'class-card';
            
            // Determine category color
            let categoryColor = '#06D6A0'; // default (mind-body)
            if (cls.category === 'strength') categoryColor = '#D7263D';
            if (cls.category === 'cardio') categoryColor = '#0A2463';
            if (cls.category === 'hiit') categoryColor = '#FF6B35';
            
            classCard.innerHTML = `
                <div class="class-image">
                    <img src="${cls.image}" alt="${cls.title}">
                </div>
                <div class="class-content">
                    <span class="class-category" style="background-color: ${categoryColor}">${cls.category}</span>
                    <h3 class="class-title">${cls.title}</h3>
                    <div class="class-meta">
                        <span><i class="far fa-clock"></i> ${cls.time}</span>
                        <span><i class="fas fa-fire"></i> ${cls.level}</span>
                    </div>
                    <p class="class-desc">${cls.description}</p>
                    <a href="#" class="class-btn">Book Now</a>
                </div>
            `;
            
            classesGrid.appendChild(classCard);
        });
    }
    
    // Trainers Data
    const trainers = [
        {
            id: 1,
            name: 'Alex Johnson',
            specialty: 'Strength Training',
            bio: 'Certified personal trainer with 10+ years of experience in powerlifting and bodybuilding.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 2,
            name: 'Sarah Miller',
            specialty: 'Yoga & Pilates',
            bio: 'RYT-500 certified yoga instructor with a focus on alignment and mindfulness.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            name: 'David Chen',
            specialty: 'HIIT & Functional',
            bio: 'Specializes in high-intensity interval training and functional movement patterns.',
            image: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
            id: 4,
            name: 'Maria Garcia',
            specialty: 'Nutrition & Wellness',
            bio: 'Registered dietitian and certified personal trainer with a holistic approach to health.',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];
    
    // Display Trainers
    const trainersGrid = document.querySelector('.trainers-grid');
    const trainerSelect = document.getElementById('trainer-select');
    
    trainers.forEach(trainer => {
        // Add to grid
        const trainerCard = document.createElement('div');
        trainerCard.className = 'trainer-card';
        
        trainerCard.innerHTML = `
            <div class="trainer-image">
                <img src="${trainer.image}" alt="${trainer.name}">
            </div>
            <div class="trainer-content">
                <h3 class="trainer-name">${trainer.name}</h3>
                <p class="trainer-specialty">${trainer.specialty}</p>
                <p class="trainer-bio">${trainer.bio}</p>
                <div class="trainer-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
        
        trainersGrid.appendChild(trainerCard);
        
        // Add to select dropdown
        const option = document.createElement('option');
        option.value = trainer.id;
        option.textContent = `${trainer.name} - ${trainer.specialty}`;
        trainerSelect.appendChild(option);
    });
    
    // Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trainerId = document.getElementById('trainer-select').value;
        const date = document.getElementById('session-date').value;
        const time = document.getElementById('session-time').value;
        
        if (!trainerId || !date || !time) {
            alert('Please fill in all fields');
            return;
        }
        
        const selectedTrainer = trainers.find(t => t.id == trainerId);
        
        // In a real app, you would send this data to a server
        alert(`Booking confirmed with ${selectedTrainer.name} on ${date} at ${time}`);
        
        // Reset form
        this.reset();
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
        
        testimonialSlides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real app, you would send this data to a server
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for login
    const loginForm = document.getElementById('memberLoginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }
        
        // In a real app, you would validate with a server
        alert('Login successful! Redirecting to your dashboard...');
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.reset();
    });
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        // In a real app, you would send this to a server
        alert(`Thank you for subscribing with ${email}!`);
        this.reset();
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.membership-card, .class-card, .trainer-card, .feature-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    document.querySelectorAll('.membership-card, .class-card, .trainer-card, .feature-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});