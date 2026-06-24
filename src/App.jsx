function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Korrektor Tətbiqi</h1>
      <p>Tətbiq uğurla işə düşdü!</p>
    </div>
  );
}

export default App;
```

### Nə etməlisiniz:
1. VS Code-da `src/App.jsx` faylını açın.
2. Bütün köhnə kodu silin və yuxarıdakı kodu ora yapışdırın.
3. Faylı yadda saxlayın (`Ctrl + S`).
4. Terminalda bu əmrləri icra edərək dəyişikliyi GitHub-a göndərin:
   ```bash
   git add src/App.jsx
   git commit -m "Add content to App component"
   git push
