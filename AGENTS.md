# DevAI - Project Context for AI Agents

Este arquivo serve como guia de contexto para agentes de IA que trabalham no projeto **DevAI**.

## 📑 Documentação de Referência
Todas as definições de produto, técnicas e de interface podem ser encontradas nos seguintes documentos:

- **[PRD (Product Requirements Document)](Docs/prd.md)**: Visão geral do produto, problemas, soluções e funcionalidades principais.
- **[Especificação Técnica](Docs/spec_tech.md)**: Stack tecnológica, arquitetura de referência e diretrizes de desenvolvimento.
- **[Especificação de UI](Docs/spec_ui.md)**: Interface gráfica, fluxos de navegação e mapeamento de entidades.

## 🏗️ Estrutura do Projeto
- **`Docs/`**: Contém todos os artefatos de especificação.
- **`frontend/`**: Diretório principal para a implementação da interface web (Next.js 16+ com App Router), conforme definido na [Especificação Técnica](Docs/spec_tech.md).

## 🚀 Resumo Técnico (Stack Base)
- **Frontend**: Next.js 16+ (App Router).
- **Backend**: NestJS 11+ (API RESTful).
- **Persistência**: PostgreSQL 15+ via Prisma ORM.
- **Infraestrutura**: Contêineres OCI, Supabase, Vercel.

## 🎯 Objetivo do Projeto
Resolver a falta de controle em pedidos e pagamentos para microempreendedores através de uma plataforma de fluxo duplo: uma vitrine digital para clientes e um painel de gestão para o empreendedor.

## ⚠️ Diretrizes Críticas
1. **Padrões de Código**: Seguir princípios SOLID e Clean Architecture.
2. **Segurança**: Autenticação via JWT (Clerk) e validação de permissões por roles (Admin/Customer).
3. **UI/UX**: Utilizar exclusivamente tokens do Design System e componentes reutilizáveis conforme definido na [Especificação de UI](Docs/spec_ui.md).
4. **Tenancy**: Preparado para multi-tenancy (schema separado por tenant), operando inicialmente como mono-tenant.
