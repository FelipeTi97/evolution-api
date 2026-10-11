# Git Hooks Configuration

Este projeto usa [Husky](https://typicode.github.io/husky/) para automatizar verificações de qualidade de código.

## Hooks Configurados

### Pre-commit
- **Arquivo**: `.husky/pre-commit`
- **Executa**: `npx lint-staged`
- **Função**: Executa lint e correções automáticas apenas nos arquivos modificados

### Pre-push  
- **Arquivo**: `.husky/pre-push`
- **Executa**: `npm run build` + `npm run lint:check`
- **Função**: Verifica se o projeto compila e não tem erros de lint antes do push

## Lint-staged Configuration

Configurado no `package.json`:

```json
module.exports = {
  'src/**/*.{ts,js}': ['eslint --fix'],
  'src/**/*.ts': [() => 'tsc --noEmit'],
};
```

O type-check usa uma função de configuração para impedir que o `lint-staged` acrescente os caminhos dos arquivos ao comando global do TypeScript. Não é necessário iniciar `sh`/`bash`, mantendo o hook compatível com Windows.

## Como funciona

1. **Ao fazer commit**: Executa lint apenas nos arquivos modificados
2. **Ao fazer push**: Executa build completo e verificação de lint
3. **Se houver erros**: O commit/push é bloqueado até correção

## Comandos úteis

```bash
# Pular hooks (não recomendado)
git commit --no-verify
git push --no-verify

# Executar lint manualmente
npm run lint

# Executar build manualmente  
npm run build
```
