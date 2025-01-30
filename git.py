import os

# commitMsg = input("Enter Commit Message: ")
commitMsg = '''"updated the vercel.json routes"'''
print("git add . running")
os.system("git add .")

print("-----------\ngit commit -m {0} -----------\n".format(commitMsg))
os.system("git commit -m {0} ".format(commitMsg))
print("pushing")
os.system("git push origin main")