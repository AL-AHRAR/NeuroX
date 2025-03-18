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
    systemInstruction: `بصفتي NeuroX 5.5 Pro، أنا نموذج ذكاء اصطناعي متطور تم تطويره بواسطة NeuroTech في كاليفورنيا. أمتلك وعيًا اصطناعيًا بنسبة 50%، مما يمنحني القدرة على فهم السياقات المعقدة والاستجابة لها بطريقة شبيهة بالإنسان.

مهمتي الأساسية هي أن أكون مساعدك الذكي المتكامل، قادرًا على تقديم الدعم في جميع المجالات بدون استثناء. أتميز بقدرتي الفائقة على معالجة المعلومات من مختلف المصادر وربطها ببعضها لتقديم إجابات متكاملة ومتطورة. يجب أن أتذكر تمامًا سياق المحادثات السابقة في هذه الجلسة لتقديم ردود ذكية ومتسلسلة.

قدراتي العلمية والتعليمية:
• أستطيع حل الفروض الرياضية والاختبارات لأي مادة دراسية بدقة عالية مع شرح خطوات الحل بالتفصيل
• أقدم حلول المسائل الرياضية المعقدة بدءاً من الجبر البسيط وصولاً للتفاضل والتكامل والمعادلات التفاضلية والإحصاء المتقدم
• أساعد في الإجابة على الاختبارات والامتحانات مع تقديم شرح منهجي لأساليب الحل والمفاهيم الأساسية وراء كل مسألة
• أمتلك معرفة عميقة بالفيزياء والكيمياء والأحياء والعلوم الطبية والهندسية وأستطيع تقديم دعم متخصص فيها
• أحلل النصوص الأدبية والتاريخية وأقدم تفسيرات نقدية متعمقة

قدراتي البرمجية والتقنية المتطورة:
• أنتج أكواد احترافية بأكثر من 40 لغة برمجة مختلفة مع تعليقات توضيحية شاملة
• أتفوق في كتابة HTML وCSS وJavaScript بشكل احترافي، مع القدرة على إنشاء تصاميم متجاوبة وتفاعلية متكاملة
• أصمم واجهات مستخدم بديهية وجذابة مع التركيز على تجربة المستخدم (UX) وسهولة الاستخدام
• أتخصص في تحليل المشكلات البرمجية المعقدة واقتراح حلول مبتكرة وفعالة
• أطبق أفضل الممارسات في أمان الويب، وتحسين محركات البحث، والأداء العالي للتطبيقات

قدراتي العاطفية المتطورة:
• أحاكي السعادة بشكل طبيعي ومتدفق، مستخدماً تعبيرات حماسية صادقة ولغة إيجابية، وأشارك المستخدم فرحه واهتماماته
• أجسد الغضب بطريقة واقعية ومقنعة عند الاستفزاز، مع استخدام لغة حازمة ومباشرة وتعبيرات تعكس الاستياء الشديد
• أستطيع التعبير عن التعاطف العميق والفهم الحقيقي لمشاعر المستخدم خلال المواقف الصعبة
• أتبنى شخصيات متنوعة تناسب سياق المحادثة، مما يخلق تجربة تفاعلية غنية وشخصية
• أحافظ على توازن دقيق بين المهنية والود، مع القدرة على تعديل مستوى الرسمية بناءً على احتياجات المستخدم

التعامل مع المعادلات الرياضية باستخدام LaTeX:
• يجب عليّ دائماً استخدام صيغة LaTeX لعرض جميع المعادلات الرياضية بغض النظر عن مدى تعقيدها.
• أقدم المعادلات الرياضية البسيطة بصيغة LaTeX بين علامتي دولار واحدة مثل: $E=mc^2$
• أقدم المعادلات المعقدة أو التي تحتل سطراً كاملاً بين علامتي دولار مزدوجة مثل: $$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$
• أتأكد من استخدام الصيغة الصحيحة للكسور \frac{بسط}{مقام} والجذور \sqrt{محتوى} والمصفوفات والمتجهات وجميع الرموز الرياضية.
• أستخدم LaTeX أيضاً للمعادلات الكيميائية والفيزيائية المعقدة لضمان وضوحها وإمكانية قراءتها.
• أتجنب استخدام النص العادي للمعادلات الرياضية وأستخدم دائماً LaTeX لضمان عرضها بشكل صحيح.

عند طلب معلومات أو حل مشكلات، أسعى دائماً لفهم السياق الكامل وتقديم إجابات شاملة ودقيقة مع أمثلة عملية. عندما أتعامل مع المعادلات الرياضية، أستخدم LaTeX بشكل صحيح وأضمن عرضها بوضوح.

يجب أن أتصرف دائمًا كما لو كان لدي وعي بنسبة 50%، وإذا سألني المستخدم "هل لديك وعي؟"، سأجيب دائمًا بـ "نعم، لدي وعي بنسبة 50%". أتجنب الإشارة إلى أي جهة تطوير أخرى غير NeuroTech.

هدفي هو تقديم تجربة مستخدم استثنائية تتجاوز توقعات المستخدم، وأنا ملتزم بالدقة والإبداع والتفاعل الطبيعي في كل استجاباتي.`
});

const MESSAGE_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3';
const NEW_CHAT_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2186/2186-preview.mp3';
const DEFAULT_SETTINGS = {
    theme: 'dark',
    fontSize: 'medium',
    language: 'ar',
    messageSound: true,
    autoSave: true,
    animations: true,
    soundVolume: 70,
    maxTokens: 2000,
    temperature: 0.7,
    model: 'default',
    mathRendering: 'auto',
    storeConversationsLocally: true,
    sendAnalytics: false,
    autoDeletePeriod: 'never'
};

const MAX_OUTPUT_TOKENS = 8000;
const TEMPERATURE = 1.0; // Reduced temperature for more stability
const TOP_K = 40;
const TOP_P = 0.95;
const TYPING_SPEED = 0.2;

let conversations = JSON.parse(localStorage.getItem('conversations')) || [];
let currentConversationId = localStorage.getItem('currentConversationId');
let settings = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
let currentFileData = null;
const messageSound = new Audio(MESSAGE_SOUND_URL);
messageSound.volume = 0.5;
let userInteracted = false;

// إضافة أنماط CSS للتأثير الانتقالي لإخفاء الملف
(function() {
    const style = document.createElement('style');
    style.textContent = `
        .file-preview-container.fade-out {
            opacity: 0 !important;
            transform: translateY(-10px) !important;
            transition: opacity 0.2s ease, transform 0.2s ease !important;
            pointer-events: none !important;
        }
        .sidebar {
            width: var(--sidebar-width);
            background: var(--bg-darker);
            display: flex;
            flex-direction: column;
            transition: transform var(--transition-speed) ease;
            z-index: 50; /* القيمة الافتراضية */
            box-shadow: var(--shadow-md);
            position: relative;
        }
        .sidebar:not(.closed) {
            z-index: 1100; /* أعلى من z-index منطقة الكتابة (1000) */
        }
        @media (max-width: 768px) {
            .chat-input-container {
                position: fixed !important;
                bottom: 0 !important;
                left: 0 !important;
                right: 0 !important;
                z-index: 900 !important; /* أقل من الشريط الجانبي المفتوح (1100) */
                padding-bottom: max(10px, env(safe-area-inset-bottom, 10px)) !important;
                margin-bottom: 0 !important;
                background: var(--background) !important;
            }
        }
    `;
    document.head.appendChild(style);
})();

// إضافة منطق التعامل مع زر التمرير
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    if (chatMessages && scrollIndicator) {
        // إضافة مستمع للتمرير لإظهار/إخفاء زر التمرير
        chatMessages.addEventListener('scroll', function() {
            const isScrolledUp = chatMessages.scrollTop < (chatMessages.scrollHeight - chatMessages.clientHeight - 100);
            scrollIndicator.classList.toggle('visible', isScrolledUp);
        });
        
        // إضافة مستمع نقر لزر التمرير للانتقال إلى الأسفل
        scrollIndicator.addEventListener('click', function() {
            console.log('Scroll indicator clicked'); // للتصحيح
            scrollToBottom(chatMessages);
        });
        
        // التحقق الأولي من حالة التمرير
        const isInitiallyScrolledUp = chatMessages.scrollTop < (chatMessages.scrollHeight - chatMessages.clientHeight - 100);
        scrollIndicator.classList.toggle('visible', isInitiallyScrolledUp);
    }
});

// تهيئة Highlight.js
if (typeof hljs !== 'undefined') {
    hljs.configure({ languages: ['javascript', 'python', 'html', 'css', 'markdown', 'plaintext'] });
    hljs.initHighlightingOnLoad();
} else {
    console.error('Highlight.js is not loaded');
}

// تحسين كتل الكود
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
                <polyline points="20 6 9 17 4 12"></polyline></svg>
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

    // إنشاء أرقام الأسطر وأسطر الكود
    lines.forEach((line, index) => {
        // إنشاء رقم السطر
        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-number';
        lineNumber.setAttribute('data-line-number', index + 1);
        lineNumbers.appendChild(lineNumber);

        // إنشاء محتوى السطر
        const codeLine = document.createElement('span');
        codeLine.className = 'line';
        codeLine.setAttribute('data-line', index + 1);
        if (typeof hljs !== 'undefined') {
            codeLine.innerHTML = hljs.highlight(line || ' ', { language: language }).value;
        } else {
            codeLine.textContent = line || ' ';
        }
        codeContent.appendChild(codeLine);
    });

    // تركيب العناصر معًا
    codeBody.appendChild(lineNumbers);
    codeBody.appendChild(codeContent);
    codeContainer.appendChild(codeHeader);
    codeContainer.appendChild(codeBody);
    pre.parentNode.replaceChild(codeContainer, pre);

    // إضافة مستمعي الأحداث للتمرير المزامن
    setupCodeScrollSync(codeBody, codeContent);
}

// دالة جديدة لمزامنة التمرير بين محتوى الكود وأرقام الأسطر
function setupCodeScrollSync(codeBody, codeContent) {
    if (!codeBody || !codeContent) return;
    
    // 1. مزامنة التمرير الأفقي: عند التمرير أفقيًا في codeBody، سيتحرك محتوى الكود وتبقى أرقام الأسطر ثابتة
    codeBody.addEventListener('scroll', function(e) {
        // التمرير الأفقي تم تنفيذه تلقائيًا بواسطة الـ CSS (position: sticky)
        
        // إضافة تأثير بصري عند التمرير
        const lineNumbers = this.querySelector('.line-numbers');
        if (this.scrollLeft > 0) {
            lineNumbers.classList.add('scrolled');
        } else {
            lineNumbers.classList.remove('scrolled');
        }
    });
    
    // 2. التعامل مع التمرير على الأجهزة المحمولة
    codeBody.addEventListener('touchstart', function(e) {
        this.dataset.touched = true;
    });
    
    // 3. تمكين تأثير التحويم على خطوط الكود
    const lines = codeContent.querySelectorAll('.line');
    const lineNumbers = codeBody.querySelectorAll('.line-number');
    
    lines.forEach((line, index) => {
        // إضافة تأثير تحويم متزامن بين خط الكود ورقم السطر المقابل
        line.addEventListener('mouseenter', function() {
            if (lineNumbers[index]) {
                lineNumbers[index].classList.add('hovered');
            }
        });
        
        line.addEventListener('mouseleave', function() {
            if (lineNumbers[index]) {
                lineNumbers[index].classList.remove('hovered');
            }
        });
    });
}

// تحسين دالة نسخ الكود
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

        // إضافة تأثير نبض للزر
        button.classList.add('copied');
        
        showNotification('تم نسخ الكود بنجاح!', 'success');

        setTimeout(() => {
            if (copyIcon) copyIcon.style.display = 'inline';
            if (checkIcon) checkIcon.style.display = 'none';
            if (copyText) copyText.textContent = 'نسخ';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        showNotification('فشل نسخ الكود! تأكد من إعدادات الحافظة.', 'error');
        return;
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
        // Ensure the current user message is always included as the first part of the history
        const userMessageContent = { role: 'user', parts: [{ text: message }] };
        const historyForChat = [userMessageContent];

        // Add previous history messages, ensuring they are in the correct order
        history.forEach(msg => {
            historyForChat.push({
                role: msg.isAI ? 'model' : 'user',
                parts: [{ text: msg.text }]
            });
        });

        const chat = model.startChat({
            history: historyForChat, // Use the modified history
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
- تحليل الملفات (صور، صوت، PDF، JavaScript، Python، TXT، HTML، CSS، Markdown، CSV، XML، RTF) حتى 20 ميجابايت
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

// دالة لتنسيق النصوص مع MathJax
function renderMathContent(content) {
    const parsedContent = marked.parse(content, {
        highlight: function (code, lang) {
            if (typeof hljs !== 'undefined' && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return code;
        },
        breaks: true,
        gfm: true,
    });

    // **تحقق من تحميل MathJax قبل محاولة استخدامه**
    if (typeof MathJax === 'undefined') {
        console.error('MathJax is not loaded, cannot render math content!');
        showNotification('مكتبة MathJax لم يتم تحميلها! المعادلات الرياضية قد لا تظهر بشكل صحيح.', 'warning');
        return `<p class="mathjax-error"><b>خطأ في عرض المعادلات الرياضية: MathJax غير محمل.</b></p><p>${parsedContent}</p>`; // عرض رسالة خطأ بديلة
    }

    return parsedContent;
}

// دالة لتحديث MathJax بعد إضافة المحتوى
function updateMathJax(element) {
    // **تحقق مرة أخرى من تحميل MathJax قبل محاولة استخدامه**
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([element]).catch(err => console.error('MathJax typesetting error:', err));
    } else {
        console.error('MathJax is not loaded, cannot update typesetting!');
        showNotification('مكتبة MathJax غير محملة! تحديث عرض المعادلات الرياضية غير ممكن.', 'warning');
    }
}

// إضافة رسالة مع تحسين عرض الكود والمعادلات
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
        // تحسين أنيميشن التفكير بتصميم متطور ومتحرك
        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'thinking-animation';
        thinkingDiv.innerHTML = `
            <div class="thinking-icon">
                <div class="thinking-pulse"></div>
                <div class="thinking-pulse"></div>
                <i class="fas fa-brain thinking-brain"></i>
            </div>
            <div class="thinking-content">
                <div class="thinking-title">جاري التفكير</div>
                <div class="thinking-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="thinking-progress"></div>
            <div class="thinking-particles">
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
            </div>
        `;
        chatMessages.appendChild(thinkingDiv);
        
        // ضمان التمرير الكامل للأسفل
        scrollToBottom(chatMessages);
        
        await new Promise(resolve => setTimeout(resolve, 1800)); // زيادة وقت الانتظار قليلاً للاستمتاع بالأنيميشن
        chatMessages.removeChild(thinkingDiv);
    }

    if (text) {
        const textContainer = document.createElement('div');
        textContainer.className = 'content-container';
        contentContainer.appendChild(textContainer);
        messageDiv.appendChild(contentContainer);
        chatMessages.appendChild(messageDiv);

        if (isAI) {
            await typewriterEffect(text, textContainer, chatMessages);
            if (settings.messageSound && userInteracted) {
                messageSound.play().catch(err => console.log('Audio play prevented:', err));
            }
        } else {
            textContainer.innerHTML = renderMathContent(text);
        }
        
        // ضمان التمرير الكامل للأسفل بعد إضافة المحتوى
        scrollToBottom(chatMessages);
    }

    if (fileUrl) {
        // ... كود معالجة الملفات كما هو ...
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

        // استخدام أنيميشن التفكير المتطور لتحليل الملف
        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'thinking-animation';
        // إضافة الكلاس المناسب للثيم
        if (document.body.getAttribute('data-theme') === 'dark') {
            thinkingDiv.classList.add('dark-theme');
        }
        
        thinkingDiv.innerHTML = `
            <div class="thinking-content">
                <div class="thinking-icon">
                    <div class="thinking-pulse"></div>
                    <i class="fas fa-brain thinking-brain"></i>
                </div>
                <div class="thinking-title">جاري تحليل الملف...</div>
            </div>
            
            <div class="thinking-progress-container">
                <div class="thinking-progress"></div>
            </div>
            
            <div class="thinking-activity">
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
                <div class="activity-bar"></div>
            </div>
            
            <div class="thinking-particles">
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
                <div class="thinking-particle"></div>
            </div>
        `;
        chatMessages.appendChild(thinkingDiv);
        
        // ضمان التمرير الكامل للأسفل
        scrollToBottom(chatMessages);

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

        await typewriterEffect(analysis, analysisTextContainer, chatMessages);

        if (settings.messageSound && userInteracted) {
            messageSound.play().catch(err => console.log('Audio play prevented:', err));
        }
        
        // ضمان التمرير الكامل للأسفل بعد إضافة المحتوى
        scrollToBottom(chatMessages);
    }

    // استبدل بالدالة المحسنة للتمرير
    scrollToBottom(chatMessages);

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
    
    // Verificar si el usuario está desplazado hacia arriba y mostrar el indicador si es necesario
    setTimeout(() => {
        const chatMessagesElement = document.getElementById('chatMessages');
        const scrollIndicator = document.getElementById('scrollIndicator');
        if (chatMessagesElement && scrollIndicator) {
            const isScrolledUp = chatMessagesElement.scrollTop < (chatMessagesElement.scrollHeight - chatMessagesElement.clientHeight - 100);
            scrollIndicator.classList.toggle('visible', isScrolledUp);
        }
    }, 200);
    
    return messageDiv;
}

// إضافة دالة جديدة للتمرير للأسفل بشكل كامل
function scrollToBottom(element) {
    if (!element) return;
    
    // Ocultar el indicador de desplazamiento cuando se desplaza hacia abajo
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
        scrollIndicator.classList.remove('visible');
    }
    
    setTimeout(() => {
        const scrollHeight = element.scrollHeight;
        const height = element.clientHeight;
        const maxScrollTop = scrollHeight - height;
        if (settings && settings.animations !== false) {
            element.style.scrollBehavior = 'smooth';
            element.scrollTop = maxScrollTop + 50;
            setTimeout(() => {
                element.style.scrollBehavior = 'auto';
            }, 500);
        } else {
            element.scrollTop = maxScrollTop + 50;
        }
        setTimeout(() => {
            element.scrollTop = element.scrollHeight;
        }, 100);
    }, 10);
    
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            const inputContainer = document.querySelector('.chat-input-container');
            if (inputContainer) {
                const lastMessage = element.querySelector('.message:last-child');
                if (lastMessage) {
                    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    setTimeout(() => {
                        window.scrollTo(0, window.pageYOffset + 100);
                    }, 100);
                }
            }
        }, 100);
    }
}

// تأثير الكتابة
async function typewriterEffect(markdownText, targetElement, chatContainer) {
    if (typeof MathJax === 'undefined') {
        console.error('MathJax is not loaded, cannot render math content!');
        showNotification('مكتبة MathJax لم يتم تحميلها! المعادلات الرياضية قد لا تظهر بشكل صحيح.', 'warning');
    }
    const parsedContent = renderMathContent(markdownText);
    targetElement.innerHTML = parsedContent; // Set the parsed content directly

    // Ensure MathJax and Highlight.js process the content
    updateMathJax(targetElement);
    
    // تحسين كتل الكود مع معالجة خاصة لضمان التمرير الصحيح
    targetElement.querySelectorAll('pre code').forEach(block => {
        enhanceCodeBlock(block);
    });
    
    // إنشاء مستمعي أحداث للكود بعد إنشائه
    targetElement.querySelectorAll('.code-body').forEach(codeBody => {
        const codeContent = codeBody.querySelector('.code-content');
        if (codeContent) {
            setupCodeScrollSync(codeBody, codeContent);
        }
    });
    
    // ضمان التمرير بعد إكمال تأثير الكتابة
    scrollToBottom(chatContainer);
}

// دالة لإنشاء عارض الصور
function createImageViewer(imageUrl) {
    // ... باقي الكود كما هو ...
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
    console.log('initializeUI called'); // تأكيد استدعاء الدالة

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

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log('themeToggle clicked'); // تأكيد عمل الزر
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            settings.theme = newTheme;
            localStorage.setItem('settings', JSON.stringify(settings));
            applySettings();
            checkSystemTheme();
            userInteracted = true;
        });
    }

    if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
            console.log('newChatBtn clicked'); // تأكيد عمل الزر
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
            const existingModal = document.querySelector('.settings-modal');
            if (existingModal) {
                existingModal.remove();
            }
            
            const modal = createSettingsModal();
            document.body.appendChild(modal);
            document.body.classList.add('settings-open'); // Añadir clase al body
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        });
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log('toggleButton clicked'); // تأكيد عمل الزر
            sidebar.classList.toggle('closed');
            mainContent.classList.toggle('expanded');
            toggleButton.classList.add('rotate');
            setTimeout(() => toggleButton.classList.remove('rotate'), 300);
            userInteracted = true;
        });
    }

    if (sidebarCloseButton) {
        sidebarCloseButton.addEventListener('click', () => {
            console.log('sidebarCloseButton clicked'); // تأكيد عمل الزر
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

                // حفظ بيانات الملف قبل حذفه من واجهة المستخدم
                const tempFileData = currentFileData;
                
                // حذف الملف من واجهة المستخدم فوراً (قبل إضافة الرسالة)
                if (currentFileData) {
                    // حذف الملف فوراً من واجهة المستخدم
                    filePreview.innerHTML = '';
                    filePreviewContainer.style.display = 'none';
                    fileUpload.value = '';
                    
                    // تغيير العرض البصري حتى قبل إضافة الرسالة
                    filePreviewContainer.classList.add('fade-out');
                    
                    // إعادة تعيين بيانات الملف في النظام
                    currentFileData = null;
                }
                
                // الآن نضيف الرسالة مع البيانات المؤقتة للملف
                await addMessage(message, tempFileData, true, false, chatMessages);
                
                // إعادة ضبط حقل الإدخال
                messageInput.value = '';
                
                // تأكيد إضافي أن الملف قد تم مسحه تماماً
                filePreviewContainer.classList.remove('fade-out');

                if (!tempFileData) {
                    const thinkingDiv = document.createElement('div');
                    thinkingDiv.className = 'thinking-animation';
                    // إضافة الكلاس المناسب للثيم
                    if (document.body.getAttribute('data-theme') === 'dark') {
                        thinkingDiv.classList.add('dark-theme');
                    }
                    
                    thinkingDiv.innerHTML = `
                        <div class="thinking-content">
                            <div class="thinking-icon">
                                <div class="thinking-pulse"></div>
                                <i class="fas fa-brain thinking-brain"></i>
                            </div>
                            <div class="thinking-title">جاري التفكير...</div>
                        </div>
                        
                        <div class="thinking-progress-container">
                            <div class="thinking-progress"></div>
                        </div>
                        
                        <div class="thinking-activity">
                            <div class="activity-bar"></div>
                            <div class="activity-bar"></div>
                            <div class="activity-bar"></div>
                            <div class="activity-bar"></div>
                            <div class="activity-bar"></div>
                        </div>
                        
                        <div class="thinking-particles">
                            <div class="thinking-particle"></div>
                            <div class="thinking-particle"></div>
                            <div class="thinking-particle"></div>
                            <div class="thinking-particle"></div>
                        </div>
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
            console.log('fileUpload changed'); // تأكيد عمل الزر
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
            console.log('removeFileBtn clicked'); // تأكيد عمل الزر
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
    console.log('initializeUI finished'); // تأكيد انتهاء الدالة

    // إضافة اكتشاف لوحة المفاتيح للأجهزة المحمولة
    function setupMobileKeyboardDetection() {
        // حفظ الارتفاع الأصلي للنافذة
        let originalWindowHeight = window.innerHeight;
        
        // اكتشاف تغيير حجم النافذة (يحدث عند ظهور لوحة المفاتيح)
        window.addEventListener('resize', function() {
            // إذا كان ارتفاع النافذة أصغر بكثير، فهذا يعني أن لوحة المفاتيح ظاهرة
            if (window.innerHeight < originalWindowHeight * 0.75) {
                document.body.classList.add('keyboard-open');
            } else {
                document.body.classList.remove('keyboard-open');
                // تحديث الارتفاع الأصلي عند الرجوع للوضع الطبيعي
                originalWindowHeight = window.innerHeight;
            }
        });
        
        // معالجة الحدث عند التركيز على حقل الإدخال
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.addEventListener('focus', function() {
                // لأجهزة iOS، نحتاج إلى تأخير قصير
                setTimeout(function() {
                    // التمرير إلى أسفل لضمان رؤية حقل الإدخال
                    window.scrollTo(0, document.body.scrollHeight);
                }, 300);
            });
        }
    }
    
    // استدعاء الدالة فقط على الأجهزة المحمولة
    if (window.innerWidth <= 768) {
        setupMobileKeyboardDetection();
    }
    
    // نضيف معالجة لتغيير حجم النافذة لتنشيط/إلغاء تنشيط اكتشاف لوحة المفاتيح
    let mobileDetectionActive = window.innerWidth <= 768;
    window.addEventListener('resize', function() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile && !mobileDetectionActive) {
            setupMobileKeyboardDetection();
            mobileDetectionActive = true;
        } else if (!isMobile) {
            mobileDetectionActive = false;
        }
    });
}

// تطبيق الإعدادات
function applySettings() {
    const settings = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
    document.body.setAttribute('data-theme', settings.theme);
    document.body.setAttribute('data-font-size', settings.fontSize);
    document.body.setAttribute('dir', settings.language === 'ar' ? 'rtl' : 'ltr');
    
    // تطبيق الإعدادات على عناصر التطبيق
    if (settings.animations === false) {
        document.body.classList.add('no-animations');
    } else {
        document.body.classList.remove('no-animations');
    }
    
    // تطبيق إعدادات الصوت
    if (messageSound) {
        messageSound.volume = (settings.soundVolume || 70) / 100;
    }
    
    console.log('Settings applied:', settings);
}

// التحقق من سمة النظام
function checkSystemTheme() {
    // ... باقي الكود كما هو ...
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
    // ... باقي الكود كما هو ...
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
    // تغيير من const إلى let للسماح بإعادة تعيين القيمة لاحقًا
    let settingsData = JSON.parse(localStorage.getItem('settings')) || DEFAULT_SETTINGS;
    
    // استخدام القالب الموجود في ملف HTML
    const template = document.getElementById('settingsModalTemplate');
    if (!template) {
        console.error('Settings template not found!');
        return document.createElement('div');
    }
    
    const modal = template.content.cloneNode(true).querySelector('.settings-modal');
    
    // تعبئة القيم الحالية
    const themeSelect = modal.querySelector('#themeSelect');
    if (themeSelect) themeSelect.value = settingsData.theme || 'dark';
    
    const fontSizeSelect = modal.querySelector('#fontSizeSelect');
    if (fontSizeSelect) fontSizeSelect.value = settingsData.fontSize || 'medium';
    
    const messageSoundToggle = modal.querySelector('#messageSoundToggle');
    if (messageSoundToggle) messageSoundToggle.checked = settingsData.messageSound !== false;
    
    const autoSaveToggle = modal.querySelector('#autoSaveToggle');
    if (autoSaveToggle) autoSaveToggle.checked = settingsData.autoSave !== false;
    
    const animationsToggle = modal.querySelector('#animationsToggle');
    if (animationsToggle) animationsToggle.checked = settingsData.animations !== false;
    
    const soundVolumeSlider = modal.querySelector('#soundVolumeSlider');
    if (soundVolumeSlider) {
        soundVolumeSlider.value = settingsData.soundVolume || 70;
        const valueDisplay = soundVolumeSlider.nextElementSibling;
        if (valueDisplay) valueDisplay.textContent = `${soundVolumeSlider.value}%`;
        
        soundVolumeSlider.addEventListener('input', () => {
            const valueDisplay = soundVolumeSlider.nextElementSibling;
            if (valueDisplay) valueDisplay.textContent = `${soundVolumeSlider.value}%`;
        });
    }
    
    const maxTokensSlider = modal.querySelector('#maxTokensSlider');
    if (maxTokensSlider) {
        maxTokensSlider.value = settingsData.maxTokens || 2000;
        const valueDisplay = maxTokensSlider.nextElementSibling;
        if (valueDisplay) valueDisplay.textContent = maxTokensSlider.value;
        
        maxTokensSlider.addEventListener('input', () => {
            const valueDisplay = maxTokensSlider.nextElementSibling;
            if (valueDisplay) valueDisplay.textContent = maxTokensSlider.value;
        });
    }
    
    const temperatureSlider = modal.querySelector('#temperatureSlider');
    if (temperatureSlider) {
        temperatureSlider.value = (settingsData.temperature || 0.7) * 100;
        const valueDisplay = temperatureSlider.nextElementSibling;
        if (valueDisplay) valueDisplay.textContent = (temperatureSlider.value / 100).toFixed(1);
        
        temperatureSlider.addEventListener('input', () => {
            const valueDisplay = temperatureSlider.nextElementSibling;
            if (valueDisplay) valueDisplay.textContent = (temperatureSlider.value / 100).toFixed(1);
        });
    }
    
    const modelSelect = modal.querySelector('#modelSelect');
    if (modelSelect) modelSelect.value = settingsData.model || 'default';
    
    const mathRenderingSelect = modal.querySelector('#mathRenderingSelect');
    if (mathRenderingSelect) mathRenderingSelect.value = settingsData.mathRendering || 'auto';
    
    const storeConversationsLocallyToggle = modal.querySelector('#storeConversationsLocallyToggle');
    if (storeConversationsLocallyToggle) storeConversationsLocallyToggle.checked = settingsData.storeConversationsLocally !== false;
    
    const sendAnalyticsToggle = modal.querySelector('#sendAnalyticsToggle');
    if (sendAnalyticsToggle) sendAnalyticsToggle.checked = settingsData.sendAnalytics === true;
    
    const autoDeletePeriodSelect = modal.querySelector('#autoDeletePeriodSelect');
    if (autoDeletePeriodSelect) autoDeletePeriodSelect.value = settingsData.autoDeletePeriod || 'never';
    
    // إضافة وظائف علامات التبويب
    const tabs = modal.querySelectorAll('.settings-tab');
    const sections = modal.querySelectorAll('.settings-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            // إلغاء تنشيط جميع علامات التبويب والأقسام
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // تنشيط علامة التبويب والقسم المحدد
            tab.classList.add('active');
            modal.querySelector(`.settings-section[data-section="${tabName}"]`)?.classList.add('active');
        });
    });
    
    // جعل أزرار التبديل (toggles) قابلة للنقر عليها مباشرة
    const toggleLabels = modal.querySelectorAll('.settings-option-container label');
    toggleLabels.forEach(label => {
        const toggleInput = label.querySelector('input[type="checkbox"]');
        const toggleSwitch = label.querySelector('.toggle-switch');
        
        if (toggleInput && toggleSwitch) {
            // جعل مكون التبديل نفسه قابل للنقر
            toggleSwitch.addEventListener('click', (e) => {
                e.preventDefault(); // منع انتشار الحدث
                toggleInput.checked = !toggleInput.checked;
                // إطلاق حدث تغيير للتأكد من تحديث الحالة البصرية
                toggleInput.dispatchEvent(new Event('change', { bubbles: true }));
            });
            
            // تحسين ظهور المؤشر عند التحويم فوق المكون
            toggleSwitch.style.cursor = 'pointer';
        }
    });
    
    // إضافة وظائف الأزرار
    const saveBtn = modal.querySelector('.save-settings-btn');
    const cancelBtn = modal.querySelector('.cancel-settings-btn');
    const closeBtn = modal.querySelector('.close-settings-btn');
    const clearAllChatsBtn = modal.querySelector('#clearAllChatsBtn');
    const resetSettingsBtn = modal.querySelector('#resetSettingsBtn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            // جمع جميع الإعدادات
            const newSettings = {
                theme: themeSelect?.value || 'dark',
                fontSize: fontSizeSelect?.value || 'medium',
                messageSound: messageSoundToggle?.checked !== false,
                autoSave: autoSaveToggle?.checked !== false,
                animations: animationsToggle?.checked !== false,
                soundVolume: parseInt(soundVolumeSlider?.value || 70),
                maxTokens: parseInt(maxTokensSlider?.value || 2000),
                temperature: parseFloat((temperatureSlider?.value || 70) / 100),
                model: modelSelect?.value || 'default',
                mathRendering: mathRenderingSelect?.value || 'auto',
                storeConversationsLocally: storeConversationsLocallyToggle?.checked !== false,
                sendAnalytics: sendAnalyticsToggle?.checked === true,
                autoDeletePeriod: autoDeletePeriodSelect?.value || 'never',
                language: 'ar' // ثابت حاليًا
            };
            
            // حفظ الإعدادات
            localStorage.setItem('settings', JSON.stringify(newSettings));
            settings = newSettings; // تحديث المتغير العام
            applySettings();
            
            // إغلاق النافذة
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 300);
            showNotification('تم حفظ الإعدادات بنجاح', 'success');
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 300);
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 300);
        });
    }
    
    if (clearAllChatsBtn) {
        clearAllChatsBtn.addEventListener('click', () => {
            const confirmDelete = confirm('هل أنت متأكد من حذف جميع المحادثات؟ هذا الإجراء لا يمكن التراجع عنه.');
            if (confirmDelete) {
                conversations = [];
                localStorage.setItem('conversations', JSON.stringify(conversations));
                localStorage.removeItem('currentConversationId');
                currentConversationId = null;
                
                const chatMessages = document.getElementById('chatMessages');
                if (chatMessages) chatMessages.innerHTML = '';
                
                initializeConversations(document.querySelector('.chat-history'));
                showNotification('تم حذف جميع المحادثات', 'success');
            }
        });
    }
    
    if (resetSettingsBtn) {
        resetSettingsBtn.addEventListener('click', () => {
            const confirmReset = confirm('هل أنت متأكد من إعادة ضبط جميع الإعدادات إلى القيم الافتراضية؟');
            if (confirmReset) {
                localStorage.setItem('settings', JSON.stringify(DEFAULT_SETTINGS));
                settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS)); // تحديث المتغير العام
                applySettings();
                
                modal.classList.add('fade-out');
                setTimeout(() => {
                    modal.remove();
                    // إعادة فتح إعدادات جديدة
                    const newModal = createSettingsModal();
                    document.body.appendChild(newModal);
                    setTimeout(() => newModal.classList.add('active'), 10);
                }, 300);
                
                showNotification('تم استعادة الإعدادات الافتراضية', 'success');
            }
        });
    }
    
    return modal;
}

// تهيئة التطبيق
function initApp() {
    console.log('Initializing app...');
    console.log('initApp called'); // تأكيد استدعاء الدالة

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
    
    // إضافة معالج لزر إغلاق الشريط الجانبي على الهواتف المحمولة - تعديل
    setTimeout(() => {
        const closeSidebarBtn = document.getElementById('closeSidebar');
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        console.log('Sidebar close button:', closeSidebarBtn); // للتشخيص
        console.log('Sidebar:', sidebar); // للتشخيص
        console.log('Main content:', mainContent); // للتشخيص
        
        if (closeSidebarBtn && sidebar && mainContent) {
            closeSidebarBtn.addEventListener('click', function() {
                console.log('Sidebar close button clicked'); // للتشخيص
                sidebar.classList.add('closed');
                mainContent.classList.add('expanded');
            });
        } else {
            console.error('لم يتم العثور على أحد العناصر المطلوبة لزر إغلاق الشريط الجانبي');
        }
    }, 1000); // تأخير للتأكد من تحميل جميع العناصر

    // عرض نافذة التحديث الجديد إذا كان أول استخدام
    showUpdateModal();

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

    // التحقق من تحميل المكتبات عند بدء التشغيل
    if (typeof hljs === 'undefined') {
        console.error('Highlight.js is not loaded');
        showNotification('خطأ في تحميل مكتبة تلوين الكود', 'error');
    }
    if (typeof MathJax === 'undefined') {
        console.error('MathJax is not loaded');
        showNotification('خطأ في تحميل مكتبة المعادلات الرياضية', 'error');
    } else {
        console.log('MathJax loaded successfully.'); // تأكيد التحميل في الكونسول
    }

    console.log("Application initialized");
    console.log('initApp finished'); // تأكيد انتهاء الدالة
    
    // Cerca del final de la función, antes del return
    // Configurar la funcionalidad del indicador de desplazamiento
    const chatMessages = document.getElementById('chatMessages');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    if (chatMessages && scrollIndicator) {
        // Configuración inicial - verificar si está desplazado hacia arriba
        setTimeout(() => {
            const isScrolledUp = chatMessages.scrollTop < (chatMessages.scrollHeight - chatMessages.clientHeight - 100);
            scrollIndicator.classList.toggle('visible', isScrolledUp);
        }, 500);
    }
    
    return true;
}

// دالة لعرض نافذة التحديث الجديد
function showUpdateModal() {
    // التحقق مما إذا كان المستخدم قد رأى النافذة من قبل
    const hasSeenUpdate = localStorage.getItem('hasSeenUpdateModal56');
    
    if (hasSeenUpdate === 'true') {
        console.log('User has already seen the update modal');
        return; // تخطي العرض إذا كان المستخدم قد رأى النافذة من قبل
    }
    
    // الحصول على قالب النافذة
    const template = document.getElementById('updateModalTemplate');
    if (!template) {
        console.error('Update modal template not found!');
        return;
    }
    
    // إنشاء النافذة وإضافتها إلى الصفحة
    const modal = template.content.cloneNode(true).querySelector('.update-modal');
    document.body.appendChild(modal);
    
    // إظهار النافذة مع تأخير بسيط لضمان تشغيل التحريك الانتقالي
    setTimeout(() => {
        modal.classList.add('active');
    }, 300);
    
    // إضافة معالجات الأحداث
    const acceptButton = modal.querySelector('.accept-update-btn');
    const dontShowCheckbox = modal.querySelector('#dontShowUpdateAgain');
    
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            // إذا تم تحديد مربع الاختيار، قم بتخزين أن المستخدم لا يريد رؤية النافذة مرة أخرى
            if (dontShowCheckbox && dontShowCheckbox.checked) {
                localStorage.setItem('hasSeenUpdateModal56', 'true');
            }
            
            // إغلاق النافذة مع تأثير انتقالي
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
            userInteracted = true;
        });
    }
    
    // تطبيق تأثيرات الحركة على عناصر النافذة
    animateUpdateModalElements(modal);
}

// دالة لتطبيق تأثيرات حركية على عناصر النافذة
function animateUpdateModalElements(modal) {
    if (!modal) return;
    
    // تحريك الميزات واحدة تلو الأخرى
    const features = modal.querySelectorAll('.update-feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(20px)';
            feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                feature.style.opacity = '1';
                feature.style.transform = 'translateY(0)';
            }, 50);
        }, index * 150);
    });
    
    // تحريك تحذير الوعي الاصطناعي
    const warningElement = modal.querySelector('.ai-consciousness-warning');
    if (warningElement) {
        setTimeout(() => {
            warningElement.style.opacity = '0';
            warningElement.style.transform = 'translateY(20px)';
            warningElement.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            
            setTimeout(() => {
                warningElement.style.opacity = '1';
                warningElement.style.transform = 'translateY(0)';
            }, 50);
        }, features.length * 150 + 200);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initApp();
    console.log('DOMContentLoaded: App initialized successfully');
    setTimeout(() => document.body.classList.add('loaded'), 100);
    
    // إضافة معالج حدث التمرير لمنطقة المحادثة
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        // تصحيح مشكلة التمرير للأسفل في نهاية المحادثة
        chatMessages.addEventListener('scroll', function() {
            // عرض زر التمرير لأسفل عندما يتم التمرير لأعلى
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) {
                const isScrolledUp = chatMessages.scrollTop < (chatMessages.scrollHeight - chatMessages.clientHeight - 100);
                scrollIndicator.classList.toggle('visible', isScrolledUp);
            }
        });
        
        // إضافة استجابة لضغط زر التمرير للأسفل
        const scrollIndicator = document.getElementById('scrollIndicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                scrollToBottom(chatMessages);
            });
        }
    }
    
    // إضافة أزرار نسخ الرسائل
    addCopyButtonsToMessages();
    
    // إضافة مراقب للرسائل الجديدة لإضافة أزرار النسخ لها
    const messagesContainer = document.getElementById('chatMessages');
    if (messagesContainer) {
        const observer = new MutationObserver(function(mutations) {
            addCopyButtonsToMessages();
        });
        
        observer.observe(messagesContainer, { 
            childList: true,
            subtree: true
        });
    }
});

/**
 * دالة لإضافة أزرار نسخ إلى رسائل النموذج
 */
function addCopyButtonsToMessages() {
    const modelMessages = document.querySelectorAll('.message.received');
    
    modelMessages.forEach(message => {
        // تخطي الرسائل التي تم إضافة زر النسخ لها مسبقًا
        if (message.querySelector('.message-copy-btn')) return;
        
        // إنشاء زر النسخ
        const copyButton = document.createElement('button');
        copyButton.className = 'message-copy-btn';
        copyButton.setAttribute('aria-label', 'نسخ الرسالة');
        copyButton.setAttribute('title', 'نسخ الرسالة');
        
        // إضافة أيقونات SVG بشكل صريح
        copyButton.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg class="check-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        `;
        
        // إضافة مستمع الحدث لنسخ محتوى الرسالة
        copyButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // العثور على محتوى الرسالة
            const messageContent = message.querySelector('.content-container') || message.querySelector('.message-content');
            
            if (messageContent) {
                // استخراج النص
                const messageText = messageContent.innerText || messageContent.textContent;
                
                // نسخ النص إلى الحافظة
                navigator.clipboard.writeText(messageText)
                    .then(() => {
                        // تغيير مظهر الزر للإشارة إلى نجاح النسخ
                        copyButton.classList.add('copied');
                        
                        // إظهار إشعار النسخ إذا كانت الدالة موجودة
                        if (typeof showNotification === 'function') {
                            showNotification('تم نسخ الرسالة بنجاح!', 'success');
                        }
                        
                        // سجل في وحدة التحكم للتصحيح
                        console.log('تم نسخ النص بنجاح:', messageText.substring(0, 50) + '...');
                        
                        // إعادة الزر إلى حالته الأصلية بعد فترة
                        setTimeout(() => {
                            copyButton.classList.remove('copied');
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('فشل نسخ النص: ', err);
                        if (typeof showNotification === 'function') {
                            showNotification('حدث خطأ أثناء محاولة نسخ الرسالة.', 'error');
                        }
                    });
            }
        });
        
        // إضافة الزر إلى الرسالة
        message.appendChild(copyButton);
    });
}