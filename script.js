// Main script for VSCode Portfolio

document.addEventListener('DOMContentLoaded', function() {
    console.log('VSCode Portfolio loaded');
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.activity-icon[data-tab=\"theme-toggle\"]');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('vscode-dark')) {
                body.classList.remove('vscode-dark');
                body.classList.add('vscode-light');
            } else {
                body.classList.remove('vscode-light');
                body.classList.add('vscode-dark');
            }
        });
    }

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
            const correspondingPanel = document.querySelector('.panel[data-panel=\"' + tab + '\"]');
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
            document.getElementById(content + '-content').classList.add('active');
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelector('.tab[data-content=\"' + content + '\"]').classList.add('active');
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
            document.getElementById(content + '-content').classList.add('active');
            
            // Also update file selection
            files.forEach(f => f.classList.remove('active'));
            document.querySelector('.file[data-content=\"' + content + '\"]').classList.add('active');
        });
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
            alert('Mensagem enviada!\\nNome: ' + name + '\\nEmail: ' + email + '\\nMensagem: ' + message);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Basic functionality for the editor
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
                const contentPanel = document.getElementById(contentId + '-content');
                const fileItem = document.querySelector('.file[data-content=\"' + contentId + '\"]');
                
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
                            document.getElementById(contentId + '-content').classList.add('active');
                            
                            const fileItem = document.querySelector('.file[data-content=\"' + contentId + '\"]');
                            if (fileItem) fileItem.classList.add('active');
                        }
                    }
                }
            }
        });
    });
});

// Coding RPG Game Functionality
let gameInitialized = false;

function initializeGame() {
    if (gameInitialized) return; // Prevent double initialization
    
    const gameMap = document.getElementById('gameMap');
    if (!gameMap) return;
    
    // Game state
    const gameState = {
        player: {
            x: 0,
            y: 0,
            health: 100,
            level: 1,
            exp: 0,
            maxHealth: 100
        },
        enemies: [],
        treasures: [],
        boss: null,
        gameLog: document.getElementById('gameLog'),
        characterEl: document.getElementById('gameCharacter'),
        mapSize: { width: 10, height: 8 },
        map: []
    };

    // Initialize game
    function initGame() {
        createMap();
        updatePlayerStats();
        updateGamePosition();
        logMessage('Jogo de Codificacao iniciado! Use comandos para mover seu personagem.');
        gameInitialized = true;
    }

    // Create game map
    function createMap() {
        gameMap.innerHTML = '';
        gameState.map = [];
        
        // Create grid
        gameMap.style.gridTemplateColumns = 'repeat(' + gameState.mapSize.width + ', 1fr)';
        gameMap.style.gridTemplateRows = 'repeat(' + gameState.mapSize.height + ', 1fr)';
        
        for (let y = 0; y < gameState.mapSize.height; y++) {
            gameState.map[y] = [];
            for (let x = 0; x < gameState.mapSize.width; x++) {
                const cell = document.createElement('div');
                
                // Randomly determine cell type (path, wall, enemy, treasure)
                let cellType = 'path';
                
                // Borders are walls
                if (x === 0 || y === 0 || x === gameState.mapSize.width - 1 || y === gameState.mapSize.height - 1) {
                    cellType = 'wall';
                } 
                // Random walls inside
                else if (Math.random() < 0.15) {
                    cellType = 'wall';
                }
                
                cell.classList.add(cellType);
                cell.dataset.x = x;
                cell.dataset.y = y;
                gameMap.appendChild(cell);
                gameState.map[y][x] = cellType;
            }
        }
        
        // Place player at starting position
        gameState.player.x = 1;
        gameState.player.y = 1;
        updateGamePosition();
        
        // Place enemies
        for (let i = 0; i < 5; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * (gameState.mapSize.width - 2)) + 1;
                y = Math.floor(Math.random() * (gameState.mapSize.height - 2)) + 1;
            } while (gameState.map[y][x] !== 'path' || (x === gameState.player.x && y === gameState.player.y));
            
            gameState.map[y][x] = 'enemy';
            const enemyCell = document.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]');
            if (enemyCell) {
                enemyCell.classList.add('enemy');
            }
        }
        
        // Place treasures
        for (let i = 0; i < 3; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * (gameState.mapSize.width - 2)) + 1;
                y = Math.floor(Math.random() * (gameState.mapSize.height - 2)) + 1;
            } while (gameState.map[y][x] !== 'path' || (x === gameState.player.x && y === gameState.player.y));
            
            gameState.map[y][x] = 'treasure';
            const treasureCell = document.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]');
            if (treasureCell) {
                treasureCell.classList.add('treasure');
            }
        }
        
        // Place boss at the end
        gameState.map[gameState.mapSize.height - 2][gameState.mapSize.width - 2] = 'boss';
        const bossCell = document.querySelector('[data-x=\"' + (gameState.mapSize.width - 2) + '\"][data-y=\"' + (gameState.mapSize.height - 2) + '\"]');
        if (bossCell) {
            bossCell.classList.add('boss');
        }
    }

    // Update player position on the map
    function updateGamePosition() {
        const character = document.getElementById('gameCharacter');
        if (!character) return;
        
        // Calculate cell size based on map container
        const cellWidth = gameMap.offsetWidth / gameState.mapSize.width;
        const cellHeight = gameMap.offsetHeight / gameState.mapSize.height;
        
        // Position character based on player coordinates
        character.style.left = (gameState.player.x * cellWidth + cellWidth/3) + 'px';
        character.style.top = (gameState.player.y * cellHeight + cellHeight/4) + 'px';
        
        // Update position display
        document.getElementById('position').textContent = gameState.player.x + ',' + gameState.player.y;
    }

    // Update player stats display
    function updatePlayerStats() {
        document.getElementById('health').textContent = gameState.player.health;
        document.getElementById('level').textContent = gameState.player.level;
        document.getElementById('exp').textContent = gameState.player.exp;
    }

    // Log a message to the game log
    function logMessage(message) {
        const log = gameState.gameLog;
        const p = document.createElement('p');
        p.textContent = message;
        log.appendChild(p);
        log.scrollTop = log.scrollHeight;
    }

    // Move player in a direction
    function movePlayer(dx, dy) {
        const newX = gameState.player.x + dx;
        const newY = gameState.player.y + dy;
        
        // Check if new position is valid
        if (newX < 0 || newX >= gameState.mapSize.width || newY < 0 || newY >= gameState.mapSize.height) {
            logMessage('Nao e possivel sair dos limites do mapa!');
            return false;
        }
        
        const newCellType = gameState.map[newY][newX];
        
        if (newCellType === 'wall') {
            logMessage('Nao e possivel atravessar paredes!');
            return false;
        }
        
        gameState.player.x = newX;
        gameState.player.y = newY;
        updateGamePosition();
        logMessage('Movido para (' + gameState.player.x + ', ' + gameState.player.y + ')');
        
        // Check for treasures, enemies, etc.
        checkCell();
        return true;
    }

    // Check what's at the player's current position
    function checkCell() {
        const cellType = gameState.map[gameState.player.y][gameState.player.x];
        
        switch (cellType) {
            case 'treasure':
                logMessage('Voce encontrou um tesouro! +20 de experiencia.');
                gameState.player.exp += 20;
                gameState.map[gameState.player.y][gameState.player.x] = 'path';
                const cell = document.querySelector('[data-x=\"' + gameState.player.x + '\"][data-y=\"' + gameState.player.y + '\"]');
                if (cell) cell.className = 'path';
                
                // Level up check
                if (gameState.player.exp >= gameState.player.level * 50) {
                    gameState.player.level++;
                    gameState.player.maxHealth += 20;
                    gameState.player.health = gameState.player.maxHealth;
                    logMessage('Nivel up! Agora voce esta no nivel ' + gameState.player.level + '. Vida restaurada.');
                }
                updatePlayerStats();
                break;
                
            case 'enemy':
                logMessage('Inimigo encontrado! Use attack() para lutar.');
                break;
                
            case 'boss':
                logMessage('Chefao encontrado! Prepare-se para o combate final!');
                break;
        }
    }

    // Player attack function
    function attack() {
        // Check surrounding cells for enemies
        let attacked = false;
        
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue; // Skip current position
                
                const checkX = gameState.player.x + dx;
                const checkY = gameState.player.y + dy;
                
                if (checkX >= 0 && checkX < gameState.mapSize.width && 
                    checkY >= 0 && checkY < gameState.mapSize.height) {
                    
                    if (gameState.map[checkY][checkX] === 'enemy') {
                        // Remove enemy
                        gameState.map[checkY][checkX] = 'path';
                        const cell = document.querySelector('[data-x=\"' + checkX + '\"][data-y=\"' + checkY + '\"]');
                        if (cell) cell.className = 'path';
                        
                        logMessage('Inimigo derrotado! +10 de experiencia.');
                        gameState.player.exp += 10;
                        attacked = true;
                        
                        // Level up check
                        if (gameState.player.exp >= gameState.player.level * 50) {
                            gameState.player.level++;
                            gameState.player.maxHealth += 20;
                            gameState.player.health = gameState.player.maxHealth;
                            logMessage('Nivel up! Agora voce esta no nivel ' + gameState.player.level + '. Vida restaurada.');
                        }
                        updatePlayerStats();
                    } else if (gameState.map[checkY][checkX] === 'boss') {
                        logMessage('Voce atacou o chefe! Derrote todos os inimigos primeiro!');
                        attacked = true;
                        
                        // Check if boss is defeated (simplified)
                        if (gameState.player.level >= 3) {
                            logMessage('PARABENS! Voce derrotou o chefe e completou o jogo!');
                        }
                    }
                }
            }
        }
        
        if (!attacked) {
            logMessage('Nenhum alvo encontrado para atacar.');
        }
    }

    // Execute code from the editor - CSP SAFE VERSION
    function executeCode() {
        const codeInput = document.getElementById('codeEditor');
        const code = codeInput.value.trim();
        
        if (!code) {
            logMessage('Digite um comando para executar.');
            return;
        }
        
        logMessage('Executando: ' + code);
        
        // Create a safe execution context using a parser instead of eval
        const allowedCommands = {
            moveUp: () => movePlayer(0, -1),
            moveDown: () => movePlayer(0, 1),
            moveLeft: () => movePlayer(-1, 0),
            moveRight: () => movePlayer(1, 0),
            attack: () => attack(),
            defend: () => logMessage('Voce se defende e recupera um pouco de vida.')
        };
        
        try {
            // Split the code by semicolons and trim whitespace
            const commands = code.split(';').map(cmd => cmd.trim()).filter(cmd => cmd);
            
            // Process each command
            for (const command of commands) {
                // Match commands in format: commandName() or commandName();
                const match = command.match(/^(\w+)\(\s*\);?$/);
                
                if (match) {
                    const commandName = match[1];
                    
                    if (typeof allowedCommands[commandName] === 'function') {
                        allowedCommands[commandName]();
                    } else {
                        logMessage('Comando desconhecido: ' + commandName);
                    }
                } else {
                    logMessage('Comando invalido ou mal formatado: ' + command);
                }
            }
        } catch (e) {
            logMessage('Erro ao executar codigo: ' + e.message);
        }
        
        // Clear the code input
        codeInput.value = '';
    }

    // Set up the execute button
    const executeBtn = document.getElementById('executeCode');
    if (executeBtn) {
        executeBtn.addEventListener('click', executeCode);
    }
    
    // Also allow Enter key to execute
    const codeEditor = document.getElementById('codeEditor');
    if (codeEditor) {
        codeEditor.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                executeCode();
            }
        });
    }

    // Initialize the game
    initGame();
}

// Initialize game when game panel becomes active
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for when game panel is activated
    const gameTabIcon = document.querySelector('.activity-icon[data-tab=\"game\"]');
    if (gameTabIcon) {
        gameTabIcon.addEventListener('click', function() {
            // Use setTimeout to ensure the panel is fully displayed before initializing the game
            setTimeout(initializeGame, 100);
        });
    }
    
    // Also initialize when the panel is shown by other means
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const gamePanel = document.querySelector('.panel[data-panel=\"game\"]');
                if (gamePanel && gamePanel.classList.contains('active')) {
                    setTimeout(initializeGame, 100);
                }
            }
        });
    });
    
    const gamePanel = document.querySelector('.panel[data-panel=\"game\"]');
    if (gamePanel) {
        observer.observe(gamePanel, { attributes: true, attributeFilter: ['class'] });
    }
});

// AI Assistant functionality
document.addEventListener('DOMContentLoaded', function() {
    const aiChatInput = document.getElementById('aiChatInput');
    const aiSendMessage = document.getElementById('aiSendMessage');
    const aiChatMessages = document.getElementById('aiChatMessages');
    
    if (!aiChatInput || !aiSendMessage || !aiChatMessages) return;
    
    // Function to add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'ai-message';
        
        messageDiv.innerHTML = `
            <div class=\"ai-avatar\">${isUser ? '👤' : '🤖'}</div>
            <div class=\"ai-message-content\">
                <p>` + text + `</p>
            </div>
        `;
        
        aiChatMessages.appendChild(messageDiv);
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
    
    // Function to get AI response based on user query
    function getAIResponse(query) {
        query = query.toLowerCase();
        
        // Knowledge base with information about Levi
        const knowledgeBase = {
            projects: [
                {
                    name: 'JurisGPT Advisor',
                    description: 'Plataforma juridica inteligente que simula a atuacao de um advogado virtual por meio de LLMs (GPT-4o), com classificacao automatica de area juridica, linguagem acessivel e suporte a diversas areas do Direito.',
                    tech: 'React, TypeScript, Vite, shadcn/ui, Tailwind CSS, OpenAI GPT-4o, SQLite, NLP',
                    url: 'https://jurisgpt-advisor.com/'
                },
                {
                    name: 'IntelliDoc AI',
                    description: 'Plataforma com agentes especializados para leitura, extracao e analise de documentos juridicos e administrativos com uso de RAG, OCR e NLP.',
                    tech: 'LangChain, Hugging Face, Tesseract, GPT-4, FAISS, Python, Streamlit',
                    url: 'https://github.com/LeviLucena/IntellidocAI'
                },
                {
                    name: 'Clima Blue',
                    description: 'Sistema inteligente de meteogramas focado em apoio a tomada de decisao no agronegocio, com interface web interativa, previsao climatica segmentada e dados meteorologicos confiaveis.',
                    tech: 'Python, Flask, Meteoblue API, Jinja2, Docker, Dotenv',
                    url: 'https://github.com/LeviLucena/ClimaBlue_Brasil'
                }
            ],
            skills: [
                'Linguagens: Python, R, TypeScript, JavaScript, PHP, SQL',
                'Frameworks: FastAPI, Flask, Django, Next.js, Dash, Streamlit',
                'IA & ML: OpenAI, Scikit-learn, PyTorch, TensorFlow, NumPy, Pandas, LangChain',
                'Frontend: React, Tailwind CSS, shadcn/ui, Framer Motion, HTML5, CSS3',
                'Data Viz: Matplotlib, Plotly, Seaborn, Power BI, Grafana',
                'Computer Vision: OpenCV, YOLOv8, Tesseract, Pillow'
            ],
            experience: 'Mais de 10 anos de experiencia em engenharia de software, inteligencia artificial e automacao de processos.',
            education: [
                'Tecnico em Administracao - ETEC Centro Paula Souza (2013)',
                'Analise e Desenvolvimento de Sistemas - Faculdade Drummond (2016)',
                'Engenharia de Software - Faculdade Impacta (2018)',
                'Especializacoes em Ciencia da Computacao, Ciencia de Dados, Programacao com Python e IA com Python - Harvard University (2023-2025)'
            ],
            ai_experience: 'Especialista em IA com experiencia em LLMs (GPT-4, Gemini), embeddings, RAG (Retrieval-Augmented Generation), NLP, classificacao semantica, OCR (Tesseract), engenharia de prompts, agentes com LangChain e n8n.',
            contact: 'Email: levigolucena@gmail.com, LinkedIn: https://www.linkedin.com/in/levilucena/, GitHub: https://github.com/LeviLucena'
        };
        
        // Simple pattern matching for responses
        if (query.includes('ola') || query.includes('oi') || query.includes('ola')) {
            return 'Ola! Sou o assistente de IA de Levi Lucena. Como posso ajudar-lo hoje?';
        } else if (query.includes('projeto') || query.includes('projetos') || query.includes('trabalho')) {
            let response = 'Aqui estao alguns dos principais projetos de Levi:';
            knowledgeBase.projects.forEach(project => {
                response += '\\n\\n• ' + project.name + ': ' + project.description + '\\nTecnologias: ' + project.tech;
            });
            return response;
        } else if (query.includes('jurisgpt') || query.includes('advogado') || query.includes('juridico')) {
            const jurisgpt = knowledgeBase.projects.find(p => p.name.includes('JurisGPT'));
            return jurisgpt.description + '\\nTecnologias: ' + jurisgpt.tech + '\\nURL: ' + jurisgpt.url;
        } else if (query.includes('intellidoc') || query.includes('documento') || query.includes('ocr')) {
            const intellidoc = knowledgeBase.projects.find(p => p.name.includes('IntelliDoc'));
            return intellidoc.description + '\\nTecnologias: ' + intellidoc.tech + '\\nURL: ' + intellidoc.url;
        } else if (query.includes('climab') || query.includes('clima') || query.includes('agronegocio')) {
            const climaBlue = knowledgeBase.projects.find(p => p.name.includes('Clima'));
            return climaBlue.description + '\\nTecnologias: ' + climaBlue.tech + '\\nURL: ' + climaBlue.url;
        } else if (query.includes('habilidade') || query.includes('tecnologia') || query.includes('tecnologias') || query.includes('skills')) {
            return 'Aqui estao as principais habilidades tecnicas de Levi:\\n' + knowledgeBase.skills.join('\\n');
        } else if (query.includes('experiencia') || query.includes('anos')) {
            return knowledgeBase.experience;
        } else if (query.includes('formacao') || query.includes('educacao') || query.includes('graduacao')) {
            return 'Formacao academica de Levi:\\n' + knowledgeBase.education.join('\\n');
        } else if (query.includes('ia') || query.includes('inteligencia artificial') || query.includes('machine learning') || query.includes('llm')) {
            return knowledgeBase.ai_experience + '\\n\\nLevi tem especializacao em IA generativa, modelos de linguagem (LLMs), RAG (Retrieval-Augmented Generation), NLP e sistemas de IA aplicados a diferentes dominios como juridico, saude e agronegocio.';
        } else if (query.includes('contato') || query.includes('email') || query.includes('linkedin')) {
            return 'Informacoes de contato de Levi:\\n' + knowledgeBase.contact;
        } else if (query.includes('python') || query.includes('linguagem') || query.includes('programacao')) {
            return 'Python e a linguagem principal de Levi, utilizada em frameworks como FastAPI, Flask, Django e bibliotecas de IA como Scikit-learn, PyTorch, TensorFlow, NumPy, Pandas, LangChain e outras.';
        } else if (query.includes('langchain') || query.includes('agentes')) {
            return 'Levi tem experiencia em desenvolver agentes de IA com LangChain e n8n, integrando LLMs (Modelos de Linguagem de Grande porte) como GPT-4 e Gemini para tarefas complexas de processamento de linguagem natural, extracao de informacoes e automacao inteligente.';
        } else if (query.includes('rag') || query.includes('retrieval')) {
            return 'RAG (Retrieval-Augmented Generation) e uma das especialidades de Levi. Ele implementa sistemas que combinam recuperacao de informacao com geracao de texto usando LLMs, como no projeto IntelliDoc AI para analise de documentos juridicos e administrativos.';
        } else {
            return 'Sou o assistente de IA de Levi Lucena. Posso responder sobre seus projetos, habilidades, experiencia e especialidades em inteligencia artificial. Tente perguntar sobre seus projetos, habilidades de IA ou experiencia profissional!';
        }
    }
    
    // Function to handle sending a message
    function sendMessage() {
        const message = aiChatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, true);
        
        // Clear input
        aiChatInput.value = '';
        
        // Simulate AI thinking
        setTimeout(() => {
            const response = getAIResponse(message);
            addMessage(response, false);
        }, 500); // Simulate processing time
    }
    
    // Event listeners
    aiSendMessage.addEventListener('click', sendMessage);
    
    aiChatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});