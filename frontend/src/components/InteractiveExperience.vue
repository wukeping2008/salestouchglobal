<script setup lang="ts">
import { ref, watch } from 'vue'
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

// Scripted Choices for better "Journey"
const suggestChoices = ref([
  "I sell AI software to SMBs",
  "I provide corporate consultancy",
  "I'm an independent sales trainer"
])

const handleSend = async (content?: string) => {
  const msg = content || userInput.value.trim()
  if (!msg) return
  
  chatLog.value.push({ role: 'user', content: msg })
  userInput.value = ''
  isTyping.value = true
  suggestChoices.value = []

  // Expert logic Simulation
  setTimeout(() => {
    isTyping.value = false
    chatLog.value.push({ 
      role: 'ai', 
      content: 'experience.coachFeedback' 
    })
    
    setTimeout(() => {
      showSignup.value = true
    }, 1500)
  }, 1200)
}

const handleAnalyze = () => {
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    nailResult.value = true
    setTimeout(() => {
      showSignup.value = true
    }, 800)
  }, 2000)
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
            <span class="status">LongArena • Coaching Live</span>
            <div class="camera"></div>
          </div>
          <div class="phone-screen glass-panel">
            <!-- Mobile Chat View (Info Flow Style) -->
            <div class="mobile-chat" v-if="activeTab === 'coach'">
              <div v-for="(msg, index) in chatLog" :key="index" :class="['mobile-msg', msg.role]">
                <div class="avatar-sm">{{ msg.role === 'ai' ? '🧠' : '👤' }}</div>
                <div class="bubble-sm">{{ msg.content.startsWith('experience.') ? t(msg.content) : msg.content }}</div>
              </div>
              <div v-if="suggestChoices.length > 0" class="mobile-choices">
                <button v-for="choice in suggestChoices" :key="choice" @click="handleSend(choice)">
                  {{ choice }}
                </button>
              </div>
            </div>
            <div class="mobile-input">
              <input v-model="userInput" @keyup.enter="handleSend()" :placeholder="t('experience.inputPlaceholder')" />
            </div>
          </div>
        </div>

        <!-- Standard Desktop View -->
        <div v-else class="demo-card glass-panel">
          <div class="demo-tabs">
            <button :class="['tab-btn', { active: activeTab === 'coach' }]" @click="activeTab = 'coach'">
              🤖 {{ t('experience.tabCoach') }}
            </button>
            <button :class="['tab-btn', { active: activeTab === 'nail' }]" @click="activeTab = 'nail'">
              ⚡ {{ t('experience.tabNail') }}
            </button>
          </div>

          <div v-if="activeTab === 'coach'" class="interface-body">
            <div class="chat-window">
              <div v-for="(msg, index) in chatLog" :key="index" :class="['msg', msg.role]">
                <div class="msg-avatar">{{ msg.role === 'ai' ? '🧠' : '👤' }}</div>
                <div class="msg-bubble">{{ msg.content.startsWith('experience.') ? t(msg.content) : msg.content }}</div>
              </div>
              
              <!-- Quick Choices for scripted path -->
              <div v-if="!isTyping && suggestChoices.length > 0 && !showSignup" class="quick-choices">
                <button v-for="choice in suggestChoices" :key="choice" @click="handleSend(choice)" class="choice-btn glass">
                  {{ choice }}
                </button>
              </div>

              <div v-if="isTyping" class="msg ai typing">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              </div>
            </div>
            <div class="input-area" :class="{ disabled: showSignup }">
              <input v-model="userInput" @keyup.enter="handleSend()" :placeholder="t('experience.inputPlaceholder')" type="text" />
              <button @click="handleSend()" class="send-btn">➤</button>
            </div>
          </div>

          <div v-if="activeTab === 'nail'" class="interface-body">
            <div class="nail-layout">
              <div class="nail-input">
                <textarea v-model="nailInput" :placeholder="t('experience.nailPlaceholder')"></textarea>
                <button @click="handleAnalyze" class="action-btn">{{ t('experience.analyzeBtn') }}</button>
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

          <div v-if="showSignup" class="signup-overlay">
            <div class="signup-card">
              <h3>{{ t('experience.signupTitle') }}</h3>
              <p>{{ t('experience.signupDesc') }}</p>
              <form class="signup-form" @submit.prevent>
                <input type="email" :placeholder="t('experience.emailPlaceholder')" required />
                <button type="submit" class="cta-button full-width">{{ t('experience.createAccount') }}</button>
              </form>
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

.mobile-chat { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; overflow-y: auto; }
.mobile-msg { display: flex; gap: 0.6rem; max-width: 90%; align-items: flex-end; }
.mobile-msg.user { align-self: flex-end; flex-direction: row-reverse; }
.avatar-sm { width: 30px; height: 30px; background: #444; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
.bubble-sm { background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 15px; font-size: 0.85rem; line-height: 1.4; }
.mobile-msg.user .bubble-sm { background: #6e45e2; }

.mobile-choices { display: flex; flex-direction: column; gap: 8px; margin-top: 1rem; }
.mobile-choices button { padding: 0.8rem; border: 1px solid #88d3ce; background: transparent; color: #88d3ce; border-radius: 10px; cursor: pointer; text-align: left; font-size: 0.8rem; }

.mobile-input { padding: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }
.mobile-input input { width: 100%; background: #222; border: none; padding: 0.8rem; border-radius: 20px; color: #fff; font-size: 0.9rem; }

/* Desktop Styles */
.demo-card { max-width: 900px; margin: 0 auto; min-height: 550px; display: flex; flex-direction: column; overflow: hidden; border-radius: 24px; position: relative;}
.glass-panel { background: rgba(20, 20, 30, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
.demo-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.1); }
.tab-btn { flex: 1; padding: 1.5rem; background: transparent; color: var(--text-muted); border: none; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.tab-btn.active { color: #88d3ce; border-bottom: 3px solid #88d3ce; background: rgba(136, 211, 206, 0.05); }

.interface-body { padding: 2.5rem; flex: 1; display: flex; flex-direction: column; }
.chat-window { flex: 1; display: flex; flex-direction: column; gap: 1.5rem; min-height: 300px; margin-bottom: 1.5rem; }
.msg { display: flex; gap: 1rem; max-width: 80%; }
.msg.user { margin-left: auto; flex-direction: row-reverse; }
.msg-avatar { width: 45px; height: 45px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
.msg.ai .msg-avatar { background: var(--primary-gradient); }
.msg-bubble { padding: 1rem 1.5rem; border-radius: 18px; line-height: 1.6; background: rgba(255,255,255,0.05); }
.msg.user .msg-bubble { background: #6e45e2; }

.quick-choices { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1rem; }
.choice-btn { padding: 0.7rem 1.2rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); color: #fff; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.02); }
.choice-btn:hover { background: rgba(136, 211, 206, 0.1); border-color: rgba(136, 211, 206, 0.5); }

.input-area { display: flex; gap: 1rem; }
.input-area input { flex: 1; padding: 1.2rem; border-radius: 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; }
.send-btn { padding: 0 2rem; border-radius: 14px; background: #88d3ce; color: #000; border: none; font-weight: 700; cursor: pointer; }

.nail-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.nail-input textarea { width: 100%; height: 280px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 1.2rem; color: #fff; resize: none; margin-bottom: 1rem; }
.action-btn { width: 100%; padding: 1.2rem; background: #88d3ce; border-radius: 14px; font-weight: 800; cursor: pointer; color: #000; border: none;}

.nail-output { background: rgba(136, 211, 206, 0.02); border-radius: 14px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px dashed rgba(136, 211, 206, 0.2); }
.score-circle { width: 100px; height: 100px; border-radius: 50%; border: 6px solid #88d3ce; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 900; color: #88d3ce; margin-bottom: 1.5rem; }

.signup-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 100; animation: fadeIn 0.3s ease; }
.signup-card { background: #1a1a24; padding: 3rem; border-radius: 24px; width: 90%; max-width: 420px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }

@keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.typing .dot { display: inline-block; width: 8px; height: 8px; background: #88d3ce; border-radius: 50%; margin: 0 4px; animation: bounce 1s infinite; }
</style>
