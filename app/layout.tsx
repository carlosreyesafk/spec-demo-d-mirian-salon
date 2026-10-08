export const metadata = {
  title: "D' Mirian Salón | Salón de belleza · Carretera Mella, Santo Domingo",
  description: "D' Mirian Salón — salón de belleza en la Carretera Mella, Santo Domingo. Corte, color, peinados, manicure y paquetes para eventos. Agenda: (809) 788-6848.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
