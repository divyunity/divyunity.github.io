// Placeholder Image Generator
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate random placeholder images
    function generatePlaceholders() {
        // Check if profile shape exists
        const profileShape = document.querySelector('.profile-shape');
        if (profileShape) {
            // Generate random profile image
            const profileImage = `https://source.unsplash.com/random/350x350/?portrait,professional`;
            profileShape.style.backgroundImage = `url('${profileImage}')`;
        }
        
        // Check for project images
        const projectImages = document.querySelectorAll('.project-image img');
        if (projectImages.length > 0) {
            const projectTopics = [
                'artificial+intelligence',
                'technology',
                'programming',
                'data+science',
                'virtual+reality',
                'machine+learning'
            ];
            
            // Set random project images
            projectImages.forEach((img, index) => {
                const topic = projectTopics[index % projectTopics.length];
                const randomID = Math.floor(Math.random() * 1000);
                img.src = `https://source.unsplash.com/random/600x400/?${topic}&sig=${randomID}`;
            });
        }
        
        // Check for hero and contact backgrounds
        const projectsHero = document.querySelector('.projects-hero');
        if (projectsHero) {
            projectsHero.style.backgroundImage = `linear-gradient(135deg, rgba(74, 108, 247, 0.9), rgba(142, 45, 226, 0.9)), url('https://source.unsplash.com/random/1600x900/?technology')`;
        }
        
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.style.backgroundImage = `linear-gradient(135deg, rgba(74, 108, 247, 0.9), rgba(142, 45, 226, 0.9)), url('https://source.unsplash.com/random/1600x900/?workspace')`;
        }
    }
    
    // Run the placeholder generator
    generatePlaceholders();
}); 