document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.activity-icon[data-tab=\"theme-toggle\"]');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('vscode-dark')) {
            body.classList.remove('vscode-dark');
            body.classList.add('vscode-light');
        } else {
            body.classList.remove('vscode-light');
            body.classList.add('vscode-dark');
        }
    });

    // Activity bar navigation
    const activityIcons = document.querySelectorAll('.activity-icon');
    const panels = document.querySelectorAll('.panel');
    
    activityIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // Remove active class from all icons and panels
            activityIcons.forEach(i => i.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked icon
            this.classList.add('active');
            
            // Show corresponding panel if it exists
            const correspondingPanel = document.querySelector(`.panel[data-panel=\"${tab}\"]`);
            if (correspondingPanel) {
                correspondingPanel.classList.add('active');
            }
        });
    });

    // File navigation in sidebar
    const files = document.querySelectorAll('.file');
    const contents = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');
    
    files.forEach(file => {
        file.addEventListener('click', function() {
            const content = this.getAttribute('data-content');
            
            // Remove active class from all files
            files.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked file
            this.classList.add('active');
            
            // Hide all content sections
            contents.forEach(c => c.classList.remove('active'));
            
            // Show corresponding content
            document.getElementById(`${content}-content`).classList.add('active');
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelector(`.tab[data-content=\"${content}\"]`).classList.add('active');
        });
    });

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const content = this.getAttribute('data-content');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content sections
            contents.forEach(c => c.classList.remove('active'));
            
            // Show corresponding content
            document.getElementById(`${content}-content`).classList.add('active');
            
            // Also update file selection
            files.forEach(f => f.classList.remove('active'));
            document.querySelector(`.file[data-content=\"${content}\"]`).classList.add('active');
        });
    });

    // Simulate line numbers and cursor position
    const editorContent = document.querySelector('.editor-content');
    
    editorContent.addEventListener('click', function() {
        // In a real editor, this would update the cursor position
        // For this demo, we'll just update the status bar
        const statusItem = document.querySelector('.status-item:last-child');
        statusItem.innerHTML = '<i class=\"fas fa-ruler-horizontal\"></i><span>Ln 10, Col 5</span>';
    });

    // Form submission for contact page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            alert(`Mensagem enviada!\\nNome: ${name}\\nEmail: ${email}\\nMensagem: ${message}`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Set initial status bar position
    const statusPosition = document.querySelector('.status-item:last-child');
    if (statusPosition) {
        statusPosition.innerHTML = '<i class=\"fas fa-ruler-horizontal\"></i><span>Ln 1, Col 1</span>';
    }

    // Simulate typing effect for the first view
    simulateTyping();
});

// Function to simulate typing in the editor
function simulateTyping() {
    // Add functionality for a more realistic code editor feel
    const editorContent = document.querySelector('.editor-content');
    
    // Add line numbers functionality (simplified)
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.position = 'relative';
        
        // Add line number as pseudo element (would need CSS adjustment in real implementation)
        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-number';
        lineNumber.textContent = (index + 1).toString().padStart(3, ' ') + ' ';
        lineNumber.style.position = 'absolute';
        lineNumber.style.left = '-30px';
        lineNumber.style.opacity = '0.4';
        lineNumber.style.userSelect = 'none';
        lineNumber.style.width = '30px';
        lineNumber.style.textAlign = 'right';
        
        line.insertBefore(lineNumber, line.firstChild);
    });
}

// Additional functionality for the editor
document.addEventListener('keydown', function(e) {
    // Simulate editor shortcuts
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        alert('Arquivo salvo!');
    }
});

// Add functionality to close tabs
document.querySelectorAll('.tab-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const tab = this.closest('.tab');
        if (tab) {
            const contentId = tab.getAttribute('data-content');
            const contentPanel = document.getElementById(`${contentId}-content`);
            const fileItem = document.querySelector(`.file[data-content=\"${contentId}\"]`);
            
            // Don't allow closing if it's the only tab
            if (document.querySelectorAll('.tab:not(.add-tab)').length > 1) {
                tab.remove();
                if (contentPanel) contentPanel.remove();
                if (fileItem) fileItem.remove();
                
                // Show the first available tab/file if the active one was closed
                const remainingTabs = document.querySelectorAll('.tab:not(.add-tab)');
                if (remainingTabs.length > 0) {
                    const firstTab = remainingTabs[0];
                    firstTab.classList.add('active');
                    
                    const contentId = firstTab.getAttribute('data-content');
                    if (contentId) {
                        document.getElementById(`${contentId}-content`).classList.add('active');
                        
                        const fileItem = document.querySelector(`.file[data-content=\"${contentId}\"]`);
                        if (fileItem) fileItem.classList.add('active');
                    }
                }
            }
        }
    });
});