# Shopify Simulator Documentation

Bienvenido a la documentación del simulador de Shopify. Este proyecto es mi aplicación a la empresa Gradientweb, espero que puedas entender cómo funciona y el por qué utilicé uan metodología u otra.

## **Aclaracioenes**

- En este proyecto mezclé algunos conceptos de la programación con el fin de entender cómo funciona liquid, además, poder mostrar diferentes formas de solucionar un mismo problema. Un ejemplo de esto podría ser el uso de la carpeta "data" para almacenar links de los logos subidos en una nube, en este caso cloudinary. Esto fue lo que primero se me ocurrió para una correcta optimización de las imágenes, así que si ves que algunos casos utilizo links de clodinary, y en otro uso referencias a los archivos ubicados en la carpeta "assets", es por este motivo.

- Es importante aclarar que es la primera vez que utilizo SASS y BEM, a lo largo de mi carrera solo he utilizado tailwind y css puro, por lo que es posible que algunos conceptos no los aplique con la mejor práctica, pero eso no es un problema, ya que sé que con algunos días de uso, y leyendo código con SASS mejor aplicado, puedo mejorar.

- Hasta ahora estoy documentando el proyecto y también subiendo las ramas, me centré tanto en aprender y entender liquid, BEM y SASS que olvidé comitear, un error que empecé a corregir justo al momento de terminar el segundo marquee.

- Si ves que las ilustraciones no tienen una precisión del 100% con los de la imagen, cabe recalcar es que la mayoría las repliqué en Illustrator, y las exporté como SVG, para poder utilizarlas en este proyecto, por lo que es posible que algunos elementos no sean tan precisos como el original a falta de tiempo, este proyecto fue realizado en 3 días.

- No olvides de probar todos los botones, la mayoría tienen funcionalidad.

---

## **Cómo correr el proyecto**

### **Instalación de dependencias**

```bash
npm install
```

### **Ejecución del servidor**

Si estás usando algún IDE, como VSCode te recomiendo abrir dos terminales en paralelo, una al lado de la otra, una para hacer el build de los estilos y la otra para correr el proyecto. Cabe destacar que cada vez que cambies datos de algún JSON, debes volver a correr el proyecto, para que los cambios surtan efecto.

```bash
npm start
```

### **Compilación de estilos y scripts**

```bash
npm run build
```

---

## **Conceptos básicos**


### **Sections**

La carpeta secciones está destinada para almacenar las partes de la página que se renderizan en el index principal (index.liquid), para renderizarlos lo harás de la siguiente forma dentro del body del index.liquid:

```
Ejemplo 1: {% include 'nombre-del-archivo' %}
Ejemplo 2: {% include 'featured-products' %}
```


- El acceso a los datos dinámicos se encuentran en `settings_data.json`.
- Está configurado a través de un esquema definido en `settings_schema.json`.

Ejemplo:

```liquid
<section class="featured-products">
  <h2>{{ settings['featured-products'].settings.heading }}</h2>
</section>
```

### ***Componentes Grandes***

Tenemos los componentes que se están renderizando en los templates, en los snippets tenemos componentes más pequeños y también scripts.

### ***Scripts***

Utilizamos en total dos scripts que contienen la manipulación del scroll y de abrir o cerrar el modal del navbar. Estamos utilizando clases para una mejor organización y reutilización de las funcionalidades.

En el script "card-selector", tenemos la funcionalidad del hover de las cards, para poder mostrar u ocultar las tags de los productos y también de cuando le damos al botón "View All" a medida que vamos scrolleando se muestren las "cards", para ello tenemos un "observer" del scroll, que cuando muestra un porcentaje de scroll se cambian los estilos de las cards ocultas a "shiowing".

En el script "header-change", tenemos la funcionalidad del scroll del navbar, y del modal que se activa con la hamburguesa, además de manipular algunos estilos para evitar que se pueda hacer scroll cuando está abierto, y para activar las funcionalidades de "scroll to" de "All products y Collections".

### **Hojas de estilo**

Las hojas de estilo se encuentran en la carpeta `styles`, dentro de la carpeta `src`, importando la hoja de estilo principal llamada `global.scss` en el archivo app.js.

Dentro del archivo global.scss se encuentran los estilos globales, además de importar el resto de hojas de estilo de la aplicación.

### **Snippets**

Los Snippets son componentes reutilizables, como un card de producto. Puedes incluir un snippet utilizando la etiqueta `{% render %}`:

Ejemplo:

```liquid
<div class="product-list">
  {% for product in products %}
    {% render 'product-card', product: product %}
  {% endfor %}
</div>
```

### **Interacción con objetos**
Liquid permite iterar sobre arrays, como productos o colecciones, en este proyecto agregué un array de imágenes de los métodos de crypto-monedas como forma pago utilizados en la empresa, además de un link a la página oficial de cada una de ellas:

```liquid
<div>
  {% for store in stores %}
     <a href="{{store.coinPage}}" target="_blank" class="header_midContainer_link">
        <img src="{{ store.image }}" height="auto" width="auto" alt="Logo" class="header_midContainer_logo">
    </a>
  {% endfor %}
</div>
```

### **Filtros**
Los filtros se utilizan para manipular la salida de los datos. Algunos filtros comunes:

- `capitalize`: Capitaliza la primera letra.
- `date`: Usa el formato de una fecha.
- `money`: usa los formatos de números como moneda.

Ejemplo:

```liquid
{{ product.price | money }}
{{ product.created_at | date: "%B %d, %Y" }}
```

---

## **Configuración dinámica**

### **Schema (`settings_schema.json`)**

El esquema define los ajustes disponibles para una sección. Mientras es necesario en Shopify, puede no ser necesario en este proyecto.

### **Data (`settings_data.json`)**

Este archivo contiene los valores dinámicos para los ajustes, en este caso use utilizó para poder cambiar muchos textos importantes dentro de la aplicación, tanto de los links como de los textos, además de tener las referencias a las imágenes utilizadas.

---

## **Notas adicionales**

### **Assets**

Todos los productos, banners y colecciones de imágenes se encuentran en la carpeta `/assets`. Consulta los archivos dentro de `data` para las asignaciones.

### **¿Cómo probar la aplicación?**
Visita `http://localhost:3000` en tu navegador para ver la aplicación en acción.

---


