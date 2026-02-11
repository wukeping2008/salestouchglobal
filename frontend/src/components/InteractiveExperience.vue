<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref<'coach' | 'nail'>('coach')
const isMobileMode = ref(false)
const chatLog = ref<{role: 'ai' | 'user', content: string}[]>([
  { role: 'ai', content: 'experience.coachGreeting' }
])
const userInput = ref('')
const nailInput = ref('')
const nailResult = ref(false)
const isTyping = ref(false)
const showSignup = ref(false)
const mainSiteUrl = 'https://touch.long-arena.com/'
const isProcessing = ref(false) // Performance: prevent double clicks

// Mobile Tab state
const mobileActiveTab = ref<'coach' | 'nail'>('coach')

// Scripted Choices for better "Journey"
const suggestChoices = ref([
  "I sell AI software to SMBs",
  "I provide corporate consultancy",
  "I'm an independent sales trainer"
])

// Performance: Computed properties
const canSend = computed(() => userInput.value.trim() && !isProcessing.value && !isTyping.value && !showSignup.value)
const canAnalyze = computed(() => nailInput.value.trim() && !isProcessing.value && !isTyping.value && !showSignup.value)

// Auto-scroll to bottom
const chatWindowRef = ref<HTMLElement | null>(null)

const scrollToBottom = async () => {
  await nextTick()
  if (chatWindowRef.value) {
    chatWindowRef.value.scrollTop = chatWindowRef.value.scrollHeight
  }
}

const handleSend = async (content?: string) => {
  // Bug fix: Prevent double clicks and empty messages
  if (isProcessing.value || isTyping.value || showSignup.value) return
  
  const msg = content || userInput.value.trim()
  if (!msg) return
  
  isProcessing.value = true
  chatLog.value.push({ role: 'user', content: msg })
  userInput.value = ''
  suggestChoices.value = []
  
  // UX: Auto-scroll to show new message
  await scrollToBottom()
  
  // Expert logic Simulation with better timing
  isTyping.value = true
  setTimeout(async () => {
    isTyping.value = false
    chatLog.value.push({
      role: 'ai',
      content: 'experience.coachFeedback'
    })
    isProcessing.value = false
    await scrollToBottom()
    
    // Show signup with smoother timing
    setTimeout(() => {
      showSignup.value = true
    }, 1000)
  }, 1500)
}

const handleAnalyze = () => {
  // Bug fix: Validate input before analysis
  if (isProcessing.value || !nailInput.value.trim()) return
  
  isProcessing.value = true
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    nailResult.value = true
    isProcessing.value = false
    
    setTimeout(() => {
      showSignup.value = true
    }, 600)
  }, 1800)
}

// Mobile tab handling
const handleMobileTabChange = (tab: 'coach' | 'nail') => {
  mobileActiveTab.value = tab
}

// Close signup overlay
const closeSignup = () => {
  showSignup.value = false
}
</script>

<template>
  <section class="experience-section" id="experience">
    <div class="premium-container">
      <div class="header-center">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <p class="section-subtitle">{{ t('experience.subtitle') }}</p>
        
        <!-- Mode Switcher -->
        <div class="mode-toggle glass">
          <button @click="isMobileMode = false" :class="{ active: !isMobileMode }">Desktop View</button>
          <button @click="isMobileMode = true" :class="{ active: isMobileMode }">Mobile Simulator</button>
        </div>
      </div>

      <div :class="['demo-wrapper', { 'mobile-layout': isMobileMode }]">
        <!-- Mock Phone Frame in Mobile Mode -->
        <div v-if="isMobileMode" class="phone-frame">
          <div class="phone-header">
            <span class="status">LongArena  Coaching Live</span>
            <div class="camera"></div>
          </div>
          
          <!-- Mobile Tab Switcher -->
          <div class="mobile-tabs">
            <button @click="handleMobileTabChange('coach')" :class="{ active: mobileActiveTab === 'coach' }">Mentor</button>
            <button @click="handleMobileTabChange('nail')" :class="{ active: mobileActiveTab === 'nail' }">Expert</button>
          </div>
          
          <div class="phone-screen glass-panel">
            <!-- Mobile Chat View (Info Flow Style) -->
            <div class="mobile-chat" v-if="mobileActiveTab === 'coach'" ref="chatWindowRef">
              <div v-for="(msg, index) in chatLog" :key="index" :class="['mobile-msg', msg.role]">
                <div class="avatar-sm">
                  <span v-if="msg.role === 'ai'">🤖</span>
                  <span v-else>👤</span>
                </div>
                <div class="bubble-sm">{{ msg.content.startsWith('experience.') ? t(msg.content) : msg.content }}</div>
              </div>
              <div v-if="isTyping" class="mobile-typing">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              </div>
              <div v-if="suggestChoices.length > 0" class="mobile-choices">
                <button v-for="choice in suggestChoices" :key="choice" @click="handleSend(choice)">
                  {{ choice }}
                </button>
              </div>
            </div>
            
            <!-- Mobile Nail View -->
            <div class="mobile-nail" v-else>
              <textarea v-model="nailInput" :placeholder="t('experience.nailPlaceholder')" class="mobile-textarea"></textarea>
              <button @click="handleAnalyze" class="mobile-action-btn" :disabled="!canAnalyze">{{ t('experience.analyzeBtn') }}</button>
              
              <div class="mobile-result" v-if="nailResult">
                <div class="result-header">{{ t('experience.analysisComplete') }}</div>
                <div class="result-score">92</div>
                <p class="result-preview">Review full methodology...</p>
              </div>
              <div class="mobile-scanning" v-if="isTyping">
                <div class="scan-line"></div>
                Analyzing...
              </div>
            </div>
            
            <div class="mobile-input" v-if="mobileActiveTab === 'coach'">
              <input 
                v-model="userInput" 
                @keyup.enter="handleSend()" 
                :placeholder="t('experience.inputPlaceholder')" 
                :disabled="!canSend"
              />
            </div>
          </div>
        </div>

        <!-- Standard Desktop View -->
        <div v-else class="demo-card glass-panel">
          <div class="demo-tabs">
            <button :class="['tab-btn', { active: activeTab === 'coach' }]" @click="activeTab = 'coach'">
               {{ t('experience.tabCoach') }}
            </button>
            <button :class="['tab-btn', { active: activeTab === 'nail' }]" @click="activeTab = 'nail'">
               {{ t('experience.tabNail') }}
            </button>
          </div>

          <div v-if="activeTab === 'coach'" class="interface-body">
            <div class="chat-window" ref="chatWindowRef">
              <div v-for="(msg, index) in chatLog" :key="index" :class="['msg', msg.role]">
                <div class="msg-avatar">
                  <span v-if="msg.role === 'ai'">🤖</span>
                  <span v-else>👤</span>
                </div>
                <div class="msg-bubble">{{ msg.content.startsWith('experience.') ? t(msg.content) : msg.content }}</div>
              </div>
              
              <!-- Quick Choices for scripted path -->
              <div v-if="!isTyping && suggestChoices.length > 0 && !showSignup" class="quick-choices">
                <button 
                  v-for="choice in suggestChoices" 
                  :key="choice" 
                  @click="handleSend(choice)" 
                  class="choice-btn glass"
                  :disabled="isProcessing"
                >
                  {{ choice }}
                </button>
              </div>

              <div v-if="isTyping" class="msg ai typing">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              </div>
            </div>
            <div class="input-area" :class="{ disabled: showSignup || isProcessing }">
              <input 
                v-model="userInput" 
                @keyup.enter="handleSend()" 
                :placeholder="t('experience.inputPlaceholder')" 
                type="text" 
                :disabled="!canSend"
              />
              <button @click="handleSend()" class="send-btn" :disabled="!canSend">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <div v-if="activeTab === 'nail'" class="interface-body">
            <div class="nail-layout">
              <div class="nail-input">
                <textarea 
                  v-model="nailInput" 
                  :placeholder="t('experience.nailPlaceholder')"
                  :disabled="isProcessing || isTyping"
                ></textarea>
                <button @click="handleAnalyze" class="action-btn" :disabled="!canAnalyze">
                  {{ isProcessing ? 'Analyzing...' : t('experience.analyzeBtn') }}
                </button>
              </div>
              <div class="nail-output">
                <div v-if="!nailResult && !isTyping" class="empty-state">
                  {{ t('experience.nailEmptyState') }}
                </div>
                <div v-if="isTyping" class="scanning">
                  <div class="scan-line"></div>
                  Synthesizing Alpha Logic...
                </div>
                <div v-if="nailResult" class="result-card">
                  <h3>{{ t('experience.analysisComplete') }}</h3>
                  <div class="score-row">
                    <div class="score-circle">92</div>
                    <div class="score-meta">
                      <div>Authority: High</div>
                      <div>Closing Logic: Optimized</div>
                    </div>
                  </div>
                  <p class="blur-text">Review full methodology analysis and scaling plan specifically for your persona...</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="showSignup" class="signup-overlay" @click="closeSignup">
            <div class="signup-card" @click.stop>
              <button class="close-btn" @click="closeSignup">×</button>
              <h3>{{ t('experience.signupTitle') }}</h3>
              <p>{{ t('experience.signupDesc') }}</p>
              <div class="signup-form">
                <input type="email" :placeholder="t('experience.emailPlaceholder')" required />
                <a :href="mainSiteUrl" class="cta-button full-width">{{ t('experience.createAccount') }}</a>
              </div>
              <p class="tiny-note">{{ t('experience.freeTrialNote') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section { padding: 4rem 0 6rem; }
.header-center { text-align: center; margin-bottom: 3rem; }

.mode-toggle {
  display: inline-flex;
  padding: 4px;
  margin-top: 1.5rem;
  border-radius: 12px;
}
.mode-toggle button {
  padding: 0.6rem 1.2rem;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s;
}
.mode-toggle button.active { background: var(--primary-gradient); }

.demo-wrapper { position: relative; transition: all 0.5s ease; }
.demo-wrapper.mobile-layout { display: flex; justify-content: center; }

/* Phone Frame */
.phone-frame {
  width: 380px;
  height: 750px;
  background: #000;
  border-radius: 40px;
  border: 8px solid #333;
  padding: 10px;
  position: relative;
  box-shadow: 0 50px 100px rgba(0,0,0,0.8);
  animation: slideIn 0.5s ease;
}
.phone-header {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 0.7rem;
}
.camera { width: 60px; height: 20px; background: #222; border-radius: 10px; margin: 0 10px; }
.phone-screen { height: calc(100% - 40px); border-radius: 30px; overflow: hidden; display: flex; flex-direction: column; }

/* Mobile Tabs */
.mobile-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.mobile-tabs button {
  flex: 1;
  padding: 0.8rem;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.6);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
}
.mobile-tabs button.active {
  color: #88d3ce;
  border-bottom: 2px solid #88d3ce;
  background: rgba(136, 211, 206, 0.05);
}

/* Mobile Chat */
.mobile-chat { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; overflow-y: auto; scroll-behavior: smooth; }
.mobile-msg { display: flex; gap: 0.6rem; max-width: 90%; align-items: flex-end; }
.mobile-msg.user { align-self: flex-end; flex-direction: row-reverse; }
.avatar-sm { width: 30px; height: 30px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
.bubble-sm { background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 15px; font-size: 0.85rem; line-height: 1.4; }
.mobile-msg.user .bubble-sm { background: #6e45e2; }

/* Mobile Typing Indicator */
.mobile-typing {
  display: flex;
  gap: 4px;
  padding: 0.8rem;
  align-items: center;
}
.mobile-typing .dot {
  width: 6px;
  height: 6px;
  background: #88d3ce;
  border-radius: 50%;
  animation: bounce 1s infinite;
}
.mobile-typing .dot:nth-child(2) { animation-delay: 0.2s; }
.mobile-typing .dot:nth-child(3) { animation-delay: 0.4s; }

/* Mobile Choices */
.mobile-choices { display: flex; flex-direction: column; gap: 8px; margin-top: 0.5rem; }
.mobile-choices button { 
  padding: 0.8rem; 
  border: 1px solid rgba(136, 211, 206, 0.3); 
  background: rgba(136, 211, 206, 0.05); 
  color: #88d3ce; 
  border-radius: 10px; 
  cursor: pointer; 
  text-align: left; 
  font-size: 0.8rem;
  transition: all 0.2s;
}
.mobile-choices button:hover {
  background: rgba(136, 211, 206, 0.1);
  border-color: rgba(136, 211, 206, 0.6);
}

/* Mobile Input */
.mobile-input { padding: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }
.mobile-input input { width: 100%; background: #222; border: none; padding: 0.8rem; border-radius: 20px; color: #fff; font-size: 0.9rem; }
.mobile-input input:disabled { opacity: 0.5; cursor: not-allowed; }

/* Mobile Nail View */
.mobile-nail {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.mobile-textarea {
  flex: 1;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 1rem;
  color: #fff;
  resize: none;
  font-size: 0.9rem;
}
.mobile-action-btn {
  padding: 1rem;
  background: #88d3ce;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  color: #000;
  border: none;
  transition: all 0.3s;
}
.mobile-action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Mobile Result */
.mobile-result {
  background: rgba(136, 211, 206, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  animation: fadeIn 0.5s ease;
}
.result-header {
  font-size: 0.9rem;
  color: #88d3ce;
  margin-bottom: 1rem;
}
.result-score {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #88d3ce;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  color: #88d3ce;
  margin: 0 auto 1rem;
}
.result-preview {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
}

/* Mobile Scanning */
.mobile-scanning {
  background: rgba(136, 211, 206, 0.05);
  border: 1px dashed rgba(136, 211, 206, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  color: #88d3ce;
  position: relative;
  overflow: hidden;
}
.mobile-scanning .scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #88d3ce, transparent);
  animation: scan 2s infinite;
}

/* Desktop Styles */
.demo-card { max-width: 900px; margin: 0 auto; min-height: 550px; display: flex; flex-direction: column; overflow: hidden; border-radius: 24px; position: relative;}
.glass-panel { background: rgba(20, 20, 30, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
.demo-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.1); }
.tab-btn { flex: 1; padding: 1.5rem; background: transparent; color: var(--text-muted); border: none; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.tab-btn.active { color: #88d3ce; border-bottom: 3px solid #88d3ce; background: rgba(136, 211, 206, 0.05); }

.interface-body { padding: 2.5rem; flex: 1; display: flex; flex-direction: column; }
.chat-window { 
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  gap: 1.5rem; 
  min-height: 300px; 
  margin-bottom: 1.5rem;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 0.5rem;
}
.msg { display: flex; gap: 1rem; max-width: 80%; }
.msg.user { margin-left: auto; flex-direction: row-reverse; }
.msg-avatar { width: 45px; height: 45px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.msg.ai .msg-avatar { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.msg-bubble { padding: 1rem 1.5rem; border-radius: 18px; line-height: 1.6; background: rgba(255,255,255,0.05); animation: slideIn 0.3s ease; }
.msg.user .msg-bubble { background: #6e45e2; }

.quick-choices { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1rem; }
.choice-btn { 
  padding: 0.7rem 1.2rem; 
  border-radius: 10px; 
  border: 1px solid rgba(136, 211, 206, 0.3); 
  color: #88d3ce; 
  cursor: pointer; 
  transition: all 0.2s; 
  background: rgba(136, 211, 206, 0.05);
  font-size: 0.9rem;
}
.choice-btn:hover:not(:disabled) { 
  background: rgba(136, 211, 206, 0.1); 
  border-color: rgba(136, 211, 206, 0.6);
  transform: translateY(-1px);
}
.choice-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-area { display: flex; gap: 1rem; }
.input-area input { 
  flex: 1; 
  padding: 1.2rem; 
  border-radius: 14px; 
  background: rgba(0,0,0,0.3); 
  border: 1px solid rgba(255,255,255,0.1); 
  color: #fff; 
  transition: all 0.3s;
}
.input-area input:focus {
  outline: none;
  border-color: rgba(136, 211, 206, 0.5);
  box-shadow: 0 0 0 3px rgba(136, 211, 206, 0.1);
}
.input-area input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.input-area.disabled { opacity: 0.5; pointer-events: none; }
.send-btn { 
  padding: 0 2rem; 
  border-radius: 14px; 
  background: #88d3ce; 
  color: #000; 
  border: none; 
  font-weight: 700; 
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(136, 211, 206, 0.3);
}
.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nail-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.nail-input textarea { 
  width: 100%; 
  height: 280px; 
  background: rgba(0,0,0,0.3); 
  border: 1px solid rgba(255,255,255,0.1); 
  border-radius: 14px; 
  padding: 1.2rem; 
  color: #fff; 
  resize: none; 
  margin-bottom: 1rem;
  transition: all 0.3s;
}
.nail-input textarea:focus {
  outline: none;
  border-color: rgba(136, 211, 206, 0.5);
  box-shadow: 0 0 0 3px rgba(136, 211, 206, 0.1);
}
.nail-input textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.action-btn { 
  width: 100%; 
  padding: 1.2rem; 
  background: #88d3ce; 
  border-radius: 14px; 
  font-weight: 800; 
  cursor: pointer; 
  color: #000; 
  border: none;
  transition: all 0.3s;
}
.action-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(136, 211, 206, 0.3);
}
.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nail-output { 
  background: rgba(136, 211, 206, 0.02); 
  border-radius: 14px; 
  padding: 2rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  border: 1px dashed rgba(136, 211, 206, 0.2);
  min-height: 280px;
}
.score-circle { 
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
  border: 6px solid #88d3ce; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 2.5rem; 
  font-weight: 900; 
  color: #88d3ce; 
  margin-bottom: 1.5rem;
  animation: scaleIn 0.5s ease;
}

.signup-overlay { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background: rgba(0,0,0,0.9); 
  backdrop-filter: blur(10px); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  z-index: 100; 
  animation: fadeIn 0.3s ease; 
}
.signup-card { 
  background: #1a1a24; 
  padding: 3rem; 
  border-radius: 24px; 
  width: 90%; 
  max-width: 420px; 
  border: 1px solid rgba(255,255,255,0.1); 
  text-align: center;
  position: relative;
  animation: slideUp 0.4s ease;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
.close-btn:hover {
  background: rgba(255,255,255,0.2);
}

/* Animations */
@keyframes slideIn { 
  from { opacity: 0; transform: translateY(30px); } 
  to { opacity: 1; transform: translateY(0); } 
}

@keyframes fadeIn { 
  from { opacity: 0; } 
  to { opacity: 1; } 
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.typing .dot { 
  display: inline-block; 
  width: 8px; 
  height: 8px; 
  background: #88d3ce; 
  border-radius: 50%; 
  margin: 0 4px; 
  animation: bounce 1s infinite; 
}
.typing .dot:nth-child(2) { animation-delay: 0.2s; }
.typing .dot:nth-child(3) { animation-delay: 0.4s; }

.scanning {
  position: relative;
  overflow: hidden;
}
.scanning .scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #88d3ce, transparent);
  animation: scan 2s infinite;
}

/* Performance: CSS transforms */
.choice-btn:hover:not(:disabled),
.send-btn:hover:not(:disabled),
.action-btn:hover:not(:disabled) {
  will-change: transform;
}

/* Scrollbar styling */
.chat-window::-webkit-scrollbar {
  width: 6px;
}
.chat-window::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
}
.chat-window::-webkit-scrollbar-thumb {
  background: rgba(136, 211, 206, 0.3);
  border-radius: 3px;
}
.chat-window::-webkit-scrollbar-thumb:hover {
  background: rgba(136, 211, 206, 0.5);
}

/* Responsive optimizations */
@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 0 4rem;
  }
  
  .demo-card {
    min-height: auto;
  }
  
  .interface-body {
    padding: 1.5rem;
  }
  
  .nail-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .nail-input textarea {
    height: 180px;
  }
}
</style>
