import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 3. Yerli mühitdə `build` əmrini sınayın
Vercel-ə göndərməzdən əvvəl kompüterinizdə terminalda bu əmri yoxlayın:
```bash
npm run build
```
Əgər yerli kompüterinizdə də xəta versə, deməli problem kodunuzdadır. Terminalda xətanın sonuna baxın, orada adətən hansı faylın və ya kitabxananın xəta verdiyi yazılır (məsələn: `Module not found` və ya `Syntax Error`).

### 4. `node_modules` və `package-lock.json` yenilənməsi
Bəzən faylların korlanması bu xətaya səbəb olur. Aşağıdakı əmrlərlə təmizləyib yenidən sınayın:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
