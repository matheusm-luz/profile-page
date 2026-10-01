# Portfolio — especificação de design

Design da página de portfolio de Matheus Monteiro da Luz, para implementar neste projeto Angular e publicar no GitHub Pages.

- **Referência visual:** [`portfolio-reference.html`](portfolio-reference.html). É um HTML estático, sem dependências: abra no navegador. **É a fonte da verdade** para layout, espaçamentos e textos.
- **Canvas original (privado):** https://claude.ai/artifact/EQTgxb4kyc2AL7QRkYiKAC

## Objetivo

Página única, em pt-BR, voltada a recrutadores tech. Ela precisa responder em poucos segundos: quem é, o que faz, nível de senioridade, impacto comprovado e como entrar em contato.

## Tokens

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0A0C0F` | Fundo da página |
| `--surface` | `#111419` | Cartões |
| `--surface-2` | `#161A21` | Chips, áreas internas |
| `--surface-blueprint` | `#0E1116` | Fundo do esboço de arquitetura (projetos) |
| `--border` | `#222832` | Bordas de cartões, divisores |
| `--border-soft` | `#1B2028` | Divisores entre seções e header |
| `--border-strong` | `#2E3540` | Botões secundários, bordas tracejadas |
| `--border-dashed` | `#3A4250` | Caixas do esboço, checkboxes do roadmap |
| `--text` | `#E8EBF0` | Texto principal, títulos |
| `--text-2` | `#C9CFD8` | Texto de corpo forte, bullets |
| `--muted` | `#9AA3B2` | Texto secundário |
| `--faint` | `#7C8595` | Pontuação, legendas pequenas |
| `--line-number` | `#4A5260` | Números de linha do `perfil.json`, setas |
| `--accent` | `#6EE7B7` | Destaque (menta): links, números, botões primários |
| `--accent-soft` | `#6EE7B71F` | Fundo de selos, halo do indicador "disponível" |
| `--on-accent` | `#0A0C0F` | Texto sobre botão primário |
| `--status-wip` | `#F5B544` | Selo "em construção" (fundo `rgba(245,181,68,.08)`, borda `rgba(245,181,68,.35)`) |

Alternativas testadas para o destaque: `#7AA2F7` (azul), `#F5B544` (âmbar), `#F28FAD` (rosa). Deixe o destaque como uma variável CSS para poder trocar.

### Tipografia

- **Sans:** `Geist` (400, 500, 600, 700), com fallback `system-ui, sans-serif`. Usada em títulos e corpo.
- **Mono:** `JetBrains Mono` (400, 500), com fallback `ui-monospace, monospace`. Usada em rótulos, navegação, chips, datas e `perfil.json`.
- Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Elemento | Tamanho | Peso | Extra |
|---|---|---|---|
| H1 (nome) | `clamp(2.75rem, 6.5vw, 5rem)` | 600 | `letter-spacing: -0.035em; line-height: 1.02` |
| Subtítulo (cargo) | `clamp(1.25rem, 2.2vw, 1.6rem)` | 500 | |
| H2 de seção | `clamp(1.75rem, 3vw, 2.25rem)` | 600 | `letter-spacing: -0.02em` |
| H2 do contato | `clamp(2.5rem, 5.5vw, 4rem)` | 600 | |
| H3 de experiência / formação | `1.3rem` | 600 | |
| H3 de projeto | `1.75rem` | 600 | |
| Corpo grande | `17–18px` | 400 | `line-height: 1.65–1.75` |
| Corpo | `15px` | 400 | `line-height: 1.6–1.65` |
| Mono rótulos | `12–13.5px` | 400/500 | |

### Forma e espaço

- **Container:** `max-width: 1120px`, padding lateral `1.5rem`. O contato usa `760px`.
- **Seções:** padding vertical `5.5rem`; o contato usa `7rem`. Cada seção tem `border-top: 1px solid var(--border-soft)`.
- **Raios:** cartões de projeto `16px`, outros cartões `14px`, grade de números `12px`, botões `8px`, chips `6px`, selos `999px`.
- **Botões:** altura de `44px` (projetos), `48px` (abertura) e `52px` (contato). Todo alvo clicável precisa ter no mínimo 44px.

## Estrutura da página

Cabeçalho de seção padrão: número mono no destaque (`01.`), H2 e uma linha de 1px que ocupa o resto da largura.

1. **Header:** logo mono `~/matheus` (com `~/` no destaque), navegação mono `01. sobre … 05. contato`. Em telas estreitas, quebra em duas linhas (flex-wrap).
2. **Hero (`#topo`):** grade de 2 colunas (`repeat(auto-fit, minmax(min(100%, 440px), 1fr))`).
   - **Esquerda:** selo "Disponível para novas oportunidades" (ponto no destaque com halo), `$ whoami`, nome, cargo, frase de abertura, botões *Ver projetos* (primário) e *Entrar em contato* (contornado, âncora para `#contato`), e links mono GitHub, LinkedIn e E-mail.
   - **Direita:** cartão `perfil.json` com números de linha e realce de sintaxe (chaves no destaque, strings em `--text`, pontuação em `--faint`). Deve ter `overflow-x: auto` no celular.
   - O selo "Disponível" deve ser fácil de desligar (uma flag na configuração).
3. **01. Sobre mim (`#sobre`):** 2 colunas.
   - **Esquerda:** 2 parágrafos e uma faixa de 3 números de destaque (flex-wrap, `gap: 1px` sobre fundo `--border` para formar os divisores).
   - **Direita:** cartão `> stack --principal` com 4 grupos de chips. O último grupo ("Também trabalhei com") tem chips sem fundo e texto `--muted`.
4. **02. Experiência (`#experiencia`):** lista de 4 itens separados por `border-bottom`.
   - **Coluna esquerda (200px):** período, duração e o selo `promovido` quando houver.
   - **Coluna direita:** H3 com o cargo e `@ Empresa` no destaque, descrição, bullets com marcador quadrado de 6px no destaque, e chips de tecnologia.
   - No fim, link "Ver perfil completo no LinkedIn".
5. **03. Projetos em destaque (`#projetos`):** 2 cartões **em construção**, cada um com:
   - **Esquerda:** esboço de arquitetura sobre fundo quadriculado (`28px`), com caixas tracejadas ligadas por setas e a legenda "sujeito a mudanças".
   - **Direita:** categoria e selo `em construção`, nome, descrição e roadmap com contador `N de 4 etapas`.
     - Barra de progresso: trilho `#1B2028`, preenchimento no destaque com largura = % concluída.
     - Checkboxes: vazias com borda `--border-dashed`; quando concluídas, sugestão de preenchimento no destaque com ✓ em `--on-accent`.
   - Embaixo: stack planejada (chips tracejados), botão *Acompanhar no GitHub* e o texto `previsão: [mm/aaaa]`.
   - Depois dos 2 cartões: um cartão-link tracejado "Outros repositórios e experimentos → github.com/matheusm-luz".
6. **04. Formação (`#formacao`):** 2 cartões (pós-graduação e graduação), cada um com 5 disciplinas em chips. Abaixo, a lista `> certificações` em linhas com nome à esquerda e "instituição · ano" à direita.
7. **05. Contato (`#contato`):** centralizado, com H2 "Vamos conversar?", texto e os botões e-mail (primário, `mailto:`), LinkedIn e GitHub.
8. **Footer:** mono `12.5px`, com "© 2026 Matheus Monteiro da Luz" e "Feito com Angular · hospedado no GitHub Pages".

## Responsividade

- Mobile first, sem media queries obrigatórias. As grades usam `auto-fit/minmax(min(100%, Xpx), 1fr)` e as linhas usam `flex-wrap`, como na referência.
- Verifique em **390px** e **1440px**. Não pode haver scroll horizontal da página; só o `perfil.json` rola internamente.

## Comportamentos que não estão no desenho estático

- **Links externos:** `target="_blank" rel="noopener"`.
- **Âncoras:** `scroll-behavior: smooth` (desligar com `prefers-reduced-motion: reduce`) e `scroll-margin-top` nas seções.
- **Hover:**
  - Links de texto: passam para `--text`, ou sublinhado no destaque.
  - Botão primário: `filter: brightness(1.08)`.
  - Botões contornados: borda no destaque.
  - Transições de 150ms.
- **Foco visível:** `outline: 2px solid var(--accent); outline-offset: 3px` em todo elemento interativo.
- **Header:** opcionalmente fixo (`position: sticky`) com fundo `--bg` a 85% e `backdrop-filter: blur(8px)`.

## Implementação sugerida (Angular 18, standalone)

- Componentes: `HeaderComponent`, `HeroComponent`, `AboutComponent`, `ExperienceComponent`, `ProjectsComponent`, `EducationComponent`, `ContactComponent`, `FooterComponent` e `SectionHeadingComponent` (número + título + linha).
- Coloque os dados em `src/app/data/portfolio.data.ts`, tipados: perfil, links, números de destaque, stack, experiências, projetos (com `roadmap: { label: string; done: boolean }[]` e progresso calculado), formação e certificações. Atualizar o portfolio deve significar mexer só nesse arquivo.
- Defina os tokens como variáveis CSS em `src/styles.css`. **Remova** o estilo atual (Roboto, gradiente claro) e o conteúdo placeholder de `app.component.html`.
- Ícones em SVG inline com traço (stroke). Não use emoji nem biblioteca de ícones pesada.
- `index.html`:
  - `lang="pt-BR"`, title "Matheus Monteiro da Luz — Engenheiro de Software".
  - `meta description` e Open Graph (título, descrição, imagem).
  - Preconnect para o Google Fonts.
- **Deploy:** o script existente `npm run build-git` gera o build em `docs/` com `--base-href /profile-page/`. Confirme que o nome do repositório no GitHub bate com esse caminho.

## Pendências de conteúdo

- **Sem currículo:** a página não deve ter PDF de currículo nem link para download. Não publicar telefone nem documentos pessoais.
- **Previsão dos projetos:** o placeholder `previsão: [mm/aaaa]` aparece nos 2 cartões.
- **Modelo de trabalho preferido:** o placeholder `[Modelo de trabalho preferido…]` aparece no texto do contato.
- **Links dos projetos:** quando os repositórios dos projetos existirem, apontar *Acompanhar no GitHub* para eles. Hoje apontam para o perfil.

## Critérios de aceite

- A página fica visualmente igual a `portfolio-reference.html` em 1440px e em 390px.
- Não há scroll horizontal em 320–1920px.
- O Lighthouse dá Acessibilidade ≥ 95 e Performance ≥ 90.
- Contraste de texto ≥ 4.5:1.
- Todo o conteúdo vem de `portfolio.data.ts`.
