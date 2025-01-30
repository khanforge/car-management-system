import os

# commitMsg = input("Enter Commit Message: ")
commitMsg = "updated the vercel.json"

os.system("git add .")
os.system("git commit -m " + commitMsg)
os.system("git push origin main")