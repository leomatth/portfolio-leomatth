# 📧 Configuração EmailJS

## O que é EmailJS?

EmailJS permite enviar emails diretamente do navegador sem precisar de um backend. Perfeito para formulários de contato!

## Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em "Sign Up Free"
3. Crie sua conta (pode usar Google/GitHub)

### 2. Conectar um Email (Gmail Recomendado)

1. Vá para "Email Services" no painel
2. Clique em "Add Service"
3. Selecione "Gmail"
4. Siga as instruções para conectar sua conta Gmail
5. **Importante:** Use uma senha de app do Google, não sua senha normal
   - Vá em [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Gere uma senha para "Mail" e "Windows"
   - Use essa senha no EmailJS

### 3. Criar Template de Email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure assim:

**Template Name:** `contact_form`

**Email Subject:**
```
Novo Contato: {{from_name}}
```

**Email Content:**
```
Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Tipo de Serviço: {{service_type}}

Mensagem:
{{message}}
```

4. Clique em "Save"

### 4. Obter Suas Credenciais

1. Vá para "Account" → "API Keys"
2. Copie seu **Public Key**

3. Vá para "Email Services"
4. Copie o **Service ID** (ex: service_xxxxx)

5. Vá para "Email Templates"
6. Copie o **Template ID** (ex: template_xxxxx)

### 5. Atualizar o Código

No arquivo `src/components/ContactForm.jsx`, substitua:

```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```

por:

```javascript
emailjs.init('sua_public_key_aqui')
```

E substitua:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
```

por:

```javascript
await emailjs.send(
  'seu_service_id_aqui',
  'seu_template_id_aqui',
```

### 6. Testar

1. Preencha o formulário no seu portfólio
2. Clique em "Enviar Proposta"
3. Verifique seu email!

## Variáveis Disponíveis

No template, você pode usar:
- `{{from_name}}` - Nome completo
- `{{from_email}}` - Email do cliente
- `{{phone}}` - Telefone
- `{{service_type}}` - Tipo de serviço
- `{{message}}` - Descrição do projeto

## Limites Gratuitos

- **200 emails/mês** (gratuito)
- Depois disso, precisa de plano pago
- Planos começam em $14/mês

## Troubleshooting

### "Invalid Service ID"
- Verifique se copiou corretamente o Service ID
- Certifique-se que o serviço está ativo

### "Invalid Template ID"
- Verifique se o Template ID está correto
- Certifique-se que o template está publicado

### Email não chega
- Verifique a pasta de spam
- Verifique se o Gmail está conectado corretamente
- Teste com um email diferente

## Segurança

⚠️ **Importante:** Sua Public Key é pública (fica no código). Isso é seguro porque:
- Ela só permite enviar emails
- Não pode acessar seus dados
- EmailJS valida cada requisição

---

**Dúvidas?** Consulte a [documentação oficial](https://www.emailjs.com/docs/)
