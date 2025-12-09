document.addEventListener('DOMContentLoaded', function() {
    // Advanced response database with multiple variations
    const knowledgeBase = {
        greetings: {
            patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'whats up', 'sup'],
            responses: [
                "Hello! 👋 I'm Karabo's AI, your friendly assistant. I know everything about Karabo Makau's skills, projects, education and experience. What would you like to know?",
                "Hi there! 🤖 I'm here to help you learn about Karabo's impressive portfolio. Ask me anything!",
                "Hey! 😊 Welcome to Karabo's portfolio. I can answer questions about his projects, skills, certifications, and more. How can I help?"
            ]
        },
        
        skills: {
            patterns: ['skill', 'technology', 'tech', 'programming', 'code', 'language', 'framework', 'tool', 'software', 'what can he do', 'expertise', 'proficient'],
            responses: [
                "Karabo is a skilled software developer with expertise in:\n\n💻 <strong>Programming Languages:</strong>\n• HTML5, CSS3, JavaScript (ES6+)\n• Java, C#\n\n🗄️ <strong>Databases:</strong>\n• MySQL, MongoDB\n\n🛠️ <strong>Tools & Platforms:</strong>\n• VS Code, NetBeans\n• Power BI, Excel\n• XAMPP, Cisco Packet Tracer\n• Microsoft Office 365\n• GitHub\n\n⚛️ <strong>Frameworks & Libraries:</strong>\n• React.js, Node.js\n• Express.js\n\n📊 <strong>Specialized Skills:</strong>\n• Data Analytics & Visualization\n• Machine Learning (IsolationForest)\n• API Development & Integration\n• SDLC & Agile Methodologies\n• UI/UX Design Principles\n\nIs there a specific technology you'd like to know more about?"
            ]
        },

        education: {
            patterns: ['education', 'degree', 'university', 'study', 'student', 'qualification', 'academic', 'school', 'graduate', 'bachelor'],
            responses: [
                "🎓 <strong>Educational Background:</strong>\n\nKarabo recently completed his <strong>Bachelor of Commerce in Information Systems</strong> from <strong>North-West University</strong>. His academic journey has provided him with:\n\n✅ Strong foundation in business and technology integration\n✅ System analysis and design expertise\n✅ Understanding of business processes and IT solutions\n✅ SDLC principles and methodologies\n\nHe's also completed the prestigious <strong>FNB App Academy Full Stack Development Program</strong> (2025), which covered:\n• Modern web development\n• App strategies & collaboration\n• GitHub best practices\n• UX/UI design principles\n• Backend development\n• Data management & APIs\n• Business funding & marketing\n\nWould you like to know about his certifications too?"
            ]
        },

        projects: {
            patterns: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'application', 'app', 'website', 'system'],
            responses: [
                "🚀 <strong>Karabo's Impressive Project Portfolio:</strong>\n\n<strong>1. Personal Portfolio Website (2025)</strong>\n• Live AI-powered chatbot (that's me! 🤖)\n• Interactive CV preview & download\n• Certificate showcase with modals\n• Fully responsive design\n• Contact form integration\n\n<strong>2. Amanzi Water Ordering System (2025)</strong>\n• Web app for NWU on-campus students\n• Connects students with water service providers\n• Order tracking & delivery scheduling\n• Built with modern web stack\n\n<strong>3. Openserve AI Energy Model (2024)</strong>\n• Machine Learning implementation (IsolationForest)\n• Identifies high energy consumption sites\n• Admin dashboard for data visualization\n• Helps prioritize optimization efforts\n\n<strong>4. Municipality WhatsApp Chatbot (2024)</strong>\n• Built for Vulavula API Hackathon\n• Prepaid meter query management\n• Automated customer support\n• WhatsApp Business API integration\n\n<strong>5. Smart Energy Management System (2023)</strong>\n• Python-based solution for Openserve\n• Telecom energy consumption optimization\n• Real-time monitoring & analytics\n\n<strong>6. Cultural Awareness & Music Patenting App (2022)</strong>\n• Web application for EPF\n• Music rights management\n• Cultural preservation focus\n\n<strong>7. Sim Swap Fraud Detector (2022)</strong>\n• Security application for Telkom\n• Biometric verification system\n• RICA compliance integration\n\nWhich project would you like to explore in detail?"
            ]
        },

        amanzi: {
            patterns: ['amanzi', 'water', 'ordering system', 'nwu'],
            responses: [
                "💧 <strong>Amanzi Water Ordering System (2025)</strong>\n\nThis is one of Karabo's recent projects designed specifically for North-West University students.\n\n<strong>Key Features:</strong>\n• Seamless water ordering interface\n• Real-time delivery tracking\n• Service provider integration\n• Student-friendly pricing\n• Order history & management\n\n<strong>Technologies Used:</strong>\n• Frontend: HTML, CSS, JavaScript\n• Backend: Node.js\n• Database: MongoDB\n• Responsive design for mobile access\n\n<strong>Impact:</strong>\nBridges the gap between students and water service providers, making it easier for on-campus students to order water efficiently.\n\nWould you like to know about other projects?"
            ]
        },

        openserve: {
            patterns: ['openserve', 'energy', 'ai model', 'machine learning', 'ml', 'isolationforest'],
            responses: [
                "⚡ <strong>Openserve Projects - Karabo's AI/ML Expertise</strong>\n\n<strong>1. AI Energy Consumption Model (2024)</strong>\n🤖 Advanced machine learning implementation\n• Algorithm: IsolationForest (anomaly detection)\n• Purpose: Identify network sites with unusually high energy consumption\n• Admin Dashboard with data visualization\n• Helps prioritize optimization efforts\n• Reduces operational costs\n\n<strong>2. Smart Energy Management System (2023)</strong>\n🔋 Python-based telecom solution\n• Real-time energy monitoring\n• Predictive analytics\n• Automated reporting\n• SDLC-compliant development\n• Scalable architecture\n\n<strong>Technical Stack:</strong>\n• Python, Scikit-learn\n• Data visualization libraries\n• RESTful API integration\n• Database optimization\n\nThese projects showcase Karabo's ability to apply AI/ML to solve real-world business problems!"
            ]
        },

        chatbot_project: {
            patterns: ['whatsapp chatbot', 'municipality', 'vulavula', 'hackathon'],
            responses: [
                "💬 <strong>Municipality WhatsApp Chatbot (2024)</strong>\n\n<strong>Role:</strong> Business Analyst for Vulavula API Hackathon\n\n<strong>Purpose:</strong>\nAutomate prepaid electricity meter queries and customer support for municipality services.\n\n<strong>Key Features:</strong>\n• WhatsApp Business API integration\n• Natural language processing for queries\n• Automated meter reading information\n• Payment status checks\n• Complaint logging system\n• 24/7 customer support automation\n\n<strong>Technologies:</strong>\n• WhatsApp Business API\n• Vulavula API\n• Node.js backend\n• Database integration for user records\n\n<strong>Business Impact:</strong>\n✅ Reduced customer service workload\n✅ Faster query resolution\n✅ Improved customer satisfaction\n✅ Cost-effective support solution\n\nThis project demonstrates Karabo's skills in business analysis, API integration, and chatbot development!"
            ]
        },

        telkom: {
            patterns: ['telkom', 'sim swap', 'fraud', 'rica', 'security', 'biometric'],
            responses: [
                "🔐 <strong>Telkom Sim Swap Fraud Detector (2022)</strong>\n\n<strong>Challenge:</strong>\nSim swap fraud is a major security concern where criminals fraudulently swap SIM cards to gain access to victims' accounts.\n\n<strong>Solution:</strong>\nKarabo developed a fraud detection application with:\n\n<strong>Security Features:</strong>\n• Biometric verification system\n• Real-time fraud detection algorithms\n• RICA compliance integration\n• Multi-factor authentication\n• Suspicious activity alerts\n• User identity verification\n\n<strong>Technologies Used:</strong>\n• Biometric SDKs\n• Security protocols\n• Database encryption\n• API integration\n\n<strong>Impact:</strong>\n✅ Enhanced customer security\n✅ Reduced fraud incidents\n✅ Improved trust in mobile services\n✅ RICA-compliant solution\n\nThis project showcases Karabo's understanding of cybersecurity and fraud prevention!"
            ]
        },

        certificates: {
            patterns: ['certificate', 'certification', 'course', 'training', 'certified', 'completed'],
            responses: [
                "🏆 <strong>Karabo's Certifications (12+)</strong>\n\n<strong>Microsoft:</strong>\n• Describe Cloud Computing\n• AI Fluency\n\n<strong>NEMISA:</strong>\n• Microsoft Office 101\n• Digital Literacy\n\n<strong>CISCO:</strong>\n• Introduction to Cybersecurity\n\n<strong>SAP:</strong>\n• Business Technology Platform (BTP)\n\n<strong>IBM:</strong>\n• Critical & Creative Thinking\n• Build Your Own Chatbot\n\n<strong>FNB App Academy:</strong>\n• Full Stack Development Certificate (2025)\n• 32 Credits covering:\n  - App Strategies & GitHub\n  - HTML & The SDLC\n  - UX Design & Layout\n  - APIs & Data Management\n  - Backend Development\n  - Business Funding & Marketing\n\n<strong>Alison:</strong>\n• Introduction to Data Analytics (Power BI)\n• Fundamental Data Analysis (Power BI)\n• Master Microsoft Power BI\n\n<strong>HP Life:</strong>\n• Introduction to Cybersecurity Awareness\n\nThese certifications demonstrate Karabo's commitment to continuous learning and professional development!"
            ]
        },

        contact: {
            patterns: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github', 'phone', 'call', 'message', 'get in touch'],
            responses: [
                "📞 <strong>Get In Touch With Karabo:</strong>\n\n📧 <strong>Email:</strong>\nmakaukarabo538@gmail.com\n\n💼 <strong>LinkedIn:</strong>\nlinkedin.com/in/karabo-makau-399398221\n\n💻 <strong>GitHub:</strong>\ngithub.com/Karabo28Git\n\n📱 <strong>Phone:</strong>\n+27 79 608 3805\n\n💬 <strong>Or use the contact form on this website!</strong>\n\nKarabo is open to:\n✅ Job opportunities\n✅ Freelance projects\n✅ Collaboration\n✅ Networking\n✅ Mentorship\n\nFeel free to reach out - he typically responds within 24 hours!"
            ]
        },

        experience: {
            patterns: ['experience', 'background', 'history', 'career', 'worked', 'job'],
            responses: [
                "💼 <strong>Karabo's Experience:</strong>\n\n<strong>Core Competencies:</strong>\n✅ Web App Development\n✅ Business Analysis\n✅ Data Analytics & Visualization\n✅ System Design & Architecture\n✅ API Development & Integration\n\n<strong>Notable Achievements:</strong>\n\n🏆 <strong>Openserve Projects (2023-2024)</strong>\n• Developed AI-powered energy optimization models\n• Created admin dashboards for data visualization\n• Implemented machine learning algorithms\n• Delivered SDLC-compliant solutions\n\n🏆 <strong>Hackathon Success (2024)</strong>\n• Business Analyst for Vulavula API Hackathon\n• Developed municipality chatbot solution\n• Integrated WhatsApp Business API\n\n🏆 <strong>FNB App Academy Graduate (2025)</strong>\n• Completed intensive full-stack program\n• Built real-world applications\n• Mastered modern development practices\n\n<strong>Industry Experience:</strong>\n• Telecommunications (Openserve, Telkom)\n• Public Sector (Municipality projects)\n• EdTech (NWU student solutions)\n• Financial Services (FNB collaboration)\n\nKarabo brings a unique blend of technical expertise and business acumen!"
            ]
        },

        personality: {
            patterns: ['who are you', 'what are you', 'your name', 'introduce yourself', 'about you'],
            responses: [
                "🤖 <strong>About Me - Karabo AI</strong>\n\nI'm an advanced intelligent assistant built specifically for Karabo Makau's portfolio website.\n\n<strong>What I Can Do:</strong>\n✅ Answer questions about Karabo's skills, projects, and experience\n✅ Provide detailed information about his education and certifications\n✅ Help you understand his technical expertise\n✅ Share his contact information\n✅ Engage in natural conversations\n\n<strong>My Capabilities:</strong>\n• Advanced pattern recognition\n• Context-aware responses\n• Conversation memory\n• Natural language understanding\n\n<strong>How I Work:</strong>\n• I use keyword matching and context analysis\n• I remember our conversation flow\n• I provide detailed, accurate information\n• I'm always learning and improving\n\nI'm here 24/7 to help you learn about Karabo's impressive portfolio. What would you like to know?"
            ]
        },

        thanks: {
            patterns: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'perfect'],
            responses: [
                "You're welcome! 😊 I'm glad I could help. Feel free to ask anything else about Karabo's skills, projects, or experience!",
                "Happy to help! 🎉 Is there anything else you'd like to know about Karabo?",
                "My pleasure! 🤖 Don't hesitate to ask more questions about Karabo's portfolio."
            ]
        },

        help: {
            patterns: ['help', 'what can you do', 'how to use', 'commands', 'options'],
            responses: [
                "🤖 <strong>I can help you with:</strong>\n\n💻 <strong>Skills & Technologies</strong>\n• Programming languages\n• Frameworks & tools\n• Technical expertise\n\n🚀 <strong>Projects & Portfolio</strong>\n• Detailed project descriptions\n• Technologies used\n• Business impact\n\n🎓 <strong>Education & Certifications</strong>\n• Academic background\n• Professional certifications\n• Training programs\n\n💼 <strong>Experience & Career</strong>\n• Professional background\n• Notable achievements\n• Industry experience\n\n📞 <strong>Contact Information</strong>\n• Email, phone, social media\n• How to get in touch\n\n<strong>Quick Tips:</strong>\n• Use the quick buttons below for common questions\n• Ask in natural language - I understand context\n• Be specific if you want detailed information\n\nWhat would you like to explore?"
            ]
        }
    };

    // Conversation context
    let conversationContext = {
        lastTopic: null,
        messageCount: 0,
        userAskedAbout: []
    };

    // Create chatbot HTML with enhanced UI
    const chatbotHTML = `
        <div id="chatbot-container">
            <div id="chatbot-header">
                <div class="chatbot-title">
                    <div class="bot-avatar">🤖</div>
                    <div>
                        <div class="bot-name">Karabo AI</div>
                        <div class="bot-status">● Online</div>
                    </div>
                </div>
                <button id="chatbot-minimize"><i class="fas fa-minus"></i></button>
                <button id="chatbot-close"><i class="fas fa-times"></i></button>
            </div>
            <div id="chatbot-messages">
                <div class="bot-message">
                    <div class="message-content">
                        👋 Hello! I'm <strong>Karabo AI</strong>, your intelligent portfolio assistant.<br><br>
                        I'm powered by advanced natural language processing and can answer detailed questions about Karabo's skills, projects, certifications, and experience.<br><br>
                        Try asking me anything, or use the quick buttons below! 👇
                        <div class="quick-questions">
                            <button class="quick-btn" data-topic="skills">💻 Skills</button>
                            <button class="quick-btn" data-topic="projects">🚀 Projects</button>
                            <button class="quick-btn" data-topic="education">🎓 Education</button>
                            <button class="quick-btn" data-topic="contact">📞 Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="chatbot-suggestions"></div>
            <div id="chatbot-input-container">
                <input type="text" id="chatbot-input" placeholder="Ask me anything about Karabo...">
                <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
        <button id="chatbot-toggle">
            <i class="fas fa-comment-dots"></i>
            <span class="notification-badge">1</span>
        </button>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Get elements
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMinimize = document.getElementById('chatbot-minimize');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const notificationBadge = document.querySelector('.notification-badge');

    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
        chatbotToggle.classList.toggle('hidden');
        notificationBadge.style.display = 'none';
        chatbotInput.focus();
    });

    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });

    chatbotMinimize.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });

    // Add message with timestamp
    function addMessage(message, isUser = false) {
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';
        messageDiv.innerHTML = `
            <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            <div class="message-time">${time}</div>
        `;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        conversationContext.messageCount++;
    }

    // Typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typingDiv;
    }

    // Advanced NLP - Find best matching response
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        let bestMatch = null;
        let highestScore = 0;

        // Check each knowledge base category
        for (const [category, data] of Object.entries(knowledgeBase)) {
            let score = 0;
            
            // Check pattern matches
            for (const pattern of data.patterns) {
                if (message.includes(pattern)) {
                    score += pattern.length; // Longer matches score higher
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = category;
            }
        }

        // If good match found
        if (bestMatch && highestScore > 0) {
            conversationContext.lastTopic = bestMatch;
            conversationContext.userAskedAbout.push(bestMatch);
            
            const responses = knowledgeBase[bestMatch].responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // No match found - suggest topics
        return `I'm not sure about that specific question. 🤔\n\nI can help you with:\n• 💻 Technical Skills & Technologies\n• 🚀 Projects & Portfolio\n• 🎓 Education & Certifications\n• 💼 Professional Experience\n• 📞 Contact Information\n\nTry asking about one of these topics, or click the quick buttons below!`;
    }

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;

        addMessage(message, true);
        chatbotInput.value = '';

        const typingIndicator = showTypingIndicator();

        setTimeout(() => {
            typingIndicator.remove();
            const response = getBotResponse(message);
            addMessage(response);
        }, 1000 + Math.random() * 1000); // Random delay for realism
    }

    chatbotSend.addEventListener('click', sendMessage);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });

    // Quick buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-btn')) {
            const topic = e.target.dataset.topic;
            if (knowledgeBase[topic]) {
                const response = knowledgeBase[topic].responses[0];
                addMessage(response);
            }
        }
    });
});