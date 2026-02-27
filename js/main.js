document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const translations = {
  "es": {
    "doc_title": "Emmanuel A. Arévalo | CV Interactivo",
    "nav_about": "Sobre mí",
    "nav_skills": "Habilidades",
    "nav_experience": "Experiencia",
    "nav_education": "Formación",
    "nav_projects": "Proyectos",
    "nav_github": "GitHub",
    "nav_contact": "Contacto",
    "hero_role": "Desarrollador Junior · Diseñador Digital · Estudiante de Ingeniería en Sistemas",
    "tag_english_b2": "Inglés B2",
    "tag_work": "Ay Compro (2020–Actualidad)",
    "btn_quick_contact": "Contacto rápido",
    "btn_github_activity": "Ver actividad GitHub",
    "btn_download_cv": "Descargar CV (PDF)",
    "btn_copy_email": "Copiar email",
    "btn_copy_phone": "Copiar teléfono",
    "btn_certificates": "Certificados",
    "card_stack_title": "Stack",
    "card_stack_sub": "Web · Diseño · Software",
    "card_stack_desc": "Desarrollo, mantenimiento y optimización de plataformas + creación de contenido y producto.",
    "card_tools_title": "Herramientas",
    "card_tools_list": "VS Code · IntelliJ · Android Studio",
    "card_tools_more": "También: Visual Studio 2022, Docker (básico) y control de versiones con Git/GitHub.",
    "about_title": "Sobre mí",
    "about_p1": "Estudiante de Ingeniería en Sistemas Computacionales con carrera técnica en Diseño Gráfico Digital. Colaboro en Ay Compro como diseñador, fotógrafo y desarrollador web, participando en la optimización continua del sitio junto con el proveedor externo. Apasionado por la tecnología, con habilidades en programación, diseño, mantenimiento de equipos y soluciones creativas en plataformas digitales. Nivel de inglés B2. Busco adquirir más experiencia profesional en desarrollo de software y soluciones tecnológicas.",
    "about_value_title": "Lo que aporto",
    "about_value_1": "Despliegue y mejora continua de funcionalidades web.",
    "about_value_2": "Diseño visual + contenido de producto (foto y publicidad).",
    "about_value_3": "Soporte técnico (Windows/Linux, diagnóstico y mantenimiento).",
    "about_value_4": "Mentalidad “producto”: medir, iterar, optimizar.",
    "skills_title": "Habilidades",
    "skills_tech_title": "Técnicas",
    "chip_java_basic": "Java (básico)",
    "chip_cpp_basic": "C++ (básico)",
    "chip_csharp_basic": "C# (básico)",
    "chip_python_basic": "Python (básico)",
    "chip_htmlcss_solid": "HTML/CSS (sólido)",
    "chip_windows_linux": "Windows & Linux",
    "chip_cmd_diag": "CMD (diagnóstico)",
    "chip_pc_maintenance": "Mantenimiento / limpieza de PC",
    "chip_virtual_machines": "Máquinas virtuales",
    "skills_soft_title": "Blandas",
    "skills_soft_1": "Comunicación efectiva y exposición en público.",
    "skills_soft_2": "Trabajo en equipo y proactividad.",
    "skills_soft_3": "Análisis crítico y resolución de problemas.",
    "skills_soft_4": "Organización y atención al detalle.",
    "skills_lang_title": "Idiomas",
    "skills_lang_name": "Inglés (B2)",
    "skills_lang_level": "Lectura · Conversación · Intermedia",
    "experience_title": "Experiencia",
    "exp_role_title": "Ay Compro — Diseñador y Desarrollador Web",
    "exp_date": "2020 – Actualidad",
    "exp_resp_title": "Responsabilidades",
    "exp_resp_1": "Diseño visual de productos y contenido publicitario.",
    "exp_resp_2": "Fotografía profesional de productos para redes y tienda online.",
    "exp_resp_3": "Desarrollo y mantenimiento de funcionalidades web.",
    "exp_resp_4": "Retroalimentación técnica al proveedor del sitio para mejoras.",
    "exp_focus_title": "Enfoque",
    "exp_focus_p": "Mejora de inyección técnica + criterio visual: mantener el sitio estable y asegurar contenido de producto consistente y de calidad.",
    "education_title": "Formación",
    "edu_degree_title": "Ingeniería en Sistemas Computacionales",
    "edu_degree_school": "Instituto Tecnológico Superior de Jalisco · 2023 – 2027",
    "edu_in_progress": "En curso",
    "edu_design_title": "Diseño Gráfico Digital",
    "edu_design_cert": "Carrera técnica (certificado)",
    "btn_view_certificates": "Ver certificados",
    "projects_title": "Proyectos",
    "proj1_desc": "Proyecto Android base para administración de fábrica (inputs/outputs).",
    "proj_view_github": "Ver en GitHub",
    "proj2_desc": "Portafolio / carta de presentación con estilo UI.",
    "proj_view_repos": "Ver repos",
    "proj3_desc": "Reto y progreso de ejercicios prácticos en Python.",
    "github_title": "GitHub · Línea de aprendizaje",
    "github_recent_repos": "Repos recientes",
    "github_featured_stack": "Stack destacado",
    "contact_title": "Contacto",
    "contact_email_label": "Email:",
    "contact_networks_title": "Redes",
    "btn_back_to_top": "Ir al inicio",
    "toast_copied": "Copiado: ",
    "repos_suffix": "repos",
    "no_description": "Sin descripción.",
    "updated_label": "Actualizado:",
    "open_label": "Abrir",
    "repo_error": "No se pudo cargar (rate limit). Abre tu perfil."
  },
  "en": {
    "doc_title": "Emmanuel A. Arévalo | Interactive CV",
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_experience": "Experience",
    "nav_education": "Education",
    "nav_projects": "Projects",
    "nav_github": "GitHub",
    "nav_contact": "Contact",
    "hero_role": "Junior Developer · Digital Designer · Systems Engineering Student",
    "tag_english_b2": "English B2",
    "tag_work": "Ay Compro (2020–Present)",
    "btn_quick_contact": "Quick contact",
    "btn_github_activity": "View GitHub activity",
    "btn_download_cv": "Download CV (PDF)",
    "btn_copy_email": "Copy email",
    "btn_copy_phone": "Copy phone",
    "btn_certificates": "Certificates",
    "card_stack_title": "Stack",
    "card_stack_sub": "Web · Design · Software",
    "card_stack_desc": "Development, maintenance and optimization of platforms + content and product creation.",
    "card_tools_title": "Tools",
    "card_tools_list": "VS Code · IntelliJ · Android Studio",
    "card_tools_more": "Also: Visual Studio 2022, Docker (basic) and version control with Git/GitHub.",
    "about_title": "About me",
    "about_p1": "Systems Engineering student with a technical program in Digital Graphic Design. I collaborate at Ay Compro as a designer, photographer and web developer, taking part in the continuous optimization of the site alongside an external provider. Passionate about technology, with skills in programming, design, equipment maintenance and creative solutions for digital platforms. English level B2. I’m looking to gain more professional experience in software development and technological solutions.",
    "about_value_title": "What I bring",
    "about_value_1": "Deployment and continuous improvement of web features.",
    "about_value_2": "Visual design + product content (photo and advertising).",
    "about_value_3": "Technical support (Windows/Linux, diagnostics and maintenance).",
    "about_value_4": "Product mindset: measure, iterate, optimize.",
    "skills_title": "Skills",
    "skills_tech_title": "Technical",
    "chip_java_basic": "Java (basic)",
    "chip_cpp_basic": "C++ (basic)",
    "chip_csharp_basic": "C# (basic)",
    "chip_python_basic": "Python (basic)",
    "chip_htmlcss_solid": "HTML/CSS (solid)",
    "chip_windows_linux": "Windows & Linux",
    "chip_cmd_diag": "CMD (diagnostics)",
    "chip_pc_maintenance": "PC maintenance / cleaning",
    "chip_virtual_machines": "Virtual machines",
    "skills_soft_title": "Soft skills",
    "skills_soft_1": "Effective communication and public speaking.",
    "skills_soft_2": "Teamwork and proactivity.",
    "skills_soft_3": "Critical thinking and problem solving.",
    "skills_soft_4": "Organization and attention to detail.",
    "skills_lang_title": "Languages",
    "skills_lang_name": "English (B2)",
    "skills_lang_level": "Reading · Conversation · Intermediate",
    "experience_title": "Experience",
    "exp_role_title": "Ay Compro — Designer & Web Developer",
    "exp_date": "2020 – Present",
    "exp_resp_title": "Responsibilities",
    "exp_resp_1": "Visual design for products and advertising content.",
    "exp_resp_2": "Professional product photography for social media and the online store.",
    "exp_resp_3": "Development and maintenance of web features.",
    "exp_resp_4": "Technical feedback to the site provider for improvements.",
    "exp_focus_title": "Focus",
    "exp_focus_p": "Technical improvements + visual criteria: keep the site stable and ensure consistent, high-quality product content.",
    "education_title": "Education",
    "edu_degree_title": "Systems Engineering",
    "edu_degree_school": "Instituto Tecnológico Superior de Jalisco · 2023 – 2027",
    "edu_in_progress": "In progress",
    "edu_design_title": "Digital Graphic Design",
    "edu_design_cert": "Technical program (certificate)",
    "btn_view_certificates": "View certificates",
    "projects_title": "Projects",
    "proj1_desc": "Base Android project for factory administration (inputs/outputs).",
    "proj_view_github": "View on GitHub",
    "proj2_desc": "Portfolio / cover letter with UI style.",
    "proj_view_repos": "View repos",
    "proj3_desc": "Challenge and progress of practical Python exercises.",
    "github_title": "GitHub · Learning timeline",
    "github_recent_repos": "Recent repos",
    "github_featured_stack": "Featured stack",
    "contact_title": "Contact",
    "contact_email_label": "Email:",
    "contact_networks_title": "Networks",
    "btn_back_to_top": "Back to top",
    "toast_copied": "Copied: ",
    "repos_suffix": "repos",
    "no_description": "No description.",
    "updated_label": "Updated:",
    "open_label": "Open",
    "repo_error": "Could not load (rate limit). Open your profile."
  }
};

  let currentLang = localStorage.getItem("cv_lang") || "es";

  const toggleBtn = document.getElementById("langToggle");
  const langText = document.getElementById("langText");

  function t(key){
    return (translations[currentLang] && translations[currentLang][key]) || key;
  }

  function applyLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;

    if (translations[lang]?.doc_title) document.title = translations[lang].doc_title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = translations[lang]?.[key];
      if (typeof val === "string") el.textContent = val;
    });

    const repoList = document.getElementById("repoList");
    const repoCount = document.getElementById("repoCount");
    if (repoList && repoCount && repoList.getAttribute("aria-busy") === "true") {
      repoCount.textContent = t("loading");
    }

    if (langText) langText.textContent = lang === "es" ? "ENG" : "ESP";
    localStorage.setItem("cv_lang", lang);
  }

  toggleBtn?.addEventListener("click", () => {
    applyLanguage(currentLang === "es" ? "en" : "es");
  });

  applyLanguage(currentLang);

  const root = document.documentElement;
  const btnTheme = document.getElementById("btnTheme");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("cv_theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  syncThemeIcon();

  btnTheme?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("cv_theme", next);
    syncThemeIcon();
  });

  function syncThemeIcon(){
    const tt = root.getAttribute("data-theme") || "dark";
    if (!themeIcon) return;
    themeIcon.textContent = tt === "dark" ? "dark_mode" : "light_mode";
  }

  const btnFocus = document.getElementById("btnFocus");
  const savedFocus = localStorage.getItem("cv_focus") === "1";
  if (savedFocus) root.classList.add("focus");

  btnFocus?.addEventListener("click", () => {
    root.classList.toggle("focus");
    localStorage.setItem("cv_focus", root.classList.contains("focus") ? "1" : "0");
  });

  const btnTop = document.getElementById("btnTop");
  btnTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  wireCopy("btnCopyEmail");
  wireCopy("btnCopyPhone");
  wireCopy("btnCopyEmail2");

  function wireCopy(id){
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", async () => {
      const text = el.getAttribute("data-copy") || "";
      if (!text) return;
      try{
        await navigator.clipboard.writeText(text);
        toast(`${t("toast_copied")}${text}`);
      }catch{
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        toast(`${t("toast_copied")}${text}`);
      }
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  initMagnetic();

  function initMagnetic(){
    document.querySelectorAll(".magnetic").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.06}px, ${y * 0.10}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  loadReposRecent();

  async function loadReposRecent(){
    const username = "EmmanuelArevaloAceves";
    const list = document.getElementById("repoList");
    const count = document.getElementById("repoCount");
    if(!list || !count) return;

    if (list.getAttribute("aria-busy") === "true") {
      count.textContent = t("loading");
    }

    try{
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`);
      if(!res.ok) throw new Error("GitHub rate limit");
      const repos = await res.json();

      count.textContent = `${repos.length} ${t("repos_suffix")}`;
      list.setAttribute("aria-busy", "false");
      list.innerHTML = "";

      repos.forEach(r => {
        const el = document.createElement("div");
        el.className = "repo";
        el.innerHTML = `
          <div>
            <h4>${escapeHTML(r.name)}</h4>
            <p>${escapeHTML(r.description || t("no_description"))}</p>
            <p class="tiny muted">${t("updated_label")} ${formatDate(r.updated_at)}</p>
            <a class="btn tiny ghost magnetic" href="${r.html_url}" target="_blank" rel="noopener noreferrer" style="margin-top:10px;">
              <i class="fa-brands fa-github"></i> ${t("open_label")}
            </a>
          </div>
          <div class="repo-meta">
            <span class="lang">${escapeHTML(r.language || "—")}</span>
          </div>
        `;
        list.appendChild(el);
      });

      initMagnetic();
    }catch(e){
      count.textContent = "—";
      list.setAttribute("aria-busy", "false");
      list.innerHTML = `<div class="muted tiny">${t("repo_error")}</div>`;
    }
  }

  function formatDate(iso){
    try{
      const d = new Date(iso);
      const locale = currentLang === "es" ? "es-MX" : "en-US";
      return d.toLocaleDateString(locale);
    }catch{
      return iso?.slice(0,10) || "";
    }
  }

  function escapeHTML(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  let toastTimer = null;
  function toast(msg){
    const tt = document.getElementById("toast");
    if(!tt) return;
    tt.textContent = msg;
    tt.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => tt.classList.remove("show"), 1800);
  }
});