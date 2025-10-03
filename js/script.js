// PORTFOLIO CHIARA COLOSSEO - SCRIPT.JS

// ========== SMOOTH SCROLLING ==========
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll per link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    // Highlight navbar attivo
    highlightActiveNavLink();
    window.addEventListener('scroll', highlightActiveNavLink);
});

// ========== NAVBAR ACTIVE LINK ==========
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// ========== MODAL FUNCTIONS ==========
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Recupera i dati del progetto
    const projectData = getProjectData(projectId);
    
    if (!projectData) {
        console.error('Progetto non trovato:', projectId);
        return;
    }
    
    // Costruisci contenuto modal
    let modalContent = `
        <h3>${projectData.title}</h3>
        <div class="project-meta" style="margin-bottom: 1.5rem;">
            ${projectData.year ? `<span class="project-year">📅 ${projectData.year}</span>` : ''}
            ${projectData.duration ? `<span class="project-duration">⏱️ ${projectData.duration}</span>` : ''}
        </div>
        ${projectData.role ? `<p><strong>Ruolo:</strong> ${projectData.role}</p>` : ''}
        <p>${projectData.description}</p>
    `;
    
    // Aggiungi video se presente
    if (projectData.videoUrl) {
        if (projectData.videoUrl.includes('youtube.com') || projectData.videoUrl.includes('youtu.be')) {
            // Estrai ID video YouTube
            const videoId = extractYouTubeID(projectData.videoUrl);
            if (videoId) {
                modalContent += `
                    <div class="modal-video">
                        <iframe src="https://www.youtube.com/embed/${videoId}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                `;
            }
        } else {
            modalContent += `
                <div class="modal-video">
                    <p style="color: #999;">Video non disponibile</p>
                </div>
            `;
        }
    }
    
    // Aggiungi link aggiuntivi se presenti
    if (projectData.links && projectData.links.length > 0) {
        modalContent += `<div style="margin-top: 1.5rem;">`;
        projectData.links.forEach(link => {
            modalContent += `<p><strong>${link.label}:</strong> <a href="${link.url}" target="_blank" style="color: var(--accent-cinema);">${link.text}</a></p>`;
        });
        modalContent += `</div>`;
    }
    
    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Previeni scroll body quando modal aperto
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Chiudi modal con ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ========== UTILITY FUNCTIONS ==========

// Estrai ID video da URL YouTube
function extractYouTubeID(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}

// Database progetti (DA PERSONALIZZARE)
function getProjectData(projectId) {
    const projects = {
        // ESEMPIO - Sostituisci con i tuoi progetti reali
        'goodslift': {
            title: 'The Goodslift',
            year: '2020',
            duration: '5\'',
            role: 'Segretaria di edizione, assistente al montaggio video-audio',
            description: 'Realizzato per il corso di "Produzione Cinematografica". La routine di un uomo viene spezzata da un viaggio nel passato.',
            videoUrl: '', // Inserisci URL YouTube se disponibile
            links: []
        },
        'nodo-gola': {
            title: 'Nodo alla Gola',
            year: '2023',
            duration: '5\'55"',
            role: 'Gaffer, fonico presa diretta e microfonista, montaggio audio',
            description: 'Realizzato per il corso di "Fotografia e Cinema Digitale". Remake di una scena del celebre film, realizzato cambiando la fotografia per un look differente.',
            videoUrl: '',
            links: []
        },
        'life-party': {
            title: 'Life of The Party',
            year: '2023',
            duration: '7\'33"',
            role: 'Regia e sceneggiatura, gaffer, fonico presa diretta e microfonista, montaggio audio, VFX',
            description: 'Realizzato per il corso di "Cinema Immersivo". Per fruizione VR. Una festa ed uno strambo gruppo di amici vi condurranno verso una triste verità.',
            videoUrl: '',
            links: []
        },
        // Aggiungi altri progetti qui seguendo lo stesso schema
    };
    
    return projects[projectId] || null;
}

// ========== LAZY LOADING IMAGES (opzionale) ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
