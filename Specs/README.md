Comment commiter les codes reviews


# git pull sur master
git pull 

# checkout la branche des specs
git checkout feature/specs

# Créer la barnche pour la user story (US_NAME est le nom de la user story)
git branch feature/specs_review_US_NAME 

# checkout ta branche 
git checkout feature/specs_review_US_NAME 

# Faire tes modifs

# Ajouter les fichiers
git add -A 

#Commiter les changements
git commit -m "MESSAGE DE COMMIT"

#Push sur le repos à distance
git push --set-upstream origin feature/specs_review_US_NAME
