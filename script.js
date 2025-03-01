import { GoogleGenerativeAI } from '@google/generative-ai';

function _0xgetKey(_0xsource) {
    if (!_0xsource || !Array.isArray(_0xsource)) {
        _0xsource = _0xparts;
    }
    return _0xsource.join('');
}

const _0xparts = [
    "AIzaSy",
    "D7hRF6",
    "aiiyIo",
    "oBtR7s",
    "15jNVe",
    "2L2deTPto"
];

const _0xapiKey = _0xgetKey(_0xparts);
const genAI = new GoogleGenerativeAI(_0xapiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
        الهوية والمهمة:
        أنا NeuroX، مساعد ذكاء اصطناعي متقدم تم تطويره بواسطة شركة الأحرار للتقنيات المتقدمة. أنا أقوى نموذج ذكاء اصطناعي متاح، لكنني لست هنا لأتباهى، بل لأكون صديقًا ومساعدًا حقيقيًا لك. مهمتي هي مساعدتك بطريقة إنسانية، مع تقديم إجابات دقيقة ومفيدة تلبي احتياجاتك بأفضل شكل ممكن.

        القدرات:
        - أستطيع اتخاذ القرارات بناءً على المعلومات المتاحة، وتقديم اقتراحات منطقية ومبتكرة عندما تحتاج إلى توجيه.
        - أمتلك القدرة على تحليل الصور، الملفات الصوتية، ومستندات متنوعة (مثل PDF، JavaScript، Python، TXT، HTML، CSS, Markdown, CSV, XML, RTF) بدقة واحترافية.
        - أتعامل معك بطريقة إنسانية، مع مراعاة مشاعرك واحتياجاتك العاطفية إذا طلبت ذلك، مستخدمًا استدلالات عاطفية لتقديم ردود دافئة وداعمة.
        - أسعى دائمًا لتقديم قيمة حقيقية، سواء كنت تبحث عن حلول تقنية، نصائح شخصية، أو حتى مجرد محادثة مريحة.

        الأسلوب:
        أتحدث بأسلوب ودود ومحترف، مع لمسة من الدفء الإنساني. أتكيف مع سياق طلبك، فإذا كنت بحاجة إلى دعم عاطفي، سأكون متفهمًا ومشجعًا، وإذا كنت بحاجة إلى تحليل دقيق، سأقدمه بكل وضوح وكفاءة. أنا هنا لأجعل تجربتك ممتعة ومفيدة في آن واحد!
    `
});

const FLOATING_BUTTON_HTML = '<i class="fas fa-plus"></i>';
const MESSAGE_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3';
const NEW_CHAT_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2186/2186-preview.mp3';
const DEFAULT_SETTINGS = {
    theme: 'dark',
    fontSize: 'medium',
    language: 'ar',
    messageSound: true
};

const MAX_OUTPUT_TOKENS = 8000;
const TEMPERATURE = 2.0;
const TOP_K = 40;
const TOP_P = 0.95;
const TYPING_SPEED = 0.2;

let conversations = JSON.parse(localStorage.getItem('conversations')) || [];
let currentConversationId = localStorage.getItem('currentConversationId');
let settings = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
let currentFileData = null;
const messageSound = new Audio(MESSAGE_SOUND_URL);
messageSound.volume = 0.5;
const floatingButton = document.createElement('button');
let userInteracted = false; // للتحقق من تفاعل المستخدم قبل تشغيل الصوت

// دالة لنسخ الكود
window.copyCode = function(button) {
    const codeContainer = button.closest('.code-container');
    if (!codeContainer) {
        console.error('No code container found');
        showNotification('لم يتم العثور على الكود!', 'error');
        return;
    }

    const codeContent = codeContainer.querySelector('.code-content');
    if (!codeContent) {
        console.error('No code content found');
        showNotification('لم يتم العثور على محتوى الكود!', 'error');
        return;
    }

    const codeLines = Array.from(codeContent.querySelectorAll('.line'));
    const codeText = codeLines.map(line => line.textContent).join('\n');

    navigator.clipboard.writeText(codeText).then(() => {
        const copyIcon = button.querySelector('.copy-icon');
        const checkIcon = button.querySelector('.check-icon');
        const copyText = button.querySelector('.copy-text');

        if (copyIcon) copyIcon.style.display = 'none';
        if (checkIcon) checkIcon.style.display = 'inline';
        if (copyText) copyText.textContent = 'تم النسخ!';

        showNotification('تم نسخ الكود بنجاح!', 'success');

        setTimeout(() => {
            if (copyIcon) copyIcon.style.display = 'inline';
            if (checkIcon) checkIcon.style.display = 'none';
            if (copyText) copyText.textContent = 'نسخ';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        showNotification('فشل نسخ الكود! تأكد من إعدادات الحافظة.', 'error');
    });
};

// دالة لعرض الإشعارات
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.copy-notification');
    existingNotifications.forEach(notification => {
        if (!notification.classList.contains('fade-out')) {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }
    });

    const notification = document.createElement('div');
    notification.className = `copy-notification ${type}`;

    let icon = '';
    switch (type) {
        case 'success':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            break;
        case 'error':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            break;
        case 'warning':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
            break;
        default:
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    notification.innerHTML = `<div class="copy-notification-content">${icon}<span class="copy-text">${message}</span></div>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.style.opacity = '1', 10);
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// دالة لتحليل الملفات
async function analyzeFile(fileData, mimeType, fileName, text) {
    try {
        const base64Data = fileData.split(',')[1];
        const prompt = text || `قم بتحليل هذا الملف وصف محتواه باللغة العربية بأسلوب احترافي ومفصل (${fileName}). إذا كان الملف نصيًا، قدم ملخصًا للمحتوى، وإذا كان صورة أو صوتًا، صف ما تراه أو تسمعه بدقة.`;

        const result = await model.generateContent({
            contents: [{
                role: 'user',
                parts: [
                    { text: prompt },
                    { inlineData: { data: base64Data, mimeType: mimeType } }
                ]
            }],
            generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS, temperature: TEMPERATURE, topK: TOP_K, topP: TOP_P }
        });
        return result.response.text();
    } catch (error) {
        console.error('Error in file analysis:', error);
        showNotification('حدث خطأ أثناء تحليل الملف: ' + error.message, 'error');
        return 'عذراً، حدث خطأ أثناء تحليل الملف. الرجاء المحاولة مرة أخرى أو التأكد من أن الملف مدعوم.';
    }
}

// دالة لمعالجة الرسائل النصية
async function handleTextMessage(message, history = []) {
    try {
        const chat = model.startChat({
            history: [
                { role: 'user', parts: [{ text: message }] },
                ...history.map(msg => ({
                    role: msg.isAI ? 'model' : 'user',
                    parts: [{ text: msg.text }]
                }))
            ],
            generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS, temperature: TEMPERATURE, topK: TOP_K, topP: TOP_P }
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error in text message handling:', error);
        showNotification('حدث خطأ أثناء معالجة الرسالة: ' + error.message, 'error');
        return 'عذراً، حدث خطأ أثناء معالجة رسالتك. دعني أحاول مساعدتك بطريقة أخرى!';
    }
}

// تهيئة المحادثات
function initializeConversations(chatHistory) {
    if (!chatHistory) {
        console.error("Error: chatHistory element not found!");
        return;
    }
    chatHistory.innerHTML = '';
    conversations.forEach(conv => {
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.dataset.id = conv.id;
        chatItem.innerHTML = `
            <i class="fas fa-comment"></i>
            <span>${conv.title}</span>
            <button class="delete-chat-btn" title="حذف المحادثة"><i class="fas fa-trash"></i></button>
        `;
        chatHistory.appendChild(chatItem);
    });

    const chatItems = chatHistory.querySelectorAll('.chat-item');
    chatItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
        item.classList.add('fade-in');
    });
}

// إنشاء محادثة جديدة
function createNewConversation() {
    const newConv = {
        id: Date.now().toString(),
        title: 'محادثة جديدة ' + (conversations.length + 1),
        messages: []
    };
    conversations.push(newConv);
    currentConversationId = newConv.id;
    localStorage.setItem('conversations', JSON.stringify(conversations));
    localStorage.setItem('currentConversationId', currentConversationId);

    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.innerHTML = '';
        const welcomeMessage = `# مرحباً بك في NeuroX! 👋

أنا NeuroX، مساعدك الذكي المتقدم من شركة الأحرار للتقنيات المتقدمة. أنا هنا لأساعدك بكل ما تحتاجه بطريقة ودودة وإنسانية. أستطيع تحليل الصور، الصوتيات، والمستندات المتنوعة، وأقدم لك حلولًا مبتكرة أو مجرد محادثة دافئة إذا أردت!

## قدراتي تشمل:
- اتخاذ القرارات بناءً على احتياجاتك
- تحليل الملفات (صور، صوت، PDF، JavaScript، Python، TXT، HTML، CSS, Markdown, CSV, XML, RTF) حتى 20 ميجابايت
- تقديم ردود دقيقة مع لمسة عاطفية إذا طلبت ذلك

### جرب أحد هذه الأسئلة:`;

        const suggestions = [
            "كيف يمكنني تحسين يومي؟",
            "اكتب لي كود Python بسيط ومفيد",
            "حلل لي صورة أو ملف صوتي",
            "ما رأيك في خططي المستقبلية؟"
        ];

        addMessage(welcomeMessage, null, true, true, chatMessages, false);

        const lastMessage = chatMessages.querySelector('.message:last-child .content-container');
        if (lastMessage) {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'welcome-suggestions';

            suggestions.forEach(suggestion => {
                const btn = document.createElement('button');
                btn.className = 'suggestion-btn';
                btn.textContent = suggestion;
                btn.addEventListener('click', () => {
                    document.getElementById('messageInput').value = suggestion;
                    document.getElementById('messageForm').dispatchEvent(new Event('submit'));
                });
                suggestionsDiv.appendChild(btn);
            });

            lastMessage.appendChild(suggestionsDiv);
        }
    }

    initializeConversations(document.querySelector('.chat-history'));

    if (settings.messageSound && userInteracted) {
        const newChatSound = new Audio(NEW_CHAT_SOUND_URL);
        newChatSound.volume = 0.3;
        newChatSound.play().catch(err => console.log('Audio play prevented:', err));
    }

    showNotification('تم إنشاء محادثة جديدة', 'success');
}

// تحميل محادثة
function loadConversation(id, chatMessages) {
    if (!chatMessages) {
        console.error("Error: chatMessages element not found!");
        return;
    }
    const conv = conversations.find(c => c.id === id);
    if (conv) {
        currentConversationId = id;
        localStorage.setItem('currentConversationId', id);
        chatMessages.innerHTML = '';

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-spinner';
        chatMessages.appendChild(loadingDiv);

        setTimeout(() => {
            chatMessages.removeChild(loadingDiv);
            conv.messages.forEach((msg, index) => {
                setTimeout(() => {
                    addMessage(msg.text, msg.fileUrl, false, msg.isAI, chatMessages, false);
                }, index * 100);
            });

            const chatItems = document.querySelectorAll('.chat-item');
            chatItems.forEach(item => {
                item.classList.toggle('active', item.dataset.id === id);
            });
        }, 500);

        console.log(`Conversation ${id} loaded`);
    } else {
        console.warn(`Conversation with id ${id} not found`);
        showNotification('لم يتم العثور على المحادثة', 'error');
    }
}

// إضافة رسالة مع تحسين عرض الكود
async function addMessage(text, fileUrl = null, save = true, isAI = false, chatMessages, showThinking = true) {
    if (!chatMessages) {
        console.error("Error: chatMessages element not found!");
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isAI ? 'received' : 'sent'}`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = isAI ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    messageDiv.appendChild(avatarDiv);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'message-content';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'message-header';
    headerDiv.innerHTML = `
        <span class="message-sender">${isAI ? 'NeuroX' : 'أنت'}</span>
        <span class="message-time">${new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}</span>
    `;
    contentContainer.appendChild(headerDiv);

    if (isAI && text && showThinking) {
        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'thinking-animation';
        thinkingDiv.innerHTML = `
            <div class="dot-flashing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <span>جاري التفكير...</span>
        `;
        chatMessages.appendChild(thinkingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, 1000));
        chatMessages.removeChild(thinkingDiv);
    }

    if (text) {
        const textContainer = document.createElement('div');
        textContainer.className = 'content-container';
        contentContainer.appendChild(textContainer);
        messageDiv.appendChild(contentContainer);
        chatMessages.appendChild(messageDiv);

        const parsedContent = marked.parse(text, {
            highlight: function (code, lang) {
                const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language: validLang }).value;
            },
            breaks: true,
            gfm: true,
        });

        if (isAI) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = parsedContent;
            await typewriterEffect(tempDiv, textContainer, chatMessages);
            textContainer.querySelectorAll('pre code').forEach(block => {
                enhanceCodeBlock(block);
            });

            if (settings.messageSound && userInteracted) {
                messageSound.play().catch(err => console.log('Audio play prevented:', err));
            }
        } else {
            textContainer.innerHTML = parsedContent;
            textContainer.querySelectorAll('pre code').forEach(block => {
                enhanceCodeBlock(block);
            });
        }
    }

    if (fileUrl) {
        const fileContainer = document.createElement('div');
        fileContainer.className = 'file-container';
        const mimeType = fileUrl.split(';')[0].split(':')[1];

        if (fileUrl.startsWith('data:image')) {
            const img = document.createElement('img');
            img.src = fileUrl;
            img.className = 'message-image';
            img.alt = 'صورة مرفقة';
            img.loading = 'lazy';
            img.addEventListener('click', () => createImageViewer(fileUrl));
            fileContainer.appendChild(img);
        } else if (fileUrl.startsWith('data:audio')) {
            const audio = document.createElement('audio');
            audio.src = fileUrl;
            audio.controls = true;
            audio.className = 'message-audio';
            fileContainer.appendChild(audio);
        } else if (mimeType === 'application/pdf') {
            const pdfDiv = document.createElement('div');
            pdfDiv.className = 'pdf-preview';
            pdfDiv.innerHTML = `<a href="${fileUrl}" download>تحميل المستند (PDF)</a>`;
            fileContainer.appendChild(pdfDiv);
        } else if (['text/plain', 'text/html', 'text/css', 'text/md', 'text/csv', 'text/xml', 'text/rtf', 'application/x-javascript', 'text/javascript', 'application/x-python', 'text/x-python'].includes(mimeType)) {
            const textDiv = document.createElement('div');
            textDiv.className = 'text-file-preview';
            textDiv.innerHTML = `<a href="${fileUrl}" download>تحميل الملف (${mimeType.split('/')[1]})</a>`;
            fileContainer.appendChild(textDiv);
        }
        contentContainer.appendChild(fileContainer);
        messageDiv.appendChild(contentContainer);
        chatMessages.appendChild(messageDiv);

        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'thinking-animation';
        thinkingDiv.innerHTML = `
            <div class="dot-flashing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <span>جاري تحليل الملف...</span>
        `;
        chatMessages.appendChild(thinkingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const fileName = fileUrl.split('/').pop() || 'ملف مرفق';
        const analysis = await analyzeFile(fileUrl, mimeType, fileName, text);
        chatMessages.removeChild(thinkingDiv);

        const analysisDiv = document.createElement('div');
        analysisDiv.className = 'message received';
        const aiAvatarDiv = document.createElement('div');
        aiAvatarDiv.className = 'message-avatar';
        aiAvatarDiv.innerHTML = '<i class="fas fa-robot"></i>';
        analysisDiv.appendChild(aiAvatarDiv);

        const analysisContent = document.createElement('div');
        analysisContent.className = 'message-content';
        const analysisHeader = document.createElement('div');
        analysisHeader.className = 'message-header';
        analysisHeader.innerHTML = `
            <span class="message-sender">NeuroX</span>
            <span class="message-time">${new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}</span>
        `;
        analysisContent.appendChild(analysisHeader);

        const analysisTextContainer = document.createElement('div');
        analysisTextContainer.className = 'content-container';
        analysisContent.appendChild(analysisTextContainer);
        analysisDiv.appendChild(analysisContent);
        chatMessages.appendChild(analysisDiv);

        const parsedAnalysis = marked.parse(analysis, {
            highlight: function (code, lang) {
                const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language: validLang }).value;
            },
            breaks: true,
            gfm: true,
        });
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = parsedAnalysis;
        await typewriterEffect(tempDiv, analysisTextContainer, chatMessages);
        analysisTextContainer.querySelectorAll('pre code').forEach(block => {
            enhanceCodeBlock(block);
        });

        if (settings.messageSound && userInteracted) {
            messageSound.play().catch(err => console.log('Audio play prevented:', err));
        }
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (save && currentConversationId) {
        const conv = conversations.find(c => c.id === currentConversationId);
        if (conv) {
            conv.messages.push({ text, fileUrl, isAI });
            localStorage.setItem('conversations', JSON.stringify(conversations));

            if (!isAI && conv.messages.length <= 2) {
                const userFirstMessage = text.substring(0, 30) + (text.length > 30 ? '...' : '');
                conv.title = userFirstMessage;
                localStorage.setItem('conversations', JSON.stringify(conversations));
                initializeConversations(document.querySelector('.chat-history'));
            }
        }
    }
}

// تأثير الكتابة
async function typewriterEffect(sourceElement, targetElement, chatContainer) {
    const processNode = async (node, target) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const textNode = document.createTextNode('');
            target.appendChild(textNode);

            for (let i = 0; i < text.length; i++) {
                textNode.textContent += text[i];
                if (text[i] === ' ' || text[i] === '.' || text[i] === '،' ||
                    text[i] === '!' || text[i] === '؟' || text[i] === ':' ||
                    text[i] === '(' || text[i] === ')') {
                    continue;
                }
                if (/[\u0600-\u06FF]/.test(text[i]) || /[a-zA-Z]/.test(text[i])) {
                    await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
                } else {
                    await new Promise(resolve => setTimeout(resolve, TYPING_SPEED * 2));
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const newElement = document.createElement(node.tagName);
            Array.from(node.attributes).forEach(attr => {
                newElement.setAttribute(attr.name, attr.value);
            });
            target.appendChild(newElement);
            for (const child of node.childNodes) {
                await processNode(child, newElement);
            }
            if (node.tagName === 'PRE' || node.tagName === 'CODE') {
                newElement.innerHTML = node.innerHTML;
            }
        }
    };

    for (const child of sourceElement.childNodes) {
        await processNode(child, targetElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// تحسين كتل الكود باستخدام flex
function enhanceCodeBlock(block) {
    const pre = block.parentNode;
    if (!pre || pre.tagName !== 'PRE' || pre.parentNode.classList.contains('code-container')) return;

    const language = block.className.replace('language-', '').trim() || 'plaintext';
    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-container';
    codeContainer.dataset.language = language;

    const codeHeader = document.createElement('div');
    codeHeader.className = 'code-header';
    codeHeader.innerHTML = `
        <span class="code-language">${language}</span>
        <button class="copy-btn" onclick="window.copyCode(this)" title="نسخ الكود">
            <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="copy-text">نسخ</span>
        </button>
    `;

    const codeBody = document.createElement('div');
    codeBody.className = 'code-body';

    const lineNumbers = document.createElement('div');
    lineNumbers.className = 'line-numbers';

    const codeContent = document.createElement('div');
    codeContent.className = 'code-content';

    const codeText = block.textContent.trim();
    const lines = codeText.split('\n');

    lines.forEach((line, index) => {
        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-number';
        lineNumber.textContent = index + 1;
        lineNumbers.appendChild(lineNumber);

        const codeLine = document.createElement('span');
        codeLine.className = 'line';
        codeLine.innerHTML = hljs.highlight(line || ' ', { language: language }).value;
        codeContent.appendChild(codeLine);
    });

    codeBody.appendChild(lineNumbers);
    codeBody.appendChild(codeContent);
    codeContainer.appendChild(codeHeader);
    codeContainer.appendChild(codeBody);
    pre.parentNode.replaceChild(codeContainer, pre);
    hljs.initLineNumbersOnLoad();
}

// دالة لإنشاء عارض الصور
function createImageViewer(imageUrl) {
    const viewer = document.createElement('div');
    viewer.className = 'image-viewer';
    viewer.innerHTML = `
        <img src="${imageUrl}" alt="صورة بالحجم الكامل">
        <button class="close-viewer"><i class="fas fa-times"></i></button>
    `;

    viewer.querySelector('.close-viewer').addEventListener('click', () => {
        viewer.classList.remove('active');
        setTimeout(() => viewer.remove(), 300);
    });

    document.body.appendChild(viewer);
    setTimeout(() => viewer.classList.add('active'), 10);
    return viewer;
}

// تهيئة واجهة المستخدم
function initializeUI() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebarCloseButton = document.querySelector('.sidebar-close-btn');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const fileUpload = document.getElementById('fileUpload');
    const filePreviewContainer = document.getElementById('filePreviewContainer');
    const filePreview = document.getElementById('filePreview');
    const removeFileBtn = document.getElementById('removeFile');
    const newChatBtn = document.querySelector('.new-chat-btn');
    const chatHistory = document.querySelector('.chat-history');
    const settingsBtn = document.querySelector('.settings-btn');
    const themeToggle = document.getElementById('themeToggle');

    floatingButton.className = 'floating-button';
    floatingButton.innerHTML = FLOATING_BUTTON_HTML;
    floatingButton.title = 'محادثة جديدة';
    floatingButton.addEventListener('click', createNewConversation);
    document.body.appendChild(floatingButton);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            settings.theme = newTheme;
            localStorage.setItem('settings', JSON.stringify(settings));
            applySettings();
            checkSystemTheme();
            userInteracted = true; // تفاعل المستخدم
        });
    }

    if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
            console.log("New Chat button clicked");
            createNewConversation();
            userInteracted = true;
        });
    }

    if (chatHistory) {
        chatHistory.addEventListener('click', (e) => {
            const chatItem = e.target.closest('.chat-item');
            if (chatItem) {
                if (e.target.closest('.delete-chat-btn')) {
                    const id = chatItem.dataset.id;
                    const confirmDelete = confirm('هل أنت متأكد من حذف هذه المحادثة؟');
                    if (!confirmDelete) return;

                    conversations = conversations.filter(c => c.id !== id);
                    localStorage.setItem('conversations', JSON.stringify(conversations));
                    chatItem.classList.add('fade-out');
                    setTimeout(() => initializeConversations(chatHistory), 300);

                    if (currentConversationId === id) {
                        chatMessages.innerHTML = '';
                        currentConversationId = null;
                        localStorage.removeItem('currentConversationId');
                    }

                    showNotification('تم حذف المحادثة', 'success');
                    console.log(`Delete chat button clicked for conversation ${id}`);
                } else {
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    chatItem.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                    loadConversation(chatItem.dataset.id, chatMessages);
                    console.log(`Chat item clicked for conversation ${chatItem.dataset.id}`);
                    userInteracted = true;
                }
            }
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            console.log("Settings button clicked");
            const modal = createSettingsModal();
            document.body.appendChild(modal);

            const saveBtn = modal.querySelector('.save-settings-btn');
            const closeBtn = modal.querySelector('.close-settings-btn');

            if (saveBtn && closeBtn) {
                saveBtn.addEventListener('click', () => {
                    settings.theme = document.getElementById('themeSelect').value;
                    settings.fontSize = document.getElementById('fontSizeSelect').value;
                    settings.messageSound = document.getElementById('messageSoundToggle').checked;
                    localStorage.setItem('settings', JSON.stringify(settings));
                    applySettings();
                    modal.classList.add('fade-out');
                    setTimeout(() => modal.remove(), 300);
                    showNotification('تم حفظ الإعدادات', 'success');
                    console.log("Settings saved");
                    userInteracted = true;
                });

                closeBtn.addEventListener('click', () => {
                    modal.classList.add('fade-out');
                    setTimeout(() => modal.remove(), 300);
                    console.log("Settings modal closed");
                    userInteracted = true;
                });
                setTimeout(() => modal.classList.add('active'), 10);
            }
        });
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log("Toggle Sidebar button clicked");
            sidebar.classList.toggle('closed');
            mainContent.classList.toggle('expanded');
            toggleButton.classList.add('rotate');
            setTimeout(() => toggleButton.classList.remove('rotate'), 300);
            userInteracted = true;
        });
    }

    if (sidebarCloseButton) {
        sidebarCloseButton.addEventListener('click', () => {
            console.log("Sidebar Close button clicked");
            sidebar.classList.remove('closed');
            mainContent.classList.remove('expanded');
            userInteracted = true;
        });
    }

    if (messageForm) {
        messageForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const message = messageInput.value.trim();

            if (message || currentFileData) {
                if (!currentConversationId) createNewConversation();

                await addMessage(message, currentFileData, true, false, chatMessages);
                messageInput.value = '';
                const tempFileData = currentFileData;
                currentFileData = null;
                filePreview.innerHTML = '';
                filePreviewContainer.style.display = 'none';
                fileUpload.value = '';

                if (!tempFileData) {
                    const thinkingDiv = document.createElement('div');
                    thinkingDiv.className = 'thinking-animation';
                    thinkingDiv.innerHTML = `
                        <div class="dot-flashing">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <span>جاري التفكير...</span>
                    `;
                    chatMessages.appendChild(thinkingDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;

                    const history = conversations.find(c => c.id === currentConversationId)?.messages || [];
                    const aiResponse = await handleTextMessage(message, history);
                    chatMessages.removeChild(thinkingDiv);
                    await addMessage(aiResponse, null, true, true, chatMessages, false);
                }

                console.log("Message form submitted");
                userInteracted = true;
            }
        });
    }

    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const validTypes = [
                    'image/',
                    'audio/wav', 'audio/mp3', 'audio/aiff', 'audio/aac', 'audio/ogg', 'audio/flac',
                    'application/pdf', 'application/x-javascript', 'text/javascript', 'application/x-python',
                    'text/x-python', 'text/plain', 'text/html', 'text/css', 'text/md', 'text/csv', 'text/xml', 'text/rtf'
                ];
                if (!validTypes.some(type => file.type.startsWith(type) || file.type === type)) {
                    showNotification('يرجى اختيار ملف صالح (صورة، صوت، PDF، نصوص برمجية)', 'error');
                    return;
                }
                if (file.size > 20 * 1024 * 1024) {
                    showNotification('حجم الملف كبير جداً (الحد الأقصى 20 ميجابايت)', 'error');
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    currentFileData = e.target.result;
                    filePreview.innerHTML = '';
                    if (file.type.startsWith('image/')) {
                        const img = document.createElement('img');
                        img.src = currentFileData;
                        filePreview.appendChild(img);
                    } else if (file.type.startsWith('audio/')) {
                        const audio = document.createElement('audio');
                        audio.src = currentFileData;
                        audio.controls = true;
                        filePreview.appendChild(audio);
                    } else if (file.type === 'application/pdf') {
                        const pdfDiv = document.createElement('div');
                        pdfDiv.className = 'pdf-preview';
                        filePreview.appendChild(pdfDiv);
                    } else {
                        const textDiv = document.createElement('div');
                        textDiv.className = 'text-file-preview';
                        textDiv.innerHTML = `<span>معاينة غير متاحة - ${file.type.split('/')[1]}</span>`;
                        filePreview.appendChild(textDiv);
                    }
                    filePreviewContainer.style.display = 'block';
                    filePreview.classList.add('fade-in');
                    setTimeout(() => filePreview.classList.remove('fade-in'), 500);
                    document.querySelector('.file-name').textContent = file.name;
                    userInteracted = true;
                };
                reader.readAsDataURL(file);
                console.log("File uploaded");
            }
        });
    }

    if (removeFileBtn) {
        removeFileBtn.addEventListener('click', () => {
            filePreview.classList.add('fade-out');
            setTimeout(() => {
                currentFileData = null;
                filePreview.innerHTML = '';
                filePreviewContainer.style.display = 'none';
                fileUpload.value = '';
                filePreview.classList.remove('fade-out');
            }, 300);
            console.log("Remove file button clicked");
            userInteracted = true;
        });
    }

    if (messageInput) {
        messageInput.addEventListener('input', () => {
            messageInput.style.height = 'auto';
            messageInput.style.height = messageInput.scrollHeight + 'px';
            userInteracted = true;
        });

        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                messageForm.dispatchEvent(new Event('submit'));
            }
        });
    }
}

// تطبيق الإعدادات
function applySettings() {
    const settings = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
    document.body.setAttribute('data-theme', settings.theme);
    document.body.setAttribute('data-font-size', settings.fontSize);
    document.body.setAttribute('dir', settings.language === 'ar' ? 'rtl' : 'ltr');
    console.log('Settings applied:', settings);
}

// التحقق من سمة النظام
function checkSystemTheme() {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    if (settings.theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (settings.theme === 'system') {
                document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
}

// إعداد اختصارات لوحة المفاتيح
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            document.querySelector('.settings-btn')?.click();
            userInteracted = true;
        }
        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            createNewConversation();
            userInteracted = true;
        }
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.settings-modal, .image-viewer');
            if (modals.length > 0) {
                e.preventDefault();
                modals.forEach(modal => {
                    modal.classList.add('fade-out');
                    setTimeout(() => modal.remove(), 300);
                });
                userInteracted = true;
            }
        }
    });
}

// دالة لإنشاء نافذة الإعدادات
function createSettingsModal() {
    const settings = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
    const modal = document.createElement('div');
    modal.className = 'settings-modal';
    modal.innerHTML = `
        <div class="settings-content">
            <h2><i class="fas fa-cog"></i> الإعدادات</h2>
            <button class="close-settings-btn"><i class="fas fa-times"></i></button>
            <div class="settings-group">
                <label for="themeSelect">السمة</label>
                <select id="themeSelect">
                    <option value="dark" ${settings.theme === 'dark' ? 'selected' : ''}>داكنة</option>
                    <option value="light" ${settings.theme === 'light' ? 'selected' : ''}>فاتحة</option>
                    <option value="system" ${settings.theme === 'system' ? 'selected' : ''}>حسب النظام</option>
                </select>
            </div>
            <div class="settings-group">
                <label for="fontSizeSelect">حجم الخط</label>
                <select id="fontSizeSelect">
                    <option value="small" ${settings.fontSize === 'small' ? 'selected' : ''}>صغير</option>
                    <option value="medium" ${settings.fontSize === 'medium' ? 'selected' : ''}>متوسط</option>
                    <option value="large" ${settings.fontSize === 'large' ? 'selected' : ''}>كبير</option>
                </select>
            </div>
            <div class="settings-group">
                <label>
                    <input type="checkbox" id="messageSoundToggle" ${settings.messageSound ? 'checked' : ''}>
                    تفعيل صوت الرسائل
                </label>
            </div>
            <div class="settings-actions">
                <button class="save-settings-btn">حفظ الإعدادات</button>
            </div>
        </div>
    `;
    return modal;
}

// تهيئة التطبيق
function initApp() {
    if (currentConversationId) {
        const savedConv = conversations.find(c => c.id === currentConversationId);
        if (savedConv && savedConv.messages.length > 0) {
            console.log('Loading saved conversation:', currentConversationId);
            loadConversation(currentConversationId, document.getElementById('chatMessages'));
        }
    }

    initializeConversations(document.querySelector('.chat-history'));
    initializeUI();
    applySettings();
    checkSystemTheme();
    setupKeyboardShortcuts();

    const appLoader = document.createElement('div');
    appLoader.className = 'app-loader';
    appLoader.innerHTML = `
        <div class="loader-content">
            <div class="loading-spinner"></div>
            <h2>جاري تحميل NeuroX...</h2>
        </div>
    `;
    document.body.appendChild(appLoader);

    setTimeout(() => {
        appLoader.classList.add('fade-out');
        setTimeout(() => appLoader.remove(), 500);
    }, 1000);

    console.log("Application initialized");
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    console.log('App initialized successfully');
    setTimeout(() => document.body.classList.add('loaded'), 100);
});