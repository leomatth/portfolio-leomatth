# 🚀 Guia de Deploy

## Deploy no Vercel (Recomendado)

### Pré-requisitos
- Conta no Vercel (vercel.com)
- Repositório GitHub conectado

### Passos

1. **Conectar ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione o repositório `portfolio-leomatth`

2. **Configurar Build**
   - Framework: Next.js (ou Vite)
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Variáveis de Ambiente**
   - Adicione `.env.local` com as variáveis necessárias
   - Não commit `.env.local` no Git

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu portfólio estará online!

---

## Deploy Manual

### Build Local

```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build

# Testar build localmente
npm run preview
```

### Upload para Servidor

1. Faça upload da pasta `dist/` para seu servidor
2. Configure o servidor para servir `index.html` para todas as rotas
3. Ative HTTPS no seu domínio

---

## Domínio Personalizado

### No Vercel
1. Vá para Project Settings
2. Clique em "Domains"
3. Adicione seu domínio personalizado
4. Configure os DNS records conforme instruído

### Configuração DNS
- Aponte seu domínio para os servidores do Vercel
- Aguarde a propagação (pode levar até 48h)

---

## Monitoramento

- **Vercel Analytics**: Monitore performance e uso
- **Google Analytics**: Adicione para rastrear visitantes
- **Sentry**: Configure para rastrear erros em produção

---

## Atualizações

Após fazer alterações:

1. Commit e push para GitHub
2. Vercel detectará automaticamente as mudanças
3. Novo deploy será iniciado
4. Seu portfólio será atualizado automaticamente

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

---

## Troubleshooting

### Build falha
- Verifique se todas as dependências estão instaladas
- Rode `npm run lint` para verificar erros
- Verifique os logs do build no Vercel

### Página não carrega
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique se o domínio está configurado corretamente
- Verifique os headers de segurança

### Performance lenta
- Use Vercel Analytics para identificar gargalos
- Otimize imagens
- Verifique o tamanho do bundle com `npm run build`

---

**Dúvidas?** Entre em contato: leomattheus95@gmail.com
