Comment commiter les codes reviews

git pull (sur master)

git checkout feature/specs

git branch feature/specs_review_US_NAME 
# US_NAME est le nom de la user story

Faire les modifs

# Ajout les fichiers
git add -A 

#Commiter les changements
git commit -m "MESSAGE DE COMMIT"

#Push sur le repos à distance
git push --set-upstream origin feature/specs_review_US_NAME
