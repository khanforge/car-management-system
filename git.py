import os

# commitMsg = input("Enter Commit Message: ")
commitMsg = '"updated the vercel.json"'
print("git add . running")
os.system("git add .")
print("git commit -m {0} ".format(commitMsg))
os.system("git commit -m {0} ".format(commitMsg))
print("pushing")
os.system("git push origin main")