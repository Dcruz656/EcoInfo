// ============================================
// FUNCIONALIDAD PARA TABS (PESTAÑAS)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar todos los tabs
    const tabLinks = document.querySelectorAll('.tab-link');
    
    if (tabLinks.length > 0) {
        tabLinks.forEach(function(tab) {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener el target del tab
                const targetId = this.getAttribute('data-target');
                const targetPanel = document.getElementById(targetId);
                
                if (targetPanel) {
                    // Remover clase 'active' de todos los tabs
                    tabLinks.forEach(function(t) {
                        t.classList.remove('active');
                        t.setAttribute('aria-selected', 'false');
                    });
                    
                    // Remover clase 'active' de todos los paneles
                    const allPanels = document.querySelectorAll('.tab-panel');
                    allPanels.forEach(function(panel) {
                        panel.classList.remove('active');
                    });
                    
                    // Añadir clase 'active' al tab clickeado
                    this.classList.add('active');
                    this.setAttribute('aria-selected', 'true');
                    
                    // Añadir clase 'active' al panel correspondiente
                    targetPanel.classList.add('active');
                    
                    // Scroll suave al contenido
                    targetPanel.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }
            });
        });
    }
    
    // ============================================
    // MENÚ MÓVIL
    // ============================================
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle clase active en el menú
            mobileNav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // ============================================
    // WIZARD DE BÚSQUEDA (buscar.html)
    // ============================================
    
    const wizardBtns = document.querySelectorAll('.wizard-btn');
    const resourceGrid = document.getElementById('resource-grid');
    
    if (wizardBtns.length > 0 && resourceGrid) {
        wizardBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const targetCardId = this.getAttribute('data-target');
                const targetCard = document.getElementById(targetCardId);
                
                if (targetCard) {
                    // Remover highlight de todas las tarjetas
                    resourceGrid.classList.remove('highlight');
                    const allCards = resourceGrid.querySelectorAll('.policy-card');
                    allCards.forEach(function(card) {
                        card.classList.remove('highlight');
                    });
                    
                    // Añadir highlight
                    resourceGrid.classList.add('highlight');
                    targetCard.classList.add('highlight');
                    
                    // Scroll a la tarjeta
                    targetCard.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    // Remover highlight después de 3 segundos
                    setTimeout(function() {
                        resourceGrid.classList.remove('highlight');
                        targetCard.classList.remove('highlight');
                    }, 3000);
                }
            });
        });
    }
    
    // ============================================
    // SLIDER DE NOTICIAS (index.html)
    // ============================================
    
    const newsSlider = document.getElementById('news-slider');
    
    if (newsSlider && typeof Swiper !== 'undefined') {
        new Swiper('#news-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });
    }
    
    // ============================================
    // FORMULARIO DE DIGITALIZACIÓN
    // ============================================
    
    const digitalizationForm = document.getElementById('digitalization-form');
    const successMessage = document.getElementById('success-message-digi');
    
    if (digitalizationForm && successMessage) {
        digitalizationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío
            digitalizationForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset después de 5 segundos
            setTimeout(function() {
                digitalizationForm.reset();
                digitalizationForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // ============================================
    // FORMULARIO DE SUGERENCIA DE COMPRA
    // ============================================
    
    const purchaseForm = document.getElementById('purchase-suggestion-form');
    const purchaseSuccessMsg = document.getElementById('success-message');
    const manualFillLink = document.getElementById('manual-fill-link');
    const manualFields = document.getElementById('manual-form-fields');
    const searchBtn = document.getElementById('search-btn');
    const searchFeedback = document.getElementById('search-feedback');
    
    if (manualFillLink && manualFields) {
        manualFillLink.addEventListener('click', function(e) {
            e.preventDefault();
            manualFields.classList.remove('hidden-fields');
            manualFields.style.display = 'block';
            this.style.display = 'none';
        });
    }
    
    if (searchBtn && searchFeedback && manualFields) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.getElementById('isbn-search');
            if (searchInput && searchInput.value.trim() !== '') {
                searchFeedback.textContent = 'Buscando información...';
                searchFeedback.style.display = 'block';
                
                // Simular búsqueda
                setTimeout(function() {
                    searchFeedback.textContent = 'No se encontró información automática. Por favor, llena el formulario manualmente.';
                    manualFields.classList.remove('hidden-fields');
                    manualFields.style.display = 'block';
                    
                    setTimeout(function() {
                        searchFeedback.style.display = 'none';
                    }, 3000);
                }, 1500);
            }
        });
    }
    
    if (purchaseForm && purchaseSuccessMsg) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío
            purchaseForm.style.display = 'none';
            purchaseSuccessMsg.style.display = 'block';
            
            // Reset después de 5 segundos
            setTimeout(function() {
                purchaseForm.reset();
                purchaseForm.style.display = 'block';
                purchaseSuccessMsg.style.display = 'none';
                if (manualFields) {
                    manualFields.classList.add('hidden-fields');
                    manualFields.style.display = 'none';
                }
                if (manualFillLink) {
                    manualFillLink.style.display = 'inline-flex';
                }
            }, 5000);
        });
    }
    
    // ============================================
    // FILTROS DE BASES DE DATOS (bases-de-datos.html)
    // ============================================
    
    const filterSubject = document.getElementById('filter-subject');
    const filterType = document.getElementById('filter-type');
    const searchInput = document.getElementById('db-search');
    const dbList = document.getElementById('db-list');
    
    if (filterSubject && filterType && searchInput && dbList) {
        const dbItems = dbList.querySelectorAll('.db-item');

        function performFilter() {
            const subjectValue = filterSubject.value;
            const typeValue = filterType.value;
            const searchValue = searchInput.value.toLowerCase();

            dbItems.forEach(function(item) {
                const subjectMatch = (subjectValue === 'all') || item.getAttribute('data-subject') === subjectValue;
                const typeMatch = (typeValue === 'all') || item.getAttribute('data-type') === typeValue;
                const searchMatch = item.textContent.toLowerCase().includes(searchValue);
                
                if (subjectMatch && typeMatch && searchMatch) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        filterSubject.addEventListener('change', performFilter);
        filterType.addEventListener('change', performFilter);
        searchInput.addEventListener('keyup', performFilter);
    }
    
    // ============================================
    // RESTRICCIÓN DE FECHAS - SOLO LUNES A VIERNES
    // ============================================
    
    const fechaSalaInput = document.getElementById('fecha-sala');
    
    if (fechaSalaInput) {
        // Establecer fecha mínima como hoy
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        fechaSalaInput.setAttribute('min', todayStr);
        
        // Validar que solo se seleccionen días entre semana
        fechaSalaInput.addEventListener('input', function() {
            const selectedDate = new Date(this.value + 'T00:00:00');
            const dayOfWeek = selectedDate.getDay();
            
            // 0 = Domingo, 6 = Sábado
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                alert('Solo puedes reservar salas de lunes a viernes. Por favor selecciona otro día.');
                this.value = '';
            }
        });
    }
    
    // ============================================
    // RESERVA DE SALAS (reservar-salas.html)
    // ============================================
    
    const roomFinderForm = document.getElementById('room-finder-form');
    const resultsList = document.getElementById('results-list');
    
    if (roomFinderForm && resultsList) {
        roomFinderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombreUsuario = document.getElementById('nombre-usuario').value;
            const correoUsuario = document.getElementById('correo-usuario').value;
            const biblioteca = document.getElementById('biblioteca-sala').value;
            const fecha = document.getElementById('fecha-sala').value;
            const hora = document.getElementById('hora-sala').value;
            const duracion = document.getElementById('duracion-sala').value;
            
            if (nombreUsuario && correoUsuario && biblioteca && fecha && hora && duracion) {
                // Simular resultados
                resultsList.innerHTML = `
                    <div class="alert-info" style="margin-bottom: 20px;">
                        <strong>Resultados para:</strong> ${biblioteca} - ${fecha} a las ${hora} (${duracion}h)
                    </div>
                    <div class="room-result-card">
                        <h3>Sala Grupal 1 (Capacidad: 6 personas)</h3>
                        <p>Disponible ✅ | Equipamiento: Pizarra, Proyector</p>
                        <button class="btn-primary btn-reservar-sala" 
                                data-sala="Sala Grupal 1" 
                                data-nombre="${nombreUsuario}" 
                                data-correo="${correoUsuario}"
                                data-biblioteca="${biblioteca}"
                                data-fecha="${fecha}"
                                data-hora="${hora}"
                                data-duracion="${duracion}"
                                style="margin-top: 10px;">Reservar</button>
                    </div>
                    <div class="room-result-card" style="margin-top: 15px;">
                        <h3>Sala Grupal 2 (Capacidad: 8 personas)</h3>
                        <p>Disponible ✅ | Equipamiento: Pizarra, TV, Mesa grande</p>
                        <button class="btn-primary btn-reservar-sala" 
                                data-sala="Sala Grupal 2" 
                                data-nombre="${nombreUsuario}" 
                                data-correo="${correoUsuario}"
                                data-biblioteca="${biblioteca}"
                                data-fecha="${fecha}"
                                data-hora="${hora}"
                                data-duracion="${duracion}"
                                style="margin-top: 10px;">Reservar</button>
                    </div>
                `;
                
                // Agregar event listeners a los botones de reserva
                const reservarBtns = resultsList.querySelectorAll('.btn-reservar-sala');
                reservarBtns.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        const sala = this.getAttribute('data-sala');
                        const nombre = this.getAttribute('data-nombre');
                        const correo = this.getAttribute('data-correo');
                        const biblio = this.getAttribute('data-biblioteca');
                        const fechaRes = this.getAttribute('data-fecha');
                        const horaRes = this.getAttribute('data-hora');
                        const duracionRes = this.getAttribute('data-duracion');
                        
                        // Mostrar confirmación
                        resultsList.innerHTML = `
                            <div class="room-result-card" style="background-color: #d4edda; border-color: #c3e6cb; border-top-color: #28a745;">
                                <h3 style="color: #155724; margin-bottom: 20px;">
                                    <i class="fa fa-check-circle" style="margin-right: 10px;"></i>¡Reservación Confirmada!
                                </h3>
                                <p style="margin: 10px 0; color: #155724;"><strong>Usuario:</strong> ${nombre}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Correo:</strong> ${correo}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Sala:</strong> ${sala}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Biblioteca:</strong> ${biblio}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Fecha:</strong> ${fechaRes}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Hora:</strong> ${horaRes}</p>
                                <p style="margin: 10px 0; color: #155724;"><strong>Duración:</strong> ${duracionRes} hora(s)</p>
                                <p style="margin: 20px 0 0 0; font-size: 0.95rem; color: #155724; padding-top: 15px; border-top: 1px solid #c3e6cb;">
                                    📧 Se ha enviado una confirmación al correo: <strong>${correo}</strong><br>
                                    Por favor presenta tu identificación al llegar.
                                </p>
                            </div>
                        `;
                        
                        // Scroll a los resultados
                        resultsList.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    });
                });
            }
        });
    }
    
    // ============================================
    // CHATBOT TRIGGER (referencia.html)
    // ============================================
    
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    
    if (chatbotTrigger) {
        chatbotTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Esta funcionalidad abrirá el chat de referencia. Implementación pendiente.');
        });
    }
    
});

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Función para cerrar alertas
function closeAlert(alertElement) {
    if (alertElement) {
        alertElement.style.display = 'none';
    }
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
/* ASISTENTE VIRTUAL TOWI 2025 – Versión con sugerencias clickeables en el menú */
document.addEventListener('DOMContentLoaded', function () {

  // ===== Crear interfaz del chat =====
  const chatbotHTML = `
    <div class="chatbot-container" id="towi-container">
<div class="towi-label">Pregúntale a Towi</div>      
<div class="chatbot-trigger" id="towi-btn">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712102.png" alt="Towi" width="42">
      </div>
      <div class="chatbot-window" id="towi-chat">
        <div class="chatbot-header">
          <span>Bibliotecario Virtual Towi</span>
          <button id="towi-close">×</button>
        </div>
        <div class="chat-body" id="towi-messages"></div>
        <div class="chat-input">
          <input type="text" id="towi-input" placeholder="Escribe tu mensaje..." autocomplete="off">
          <button id="towi-send">Enviar</button>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  // ===== Elementos =====
  const towiBtn = document.getElementById('towi-btn');
  const towiChat = document.getElementById('towi-chat');
  const towiClose = document.getElementById('towi-close');
  const towiInput = document.getElementById('towi-input');
  const towiSend = document.getElementById('towi-send');
  const chatBody = document.getElementById('towi-messages');

  // ===== Mostrar/Ocultar =====
  towiBtn.addEventListener('click', () => towiChat.classList.toggle('active'));
  towiClose.addEventListener('click', () => towiChat.classList.remove('active'));

  // ===== Contexto =====
  let towiContext = { lastTopic: null, lastInteraction: null };

  // ===== Mostrar mensajes =====
  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.classList.add('msg', sender);
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // ===== Mostrar animación de escritura =====
  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('msg', 'bot', 'typing');
    typingDiv.innerHTML = `<em>Towi está escribiendo<span class="dots">...</span></em>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
  }

  // ===== Añadir sugerencias interactivas =====
  function addSuggestions() {
    const suggestions = document.createElement('div');
    suggestions.className = "towi-suggestions";
    suggestions.innerHTML = `
      <button class="sug">Horarios</button>
      <button class="sug">Préstamos</button>
      <button class="sug">Cursos</button>
      <button class="sug">Bases de datos</button>
      <button class="sug">Asesor Bibliotecario</button>`;
    chatBody.appendChild(suggestions);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Acción al hacer clic
    suggestions.querySelectorAll('.sug').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.innerText;
        addMessage("user", text);
        const typing = showTyping();
        setTimeout(() => {
          typing.remove();
          addMessage("bot", getTowiResponse(text));
        }, 1000);
      });
    });
  }

  // ===== Respuestas =====
  function getTowiResponse(msg) {
    msg = msg.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f!¡¿?.,]/g, "").trim();
    const now = Date.now();
    if (towiContext.lastInteraction && now - towiContext.lastInteraction > 5 * 60 * 1000)
      towiContext.lastTopic = null;
    towiContext.lastInteraction = now;

    // SALUDOS
    if (msg.includes("hola") || msg.includes("buenos dias") || msg.includes("buenas tardes")) {
      towiContext.lastTopic = "saludo";
      return `👋 ¡Hola! Soy <strong>Towi</strong>, tu asistente virtual.  
      ¿Sobre qué tema deseas información? (puedes escribir “menú” o elegir un tema abajo)`;
    }

  // AGRADECIMIENTOS (con sugerencias)
if (msg.includes("gracias") || msg.includes("te agradezco")) {
  setTimeout(() => addSuggestions(), 600);
  return `😊 ¡De nada! Si deseas más información, escribe <strong>“menú”</strong> o selecciona uno de los temas disponibles a continuación.`;
}

    // DESPEDIDA
    if (msg.includes("adios") || msg.includes("hasta luego")) {
      towiContext.lastTopic = null;
      return `👋 ¡Hasta pronto! Recuerda que puedo ayudarte con horarios, préstamos y más.`;
    }

    // ASISTENCIA HUMANA
    if (
      msg.includes("hablar con alguien") ||
      msg.includes("bibliotecario") ||
      msg.includes("persona real") ||
      msg.includes("contacto humano") ||
      msg.includes("atencion humana") ||
      msg.includes("asesoria") ||
      msg.includes("asesor") ||
      msg.includes("ayuda humana") ||
      msg.includes("asistencia")
    ) {
      towiContext.lastTopic = "asesoria";
      return `
      👨‍💼 <strong>Asistencia de un Asesor Bibliotecario:</strong><br>
      Puedes comunicarte directamente con el personal de tu biblioteca para recibir apoyo personalizado.<br><br>
      📧 <strong>Correo:</strong> <a href="mailto:bibliotecas@uacj.mx">bibliotecas@uacj.mx</a><br>
      ☎️ <strong>Teléfono:</strong> (656) 688-2100 ext. 3790<br><br>
      También puedes agendar una cita con un asesor en línea.<br><br>
      <button class="towi-btn-action" onclick="window.open('agendar-cita.html','_blank')">📅 Contactar ahora</button>`;
    }

    // MENÚ
    if (msg.includes("menu") || msg.includes("menú") || msg.includes("ayuda") || msg.includes("temas")) {
      towiContext.lastTopic = "menu";
      setTimeout(addSuggestions, 400);
      return `📘 <strong>Temas con los que puedo ayudarte:</strong><br>
      • 📍 Horarios y ubicaciones<br>
      • 📚 Préstamos y renovaciones<br>
      • 💳 Multas y pagos<br>
      • 📖 Cursos y capacitación<br>
      • 🔐 Bases de datos<br>
      • 👨‍💼 Asistencia de un Asesor Bibliotecario<br><br>
      Puedes escribir una palabra clave o hacer clic en una sugerencia:`;
    }

    // HORARIOS
    if (msg.includes("horario") || msg.includes("ubicacion") || msg.includes("donde")) {
      towiContext.lastTopic = "horario";
      return `<strong>📍 Biblioteca Central Carlos Montemayor (ICSA)</strong><br>
      Lunes a viernes: 7:00 AM - 9:00 PM | Sábado: 10:00 AM - 5:00 PM<br>
      📍 ¿Deseas otro campus? (ICB, CU, Cuauhtémoc, NCG)`;
    }

    // Seguimiento horarios
    if (towiContext.lastTopic === "horario") {
      if (msg.includes("icb")) return `🧬 <strong>Biblioteca Ciencias Biomédicas:</strong> 7:00 AM - 9:00 PM | Sábado: 10:00 AM - 5:00 PM`;
      if (msg.includes("cuauhtemoc")) return `📚 <strong>Biblioteca Cuauhtémoc:</strong> 7:00 AM - 9:00 PM`;
      if (msg.includes("cu")) return `🏛️ <strong>Biblioteca CU:</strong> 8:00 AM - 8:00 PM`;
    }

    // PRÉSTAMOS (versión amable)
    if (msg.includes("prestamo") || msg.includes("libro") || msg.includes("material")) {
      towiContext.lastTopic = "prestamo";
      return `📚 <strong>Servicio de Préstamo:</strong><br><br>
      Las bibliotecas de la UACJ ofrecen distintas modalidades de préstamo para que aproveches al máximo los recursos disponibles:<br><br>
      🔹 <strong>En sala:</strong> consulta libre del material dentro de la biblioteca.<br>
      🔹 <strong>Externo:</strong> lleva hasta 10 materiales por 15 días, con opción de renovación.<br>
      🔹 <strong>Interbibliotecario:</strong> solicita libros de otras bibliotecas UACJ para ampliar tus opciones.<br><br>
      💡 <em>Devuelve tus materiales a tiempo y contribuye al acceso equitativo para todos.</em><br><br>
      📖 Puedes consultar tus préstamos o renovarlos en <a href="https://catalogo.uacj.mx" target="_blank">catalogo.uacj.mx</a>`;
    }

   // MULTAS Y PAGOS (versión ampliada)
if (
  msg.includes("multa") ||
  msg.includes("pago") ||
  msg.includes("pagar") ||
  msg.includes("quiero pagar") ||
  msg.includes("liquidar multa") ||
  msg.includes("pago pendiente")
) {
  towiContext.lastTopic = "multas";
  return `💳 <strong>Pago de Multas:</strong><br><br>
  Si tienes una multa pendiente por retraso en la devolución de materiales, puedes realizar el pago de manera sencilla:<br><br>
  🏛️ <strong>En tu biblioteca:</strong> acércate al área de Curculación o Referencia; el personal te indicará el monto y te ayudará con el proceso.<br><br>
  💡 <em>Si crees que tu multa fue un error o tienes dudas sobre el monto, el personal bibliotecario puede orientarte sin problema.</em>`;
}

    // CURSOS
    if (msg.includes("curso") || msg.includes("capacitacion") || msg.includes("taller")) {
      return `📖 <strong>Cursos y capacitación:</strong><br>
      Ofrecemos talleres sobre el uso del catálogo, bases de datos académicas, gestión de referencias y estrategias de búsqueda.<br><br>
      Consulta el calendario en <a href="cursos-alfin.html">Cursos ALFIN</a> o solicita una sesión personalizada.`;
    }

    // BASES DE DATOS
    if (msg.includes("base") || msg.includes("acceso") || msg.includes("datos")) {
      towiContext.lastTopic = "bases";
      return `🔐 <strong>Bases de Datos Académicas:</strong><br><br>
      Las bibliotecas de la UACJ ofrecen acceso a <strong>EBSCOhost</strong>, <strong>ScienceDirect</strong>, <strong>Scopus</strong>, <strong>SpringerLink</strong> y <strong>IEEE Xplore</strong>.<br><br>
      📚 <strong>Disponibles desde cualquier lugar</strong> con tus credenciales institucionales.<br>
      🔎 Busca artículos, tesis y revistas científicas en todas las áreas del conocimiento.<br><br>
      Más información en <a href="bases-de-datos.html" target="_blank">Bases de datos.</a>`;
    }

    // GENÉRICA
    return `😅 No estoy seguro de entender. Puedes decir “menú” o usar las sugerencias disponibles.`;
  }

  // ===== Enviar mensaje con efecto de escritura =====
  function sendMessage() {
    const text = towiInput.value.trim();
    if (text === "") return;
    addMessage("user", text);
    towiInput.value = "";

    const typingIndicator = showTyping();
    setTimeout(() => {
      typingIndicator.remove();
      const response = getTowiResponse(text);
      addMessage("bot", response);
    }, 1200);
  }

  towiSend.addEventListener("click", sendMessage);
  towiInput.addEventListener("keypress", e => e.key === "Enter" && sendMessage());

  // ===== Bienvenida inicial con sugerencias =====
  setTimeout(() => {
    addMessage("bot", `👋 ¡Hola! Soy <strong>Towi</strong>, el asistente virtual de las Bibliotecas UACJ.<br>
    Puedo ayudarte con distintos servicios. ¿Qué te interesa hoy?`);
    addSuggestions();
  }, 1200);
});
