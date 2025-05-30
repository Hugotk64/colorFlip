# 🎨 colorFlip  
A real-time color converter built with SvelteKit that allows users to seamlessly convert between HEX and RGB(A) color formats with instant visual feedback.

---

## 📋 Features

- Convert **HEX → RGB/RGBA** with support for:
  - Shorthand HEX (`#abc`, `#abcd`)
  - Full HEX (`#aabbcc`, `#aabbccdd`)
- Convert **RGB(A) → HEX** with optional alpha channel.
- Live preview of the converted color.
- Instant input validation with helpful error messages.
- Responsive, user-friendly interface.

---

## 📁 Project Structure

```plaintext
colorFlip/
│
├── src/
│   ├── lib/
│   │   └── stores.ts          # Shared input/output/previewColor state
│   └── routes/
│       └── (colorConverter)/
│           ├── +layout.svelte     # Shared layout for both converters
│           ├── hex-to-rgb/
│           │   └── +page.svelte   # HEX to RGB logic
│           └── rgb-to-hex/
│               └── +page.svelte   # RGB to HEX logic
│
├── static/                   # Public assets if needed
├── README.md
└── ...  
```

---

## 💡 How It Works

- Input is bound to a shared Svelte store and validated in real-time using regular expressions.
- The input is parsed, converted, and displayed as a formatted color string (`rgb(...)`, `rgba(...)`, or `#hex`).
- The background of the preview updates immediately based on valid color values.

---

## 🧪 Supported Input Examples

### HEX → RGB(A)
| Input         | Output                |
|---------------|------------------------|
| `#fff`        | `rgb(255, 255, 255)`   |
| `#00000080`   | `rgba(0, 0, 0, 0.50)`  |
| `abc`         | `rgb(170, 187, 204)`   |

### RGB(A) → HEX
| Input                    | Output        |
|--------------------------|----------------|
| `rgb(34, 139, 34)`       | `#228B22`      |
| `rgba(255, 0, 0, 0.5)`   | `#FF000080`    |

---

## 🛠️ Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) or `npm`

### Installation

```bash
pnpm install
pnpm dev
Open your browser at `http://localhost:5173/`

## ✅ Usage Tips
- Input field accepts flexible formats like `#abc`, `#123456`, `rgba(0, 0, 0, 0.5)` and more.
- Invalid formats will return a helpful error message.
- A sample placeholder helps guide your input.

## 👨‍💻 Author
Hugo Antonio Castillo Vargas  
Student of Computer Engineering  
UNED - Universidad Estatal a Distancia
