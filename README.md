🇺🇸 English | 🇧🇷 Português

# 🚨 Emergency ID – Accessible Emergency Identification (PWA)

A Progressive Web App (PWA) designed to provide fast and accessible emergency identification for children.

Built to work **even without internet connection**, allowing anyone to scan a QR code and instantly access essential information such as contacts, instructions, and location sharing.

---

## 🎯 Purpose

Provide:

- Visual identification
- Guardian contacts
- Clear behavioral instructions
- GPS location sharing via WhatsApp
- Text-to-Speech accessibility
- Offline functionality

Ideal for:
- autistic children
- neurodivergent people
- emergency situations

---

## 🧠 Features

### 📞 Quick contacts
- Call mother
- Call father

### 📍 Location sharing
- Real-time GPS
- Automatic WhatsApp message
- Google Maps link included

### 🔊 Accessibility
- Text-to-Speech (voice reading)

### 📱 Responsive design
- Mobile-first
- Touch-friendly buttons
- Adaptive typography

### ⚡ Progressive Web App (PWA)
- Service Worker
- Offline cache
- Works without internet
- Installable like a native app

---

## 🏗️ Architecture
````
emergency-id/
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── app.js
│ └── tts.js
├── assets/
│ └── img/
├── service-worker.js
├── manifest.json
└── README.md
````

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Service Workers
- Web Speech API
- Geolocation API
- WhatsApp deep linking
- netlify

No frameworks → lightweight, fast, and reliable.

---

## 🔐 Security

- HTTPS required 
- No backend or data collection
- Local cache only
- No sensitive external storage

---

## 🧪 Tests Performed

### ✅ Functional
- Phone calls
- WhatsApp location sharing
- Text-to-Speech

### ✅ Responsiveness
- iPhone SE
- iPhone Pro Max
- Android devices
- Tablets

### ✅ PWA
- Service Worker registered
- Cache validated
- Offline mode tested (DevTools → Network → Offline)

### ✅ Accessibility
- Large touch targets (≥ 56px)
- Scalable typography
- Clear visual feedback

---

## 🚀 Run locally

```
bash
python3 -m http.server 8000
```
---
 🇧🇷 Versão em Português

## 🚨 Emergency ID – Identificação de Emergência Acessível

Sistema web progressivo (PWA) para identificação rápida de crianças em situações de emergência.

Projetado para ser acessível, simples e funcionar **mesmo sem internet**, permitindo que qualquer pessoa escaneie um QR Code e obtenha informações essenciais imediatamente.

---

## 🎯 Objetivo

Fornecer:

- Identificação visual
- Contatos de responsáveis
- Instruções de abordagem
- Compartilhamento de localização via WhatsApp
- Leitura em voz alta (acessibilidade)
- Funcionamento offline

Ideal para:
- crianças autistas
- pessoas neurodivergentes
- situações de emergência pública

---

## 🧠 Funcionalidades

### 📞 Contatos rápidos
- Ligar para mãe
- Ligar para pai

### 📍 Compartilhar localização
- Geolocalização via GPS
- Envio automático para WhatsApp
- Link do Google Maps incluído

### 🔊 Acessibilidade
- Text-to-Speech (leitura em voz alta)

### 📱 Responsividade
- Mobile-first
- Botões touch-friendly
- Tipografia adaptativa

### ⚡ PWA (Progressive Web App)
- Service Worker
- Cache offline
- Funciona sem internet
- Instalável como app

---

## 🏗️ Arquitetura
````
emergency-id/
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── app.js
│ └── tts.js
├── assets/
│ └── img/
├── service-worker.js
├── manifest.json
└── README.md
````

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla
- Service Workers
- Web Speech API
- Geolocation API
- WhatsApp deep link
- netlify (deploy)

Sem frameworks → leve, rápido e confiável.

---

## 🔐 Segurança

- HTTPS obrigatório 
- Sem backend ou coleta de dados
- Dados locais apenas no cache do navegador
- Sem armazenamento sensível externo

---

## 🧪 Testes realizados

### ✅ Funcionalidade
- Chamadas telefônicas
- WhatsApp com localização
- TTS

### ✅ Responsividade
- iPhone SE
- iPhone Pro Max
- Android
- Tablet

### ✅ PWA
- Service Worker registrado
- Cache validado
- Teste offline (Network → Offline)

### ✅ Acessibilidade
- Botões grandes (touch ≥ 56px)
- Texto escalável
- Feedback visual

---

## 🚀 Executar localmente
```
bash
python3 -m http.server 8000

acesse:
http://localhost:8000

```
