/* ==========================================================
   TECNOLOGÍAS
========================================================== */

const technologyKnowledge = {
  html: [
    "HTML semántico",
    "Estructuración de documentos web",
    "Formularios y controles",
    "Accesibilidad web básica",
    "Metadatos y SEO básico",
    "Buenas prácticas de estructura",
  ],

  css: [
    "Diseño responsive",
    "Flexbox y Grid",
    "Variables CSS",
    "Selectores y especificidad",
    "Animaciones y transiciones",
    "Media queries",
    "Organización modular de estilos",
  ],

  javascript: [
    "Manipulación del DOM",
    "Eventos e interacción",
    "Funciones y estructuras de control",
    "Programación asíncrona",
    "Promises y async / await",
    "Fetch API",
    "Integración con APIs REST",
  ],

  typescript: [
    "Tipado estático",
    "Interfaces y tipos",
    "Uniones e intersecciones",
    "Clases y programación orientada a objetos",
    "Genéricos",
    "Enums y type aliases",
    "Tipado de funciones",
    "Organización de código mantenible",
  ],

  angular: [
    "Componentes",
    "Standalone Components",
    "Servicios e inyección de dependencias",
    "Routing",
    "Reactive Forms",
    "HttpClient",
    "Integración con APIs REST",
    "Observables y RxJS",
    "Async pipe",
    "Interceptors funcionales",
    "Change Detection y OnPush",
    "Manejo de estados de carga y error",
    "Comunicación entre componentes",
  ],

  bootstrap: [
    "Grid responsive",
    "Utilities",
    "Componentes",
    "Responsive design",
    "Sistema de espaciado",
    "Flex utilities",
    "Breakpoints",
    "Maquetación adaptable",
  ],

  csharp: [
    "Programación orientada a objetos",
    "Interfaces y abstracción",
    "Encapsulamiento y herencia",
    "Genéricos y colecciones",
    "Delegados y expresiones lambda",
    "async / await",
    "Manejo de excepciones",
    "Nullable Reference Types",
    "Principios de código mantenible",
  ],

  dotnet: [
    ".NET y aplicaciones modernas",
    "Inyección de dependencias",
    "Configuración de aplicaciones",
    "Options y configuración tipada",
    "Logging",
    "Middleware",
    "Manejo de dependencias",
    "Organización de soluciones y proyectos",
    "Desarrollo de servicios",
  ],

  aspnet: [
    "Desarrollo de APIs REST",
    "Controllers y routing",
    "Inyección de dependencias",
    "Middleware",
    "Model Binding",
    "DTOs",
    "Validaciones",
    "Manejo global de excepciones",
    "Filtros",
    "Autenticación y autorización",
    "Policies y roles",
    "JWT",
    "CORS",
  ],

  mvc: [
    "Patrón MVC",
    "Separación de responsabilidades",
    "Controllers",
    "Views",
    "Models y ViewModels",
    "Routing",
    "Model Binding",
    "Validaciones",
    "Razor",
  ],

  rest: [
    "Diseño de recursos y endpoints",
    "Métodos HTTP",
    "DTOs",
    "Códigos de respuesta HTTP",
    "Validación de requests",
    "Manejo de errores",
    "Autenticación y autorización",
    "Consumo e integración de APIs",
  ],

  security: [
    "Autenticación y autorización",
    "JWT",
    "Claims",
    "Roles y Policies",
    "Control de acceso basado en permisos",
    "Hashing de contraseñas",
    "CORS",
    "Validación de entrada",
    "Principios básicos de seguridad web",
  ],

  sqlserver: [
    "Diseño de bases de datos relacionales",
    "Modelado de entidades y relaciones",
    "Primary Keys y Foreign Keys",
    "Constraints e integridad referencial",
    "Índices",
    "Stored Procedures",
    "Views",
    "Funciones SQL",
    "Transacciones",
    "Triggers",
    "Normalización",
    "Diseño orientado a integridad de datos",
  ],

  sql: [
    "SELECT, INSERT, UPDATE y DELETE",
    "JOINs",
    "Subconsultas",
    "Agregaciones",
    "GROUP BY y HAVING",
    "CTEs",
    "CASE",
    "Funciones de ventana",
    "Filtros y ordenamiento",
    "Consultas complejas",
    "Manipulación y transformación de datos",
  ],

  efcore: [
    "DbContext",
    "Entidades y configuraciones",
    "Relaciones",
    "Migrations",
    "Tracking y No Tracking",
    "Consultas y persistencia",
    "Configuración del modelo",
  ],

  linq: [
    "Consultas sobre colecciones",
    "Filtrado y proyección",
    "Ordenamiento",
    "Agrupaciones",
    "Joins",
    "Operadores de agregación",
    "Expresiones lambda",
    "Consultas sobre datos",
  ],

  architecture: [
    "Diseño de aplicaciones por capas",
    "Clean Architecture",
    "Domain-Driven Design",
    "Separación de responsabilidades",
    "Inversión de dependencias",
    "Dependency Injection",
    "Diseño orientado a casos de uso",
    "Separación de dominio e infraestructura",
    "Diseño de aplicaciones mantenibles",
  ],

  clean: [
    "Separación de responsabilidades",
    "Domain Layer",
    "Application Layer",
    "Infrastructure Layer",
    "Presentation Layer",
    "Casos de uso",
    "Inversión de dependencias",
    "Regla de dependencia",
    "Independencia del framework",
    "Independencia de infraestructura",
  ],

  layers: [
    "Separación por responsabilidades",
    "Capa de presentación",
    "Capa de aplicación",
    "Capa de dominio",
    "Capa de persistencia",
    "Capa de infraestructura",
    "Comunicación entre capas",
    "Inversión de dependencias",
  ],

  ddd: [
    "Modelado orientado al dominio",
    "Entidades",
    "Objetos de valor",
    "Agregados",
    "Reglas de dominio",
    "Servicios de dominio",
    "Repositorios",
    "Casos de uso",
    "Lenguaje ubicuo",
    "Separación entre dominio e infraestructura",
  ],

  mvvm: [
    "Separación entre vista y lógica",
    "ViewModel",
    "Binding de datos",
    "Separación de responsabilidades",
    "Organización de interfaces",
  ],

  solid: [
    "Responsabilidad única",
    "Abierto / cerrado",
    "Sustitución de Liskov",
    "Segregación de interfaces",
    "Inversión de dependencias",
    "Aplicación de principios en diseño de servicios",
  ],

  patterns: [
    "Repository Pattern",
    "Dependency Injection",
    "DTO Pattern",
    "Service Layer",
    "Strategy Pattern",
    "Separation of Concerns",
    "Dependency Inversion",
    "Patrones orientados a responsabilidades",
  ],

  testing: [
    "Pruebas unitarias",
    "xUnit",
    "Pruebas de lógica de negocio",
    "Organización de casos de prueba",
    "Assertions",
    "Validación de comportamiento",
    "Pruebas de APIs",
  ],

  git: [
    "Control de versiones",
    "Branches",
    "Commits",
    "Merge",
    "Rebase",
    "Resolución de conflictos",
    "Historial de cambios",
    "Trabajo con repositorios remotos",
  ],

  github: [
    "Repositorios",
    "Gestión de código fuente",
    "Branches",
    "Pull Requests",
    "Code Review",
    "Trabajo colaborativo",
    "Gestión de proyectos",
  ],

  postman: [
    "Pruebas de APIs REST",
    "Requests HTTP",
    "Headers y parámetros",
    "Body y respuestas JSON",
    "Variables de entorno",
    "Validación de endpoints",
    "Pruebas de autenticación",
    "Pruebas de diferentes escenarios",
  ],

  visualstudio: [
    "Desarrollo .NET",
    "Debugging",
    "Breakpoints y debugging avanzado",
    "Gestión de soluciones y proyectos",
    "NuGet",
    "Pruebas y diagnóstico",
    "Análisis de errores",
  ],

  vscode: [
    "Desarrollo frontend",
    "TypeScript y JavaScript",
    "Angular",
    "HTML y CSS",
    "Extensiones de desarrollo",
    "Integración con Git",
    "Terminal y herramientas de desarrollo",
  ],

  databaseTools: [
    "SQL Server Management Studio",
    "Diseño y ejecución de scripts SQL",
    "Gestión de bases de datos",
    "Ejecución y depuración de Stored Procedures",
    "Análisis de errores SQL",
  ],
};

const technologyNames = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  angular: "Angular",
  bootstrap: "Bootstrap",

  csharp: "C#",
  dotnet: ".NET",
  aspnet: "ASP.NET Core",
  mvc: "MVC",
  rest: "REST API",

  sqlserver: "SQL Server",
  sql: "SQL",
  efcore: "Entity Framework Core",
  linq: "LINQ",

  clean: "Clean Architecture",
  layers: "Arquitectura en capas",
  ddd: "Domain-Driven Design",
  mvvm: "MVVM",
  solid: "Principios SOLID",
  patterns: "Patrones de diseño",

  git: "Git",
  github: "GitHub",
  postman: "Postman",
  visualstudio: "Visual Studio",
  vscode: "VS Code",
};

export function initTechnologySelector() {
  const groups = document.querySelectorAll(".technology-group");

  if (!groups.length) {
    return;
  }

  groups.forEach((group) => {
    const items = [...group.querySelectorAll(".technology-item")];

    const label = group.querySelector(".technology-detail-label");

    const knowledge = group.querySelector(".technology-knowledge");

    if (!items.length || !label || !knowledge) {
      return;
    }

    const renderTechnology = (index) => {
      const item = items[index];

      const technology = item.dataset.technology;

      const knowledgeItems = technologyKnowledge[technology];

      if (!knowledgeItems) {
        return;
      }

      label.textContent = `Conocimientos en ${technologyNames[technology]}`;

      knowledge.innerHTML = knowledgeItems
        .map((knowledgeItem) => `<li>${knowledgeItem}</li>`)
        .join("");

      items.forEach((currentItem, itemIndex) => {
        const isActive = itemIndex === index;

        currentItem.classList.toggle("active", isActive);

        currentItem.setAttribute("aria-selected", isActive);
      });
    };

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        renderTechnology(index);
      });
    });

    renderTechnology(0);
  });
}
