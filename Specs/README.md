# Comment commiter les codes reviews

### Synchroniser le local avec le remote
git fetch origin

### créer la branche locale feature/specs à partir de la branche remote et se placer dessus
git checkout -b feature/specs origin/feature/specs

### Une fois placée dans feature/specs, créer la sous-branche pour la user story (US_NAME est le nom de la user story)
git branch feature/specsUSName

### checkout ta branche 
git checkout feature/specsUSName

### Faire tes modifs

### Ajouter les fichiers
git add -A 

### Commiter les changements
git commit -m "MESSAGE DE COMMIT"

### Push sur le repos à distance
git push --set-upstream origin feature/specsUSName

### Faire la pull request
