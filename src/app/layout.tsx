
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA Beauty Studio | Ваша естественная красота",
  description:
    "Профессиональный уход и индивидуальный подход в каждом прикосновении. Почувствуйте гармонию и заботу в нашей студии.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=03b254ef-d951-42d2-85b5-ce1c26b6831f&lang=ru_RU"
          type="text/javascript"
        ></script>
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
