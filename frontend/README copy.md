# Syncro - Guia de Estilização de Componentes

## 🎨 Paleta de Cores

### Cores Principais

- **Primary (Lime/Verde Neon)**: `#C4FF0D` / `rgb(196, 255, 13)`
- **Background Dark**: `#0A0A0A` / `#000000`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#808080` / `#666666`

### Cores de Estado

- **Success**: `#10B981`
- **Error**: `#EF4444`
- **Warning**: `#F59E0B`
- **Info**: `#3B82F6`

### Tons de Cinza

- **Gray 900**: `#0A0A0A`
- **Gray 800**: `#1A1A1A`
- **Gray 700**: `#262626`
- **Gray 600**: `#404040`
- **Gray 500**: `#666666`

---

## 🔘 Button Component

### Primary Button (Lime/Green)

```
bg-[#C4FF0D]
text-black
font-semibold
rounded-lg
px-6
py-3.5
w-full
hover:bg-[#B8F000]
active:bg-[#A8E000]
transition-all
duration-200
shadow-[0_0_20px_rgba(196,255,13,0.3)]
hover:shadow-[0_0_30px_rgba(196,255,13,0.5)]
```

### Secondary Button (Outline)

```
bg-transparent
border-2
border-gray-700
text-white
font-medium
rounded-lg
px-6
py-3
w-full
hover:bg-gray-800
hover:border-gray-600
active:bg-gray-700
transition-all
duration-200
```

### Text Button (Link Style)

```
bg-transparent
text-[#C4FF0D]
font-medium
hover:text-[#B8F000]
underline-offset-4
hover:underline
transition-colors
duration-200
```

### Button com Loading State

```
bg-[#C4FF0D]
text-black
font-semibold
rounded-lg
px-6
py-3.5
w-full
flex
items-center
justify-center
gap-2
disabled:opacity-50
disabled:cursor-not-allowed
```

---

## 🔗 SocialLink Component

### Google Button

```
bg-transparent
border
border-gray-700
text-white
font-medium
rounded-lg
px-6
py-3.5
w-full
flex
items-center
justify-center
gap-3
hover:bg-gray-800
hover:border-gray-600
transition-all
duration-200
```

**Icon Style:**

```
w-5
h-5
```

**Text:**

```
text-base
font-medium
```

### Microsoft Button

```
bg-transparent
border
border-gray-700
text-white
font-medium
rounded-lg
px-6
py-3.5
w-full
flex
items-center
justify-center
gap-3
hover:bg-gray-800
hover:border-gray-600
transition-all
duration-200
```

---

## 🎯 SocialLinkButtons Component

### Container

```
flex
flex-col
gap-4
w-full
```

### Divider (Opcional - "or" separator)

```
flex
items-center
gap-4
my-2
```

**Line:**

```
flex-1
h-px
bg-gray-700
```

**Text:**

```
text-gray-500
text-sm
font-medium
```

---

## 📝 Input Components

### Text Input (Email/Phone/Password)

```
bg-transparent
border
border-gray-700
text-white
rounded-lg
px-4
py-3.5
w-full
focus:outline-none
focus:border-[#C4FF0D]
focus:ring-1
focus:ring-[#C4FF0D]
placeholder:text-gray-500
transition-all
duration-200
```

### Input Label

```
text-gray-400
text-sm
font-medium
mb-2
block
```

### Input Container

```
flex
flex-col
gap-2
w-full
```

### Input com Ícone (Password)

```
relative
w-full
```

**Input:**

```
bg-transparent
border
border-gray-700
text-white
rounded-lg
pl-4
pr-12
py-3.5
w-full
focus:outline-none
focus:border-[#C4FF0D]
focus:ring-1
focus:ring-[#C4FF0D]
placeholder:text-gray-500
transition-all
duration-200
```

**Icon Button (Show/Hide):**

```
absolute
right-4
top-1/2
-translate-y-1/2
text-[#C4FF0D]
hover:text-[#B8F000]
cursor-pointer
transition-colors
duration-200
```

### Input de Código (6 dígitos)

```
bg-transparent
border
border-gray-700
text-white
text-center
text-2xl
font-bold
rounded-lg
w-14
h-14
focus:outline-none
focus:border-[#C4FF0D]
focus:ring-2
focus:ring-[#C4FF0D]
transition-all
duration-200
```

**Container dos Códigos:**

```
flex
gap-3
justify-center
w-full
```

### Checkbox

```
w-5
h-5
rounded
border-2
border-gray-700
bg-transparent
checked:bg-[#C4FF0D]
checked:border-[#C4FF0D]
focus:ring-2
focus:ring-[#C4FF0D]
focus:ring-offset-2
focus:ring-offset-black
cursor-pointer
transition-all
duration-200
```

### Input de Telefone (com país)

```
flex
gap-2
w-full
```

**Select de País:**

```
bg-transparent
border
border-gray-700
text-white
rounded-lg
px-3
py-3.5
focus:outline-none
focus:border-[#C4FF0D]
focus:ring-1
focus:ring-[#C4FF0D]
w-20
```

**Input Número:**

```
flex-1
bg-transparent
border
border-gray-700
text-white
rounded-lg
px-4
py-3.5
focus:outline-none
focus:border-[#C4FF0D]
focus:ring-1
focus:ring-[#C4FF0D]
placeholder:text-gray-500
```

### Error State Input

```
border-red-500
focus:border-red-500
focus:ring-red-500
```

**Error Message:**

```
text-red-500
text-sm
mt-1
```

---

## 📐 Layout Containers

### Form Container

```
w-full
max-w-md
space-y-6
```

### Page Container (Split Screen)

```
min-h-screen
bg-black
flex
```

**Left Side (Form):**

```
w-full
lg:w-1/2
flex
items-center
justify-center
px-6
py-12
```

**Right Side (Image):**

```
hidden
lg:block
lg:w-1/2
relative
overflow-hidden
```

---

## 🎭 Typography

### Headings

**H1 (Welcome Back / Let's Begin):**

```
text-5xl
font-bold
text-white
mb-2
```

**H2 (Verify Code / Reset Password):**

```
text-4xl
font-bold
text-white
mb-2
```

**H3 (Set Password):**

```
text-3xl
font-bold
text-white
mb-2
```

### Body Text

**Subtitle:**

```
text-gray-400
text-base
mb-8
```

**Small Text:**

```
text-gray-500
text-sm
```

**Link Text:**

```
text-[#C4FF0D]
hover:text-[#B8F000]
font-medium
transition-colors
duration-200
```

**Helper Text:**

```
text-gray-400
text-sm
text-center
```

---

## ✨ Efeitos e Animações

### Hover Effects

```
transition-all
duration-200
ease-in-out
```

### Focus Ring

```
focus:ring-2
focus:ring-[#C4FF0D]
focus:ring-offset-2
focus:ring-offset-black
```

### Loading Spinner

```
animate-spin
w-5
h-5
border-2
border-gray-300
border-t-black
rounded-full
```

### Glow Effect (Primary Button)

```
shadow-[0_0_20px_rgba(196,255,13,0.3)]
hover:shadow-[0_0_30px_rgba(196,255,13,0.5)]
```

---

## 🎨 Decorative Images

### Image Container

```
w-full
h-full
object-cover
rounded-3xl
lg:rounded-none
```

### Image Overlay (se necessário)

```
absolute
inset-0
bg-gradient-to-t
from-black/50
to-transparent
```

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - padrão
- **Tablet**: `sm: 640px`
- **Desktop**: `lg: 1024px`

### Exemplo de uso:

```
w-full
lg:w-1/2
px-4
lg:px-8
```
