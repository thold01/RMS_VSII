module.exports = {
  corePlugins: {
    preflight: false, // Tắt preflight để không xung đột với Taiga UI
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderColor: {
        default: 'var(--border-default, #00000033)',
      },
    },
  },
  plugins: [],
  important: true,
}

