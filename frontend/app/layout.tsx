import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevAI - Gestão de Vendas",
    description: "Plataforma de fluxo duplo para microempreendedores",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
