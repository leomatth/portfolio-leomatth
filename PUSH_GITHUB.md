# 📤 Instruções para Push no GitHub

## Passo a Passo para Atualizar o Repositório

### 1. Abra o Terminal/PowerShell

Navegue até a pasta do projeto:
```powershell
cd C:\Users\leoma\Desktop\Projetos\portfolio-leomatth
```

### 2. Verifique o Status do Git

```bash
git status
```

Você verá todos os arquivos modificados e novos.

### 3. Adicione Todos os Arquivos

```bash
git add .
```

### 4. Faça um Commit

```bash
git commit -m "Atualizar portfólio com novo design, projetos reais e melhorias de segurança"
```

### 5. Faça o Push para o GitHub

```bash
git push origin main
```

Se pedir autenticação:
- Use seu token do GitHub (não a senha)
- Ou configure SSH key

---

## Se o Repositório Estiver Vazio

Se o repositório remoto estiver vazio, você pode:

### Opção 1: Remover e Adicionar Remote

```bash
# Remover remote atual
git remote remove origin

# Adicionar novo remote
git remote add origin https://github.com/leomatth/portfolio-leomatth.git

# Push para main
git push -u origin main
```

### Opção 2: Force Push (Cuidado!)

```bash
git push -f origin main
```

⚠️ **Aviso**: Force push sobrescreve o histórico. Use apenas se tiver certeza.

---

## Verificar o Push

Após o push, verifique no GitHub:
1. Acesse https://github.com/leomatth/portfolio-leomatth
2. Verifique se todos os arquivos estão lá
3. Verifique se o README está renderizado corretamente

---

## Arquivos Importantes Adicionados

✅ README.md - Documentação profissional  
✅ SECURITY.md - Política de segurança  
✅ LICENSE - Licença MIT  
✅ DEPLOY.md - Guia de deploy  
✅ .env.example - Template de variáveis  
✅ favicon.svg - Logo "L" azul  

---

## Próximos Passos

Após o push:

1. **Deploy no Vercel**
   - Conecte seu repositório ao Vercel
   - Configure o domínio personalizado
   - Ative HTTPS

2. **Monitoramento**
   - Configure Google Analytics
   - Configure Sentry para erros
   - Monitore performance

3. **Manutenção**
   - Mantenha dependências atualizadas
   - Revise logs de segurança regularmente
   - Atualize conteúdo conforme necessário

---

**Dúvidas?** Entre em contato: leomattheus95@gmail.com
