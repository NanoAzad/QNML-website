// app/layout.jsx
export const metadata = {
  title: "Quantum Nano Materials Lab",
  description: "Welcome to Quantum Nano Materials Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
